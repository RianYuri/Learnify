import { createContext, useState, useMemo } from "react";

const questionDataContext = createContext();
const QuestionDataProvider = ({ children }) => {
	const [questions, setQuestions] = useState([]);

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
	};

	return (
		<questionDataContext.Provider value={{ questions, validateAnswer, userPoints, setQuestions }}>
			{children}
		</questionDataContext.Provider>
	);
};

export { questionDataContext, QuestionDataProvider };
