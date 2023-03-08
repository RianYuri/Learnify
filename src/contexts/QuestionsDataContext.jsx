import { createContext, useState, useMemo } from "react";

const questionDataContext = createContext();
const QuestionDataProvider = ({ children }) => {
	const [questions, setQuestions] = useState(
		localStorage.getItem("questions") ? JSON.parse(localStorage.getItem("questions")) : []
	);
	const [questionId, setQuestionId] = useState(
		localStorage.getItem("questionId") ? +localStorage.getItem("questionId") : 0
	);

	const userPoints = useMemo(() => {
		let points = 0;
		questions.forEach((question) => {
			if (question.correctAnswer == question.userAnswer) {
				points += 1;
			}
		});
		return points;
	}, [questions.length]);

	const validateAnswer = ({ questionId, answer, correctAnswer }) => {
		const newQuestions = [...questions];
		newQuestions.push({
			id: questionId,
			correctAnswer,
			userAnswer: answer,
		});
		setQuestions(newQuestions);
		localStorage.setItem("questions", JSON.stringify(newQuestions));
	};

	return (
		<questionDataContext.Provider
			value={{ questions, validateAnswer, userPoints, setQuestions, questionId, setQuestionId }}
		>
			{children}
		</questionDataContext.Provider>
	);
};

export { questionDataContext, QuestionDataProvider };
