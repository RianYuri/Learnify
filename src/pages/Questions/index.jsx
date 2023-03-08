import { useContext, useEffect, useState } from "react";
import { categorySelectedContext } from "../../contexts/CategorySelectedContext";

//Import Styles
import { Main, SectionComponents, ArticleNext, NextPage, ArrowDisable, ProgressBarQuestions } from "./styled";
// Import image
import ArrowRightDisable from "../../assets/imgs/arrow-right-disable.svg";
import ArrowRightEnable from "../../assets/imgs/arrow-right-enable.svg";
//import Components
import QuestionAndAsk from "../QuestionAndAsk";
import { useNavigate } from "react-router-dom";
import { questionDataContext } from "../../contexts/QuestionsDataContext";
import { userDataContext } from "../../contexts/UserDataContext";

let QuestionId = localStorage.getItem("questionId") ? +localStorage.getItem("questionId") : 0;
const Questions = () => {
		/* Se não tiver o nome do usuário, redireciona para a página inicial */
		const { userData, setUserData } = useContext(
			userDataContext.userName !== ""
				? userDataContext
				: {
						userName: localStorage.getItem("userName"),
				  }
		);
		useEffect(() => {
			if (userData.userName === "") {
		  const navigate = useNavigate();
				navigate("/");
			}
		}, []);
	const { categorySelected } = useContext(categorySelectedContext);

	const { validateAnswer, questions } = useContext(questionDataContext);
	const [answerData, setAnswerData] = useState({});
	const [selectQuestionIsTrue, setSelectQuestionIsTrue] = useState();
	const [progress, setProgress] = useState(QuestionId === 0 ? 10 : QuestionId * 10);
	const navigate = useNavigate();

	const handleAnswer = (data) => {
		setAnswerData(data);
	};
	const clickQuestionIsTrue = (clickNextQuestionsIsTrue) => {
		if (!clickNextQuestionsIsTrue === true) {
			setSelectQuestionIsTrue(true);
		} else {
			setSelectQuestionIsTrue(false);
		}
	};

	const clickNextQuestions = () => {
		if (!selectQuestionIsTrue === true) {
			validateAnswer(answerData);
			setProgress(progress + 10);
			QuestionId = QuestionId + 1;
			localStorage.setItem("questionId", QuestionId);
		}
	};
	useEffect(() => {
		if (questions.length === 10) {
			QuestionId = 0;
			localStorage.setItem("questionId", QuestionId);
			navigate("/results");
		}
	}, [questions.length]);

	return (
		<Main category={categorySelected[0].category}>
			<SectionComponents>
				<QuestionAndAsk
					QuestionId={QuestionId}
					handleAnswer={handleAnswer}
					clickQuestionIsTrue={clickQuestionIsTrue}
				></QuestionAndAsk>
				<ArticleNext>
					<NextPage onClick={clickNextQuestions} topButton={selectQuestionIsTrue}>
						Próxima
					</NextPage>
					{selectQuestionIsTrue ? <ArrowDisable src={ArrowRightDisable} /> : <ArrowDisable src={ArrowRightEnable} />}
				</ArticleNext>
				<ProgressBarQuestions
					type="range"
					min="0"
					max="100"
					defaultValue="0"
					ProgressValue={progress}
				></ProgressBarQuestions>
			</SectionComponents>
		</Main>
	);
};

export default Questions;
