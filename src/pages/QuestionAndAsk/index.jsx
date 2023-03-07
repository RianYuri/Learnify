import { useEffect, useState, useContext } from "react";

import { categorySelectedContext } from "../../contexts/CategorySelectedContext";

import {
	ArticleQuestions,
	Question,
	AnswersButton,
	ABCD,
	AnswersText,
	ArticleAB,
	ArticleCD,
	NumberQuestion,
} from "./styled";

const QuestionAndAsk = ({ QuestionId, handleAnswer }) => {
	const [questionId, setQuestionId] = useState(QuestionId);
	const [selectAsk, setSelectAsk] = useState();
	const { categorySelected } = useContext(categorySelectedContext);

	useEffect(() => {
		const data = {
			questionId: categorySelected[questionId].id,
			correctAnswer: categorySelected[questionId].answer,
			answer: categorySelected[questionId].options[selectAsk],
		};
		handleAnswer(data);
	}, [selectAsk]);

	useEffect(() => {
		setQuestionId(QuestionId);
	}, [QuestionId]);

	return (
		<ArticleQuestions>
			<NumberQuestion>{(questionId + 1).toString().padStart(2, "0")}</NumberQuestion>

			<Question>{categorySelected[questionId].question}</Question>
			<ArticleAB>
				<AnswersButton topButton={selectAsk === 0 ? true : false} onClick={() => setSelectAsk(0)}>
					<ABCD>A</ABCD>
					<AnswersText>{categorySelected[questionId].options[0]}</AnswersText>
				</AnswersButton>
				<AnswersButton topButton={selectAsk === 1 ? true : false} onClick={() => setSelectAsk(1)}>
					<ABCD>B</ABCD>
					<AnswersText>{categorySelected[questionId].options[1]}</AnswersText>
				</AnswersButton>
			</ArticleAB>
			<ArticleCD>
				<AnswersButton topButton={selectAsk === 2 ? true : false} onClick={() => setSelectAsk(2)}>
					<ABCD>C</ABCD>
					<AnswersText>{categorySelected[questionId].options[2]}</AnswersText>
				</AnswersButton>
				<AnswersButton topButton={selectAsk === 3 ? true : false} onClick={() => setSelectAsk(3)}>
					<ABCD>D</ABCD>
					<AnswersText>{categorySelected[questionId].options[3]}</AnswersText>
				</AnswersButton>
			</ArticleCD>
		</ArticleQuestions>
	);
};
export default QuestionAndAsk;
