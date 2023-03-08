import { vi } from "vitest";

const validateAnswerMock = vi.fn();
const questionDataContext = [
  {
    id: 1,
    userAnswer: "A",
    correctAnswer: "A",
  },
  {
    id: 2,
    userAnswer: "B",
    correctAnswer: "C",
  },
];

export const mockedQuestionsData = {
  validateAnswer: validateAnswerMock,
  questions: questionDataContext,
  userPoints: 1,
  setQuestions: () => "",
};
