import { useContext, useEffect, useState } from "react";
//Import Styles
import { Main, SectionComponents, ArticleNext, NextPage, ArrowDisable, ProgressBarQuestions } from "./styled";
// Import image
import ArrowRightDisable from "../../assets/imgs/arrow-right-disable.svg";
//import Components
import QuestionAndAsk from "../QuestionAndAsk";
import { useNavigate } from "react-router-dom";
import { questionDataContext } from "../../contexts/QuestionsDataContext";
let QuestionId = 0;
const Questions = () => {
	const { validateAnswer, questions } = useContext(questionDataContext);

	const [answerData, setAnswerData] = useState({});
	const [progress, setProgress] = useState(10);
	const navigate = useNavigate();

	const handleAnswer = (data) => {
		setAnswerData(data);
	};

	const clickNextQuestions = () => {
		validateAnswer(answerData);

		setProgress(progress + 10);
		QuestionId = QuestionId + 1;
	};

	useEffect(() => {
		if (questions.length === 10) {
			navigate("/results");
		}
	}, [questions.length]);

	return (
		<Main>
			<SectionComponents>
				<QuestionAndAsk QuestionId={QuestionId} handleAnswer={handleAnswer}></QuestionAndAsk>
				<ArticleNext>
					<NextPage onClick={clickNextQuestions}>Próxima</NextPage>
					<ArrowDisable src={ArrowRightDisable} />
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
