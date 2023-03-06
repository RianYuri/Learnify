import { createContext, useContext, useState, useMemo } from "react";
import { categorySelectedContext } from "./CategorySelectedContext";

import data from "../services/data.json";

const questionsDummy = [
  {
    questionId: 1,
    correctAnswer: "Raiva",
    answer: "Raiva",
  },
  {
    questionId: 2,
    correctAnswer: "Sad",
    answer: "Sad",
  },
  {
    questionId: 3,
    correctAnswer: "Malo",
    answer: "Malo",
  },
  {
    questionId: 4,
    correctAnswer: "Dente",
    answer: "Dente",
  },
  {
    questionId: 5,
    correctAnswer: "Libro",
    answer: "Libro",
  },
  {
    questionId: 10,
    correctAnswer: "Children",
    answer: "Childen",
  },
  {
    questionId: 7,
    correctAnswer: "I love you",
    answer: "I miss you",
  },
  {
    questionId: 8,
    correctAnswer: "Olá",
    answer: "Bonjour",
  },
];

const questionDataContext = createContext();
const QuestionDataProvider = ({ children }) => {
  const [questions, setQuestions] = useState(questionsDummy);
  const { categorySelected } = useContext(categorySelectedContext);

  const userPoints = useMemo(() => {
    let points = 0;
    questions.forEach((question) => {
      if (question.correctAnswer === question.answer) {
        points += 1;
      }
    });
    return points;
  }, [questions]);

  const validateAnswer = ({ questionId, answer }) => {
    const newQuestions = [...questions];

    const category = data["Linguagens"];
    const question = category.find((question) => {
      return question.id === questionId;
    });
    newQuestions.push({
      id: questionId,
      correctAnswer: question.answer,
      userAnswer: answer,
    });
    setQuestions(newQuestions);
  };

  return (
    <questionDataContext.Provider
      value={{ questions, validateAnswer, userPoints }}
    >
      {children}
    </questionDataContext.Provider>
  );
};

export { questionDataContext, QuestionDataProvider };
