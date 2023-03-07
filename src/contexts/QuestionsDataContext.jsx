import { createContext, useState, useMemo } from "react";

const questionsDefault = localStorage.getItem("questions") ? JSON.parse(localStorage.getItem("questions")) : [];

const questionDataContext = createContext();
const QuestionDataProvider = ({ children }) => {
	const [questions, setQuestions] = useState(questionsDefault);

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
		<questionDataContext.Provider value={{ questions, validateAnswer, userPoints, setQuestions }}>
			{children}
		</questionDataContext.Provider>
	);
};

export { questionDataContext, QuestionDataProvider };
