import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Questions from "../pages/Questions";
import QuestionAndAsk from "../pages/QuestionAndAsk";
import { userDataContext } from "../contexts/UserDataContext";
import { categorySelectedContext } from "../contexts/CategorySelectedContext";
import { questionDataContext } from "../contexts/QuestionsDataContext";
import React from "react";
import { mockedCategorySelected } from "./mocks/CategorySelectedMock";
import { mockedUserDataContext } from "./mocks/UserDataMock";
import { mockedQuestionsData } from "./mocks/QuestionsDataMock";

const componentRender = (
  <questionDataContext.Provider value={mockedQuestionsData}>
    <categorySelectedContext.Provider value={mockedCategorySelected}>
      <userDataContext.Provider value={mockedUserDataContext}>
        <BrowserRouter>
          <Questions />
        </BrowserRouter>
      </userDataContext.Provider>
    </categorySelectedContext.Provider>
  </questionDataContext.Provider>
);

const childrenComponentRender = (
  <questionDataContext.Provider value={mockedQuestionsData}>
    <categorySelectedContext.Provider value={mockedCategorySelected}>
      <userDataContext.Provider value={mockedUserDataContext}>
        <BrowserRouter>
          <QuestionAndAsk
            QuestionId={0}
            handleAnswer={() => ""}
            clickQuestionIsTrue={() => ""}
          />
        </BrowserRouter>
      </userDataContext.Provider>
    </categorySelectedContext.Provider>
  </questionDataContext.Provider>
);

beforeEach(() => {
  localStorage.clear();
});

describe("Questions", () => {
  it("should render component", () => {
    render(componentRender);
  });
  it("should return the correctly question title", () => {
    const { getByText } = render(childrenComponentRender);
    const questionTitle = getByText(
      mockedCategorySelected.categorySelected[0].question
    );
    expect(questionTitle).toBeInTheDocument();
  });
  it("should return the correctly options for question", () => {
    const { getByText } = render(childrenComponentRender);
    mockedCategorySelected.categorySelected[0].options.map((data) => {
      expect(getByText(data)).toBeInTheDocument();
    });
  });
  it("should select a option and click next button", () => {
    localStorage.setItem("questionId", "1");
    const { getByText, container } = render(componentRender);
    const buttonElement = getByText("Próxima");
    const buttonsList = container.querySelectorAll("button");
    let buttonClicked = false;
    buttonsList.forEach((button) => {
      button.addEventListener("click", () => {
        buttonClicked = true;
      });
    });

    fireEvent.click(buttonElement);
    fireEvent.click(buttonsList[0]);

    expect(localStorage.getItem("questionId")).toEqual("1");
    expect(buttonClicked).toBe(true);
  });
});
