import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import QuickStart from "../pages/QuickStart";
import { userDataContext } from "../contexts/UserDataContext";
import React from "react";
import { questionDataContext } from "../contexts/QuestionsDataContext";
import { mockedQuestionsData } from "./mocks/QuestionsDataMock";

const setUserDataMock = vi.fn();
const userDataMock = { userName: "" };
const mockContextValue = {
  userData: userDataMock,
  setUserData: setUserDataMock,
};

const componentRender = (
  <questionDataContext.Provider value={mockedQuestionsData}>
  <userDataContext.Provider value={mockContextValue}>
    <BrowserRouter>
      <QuickStart />
    </BrowserRouter>
  </userDataContext.Provider>
  </questionDataContext.Provider>
);

describe("QuickStart", () => {
  it("should render component", () => {
    expect(render(componentRender));
  });

  it("should store username and navigate to home if button is clicked", () => {
    const { getByPlaceholderText, getByText } = render(componentRender);

    const usernameInput = getByPlaceholderText("Insira seu nome aqui");
    const buttonElement = getByText("Continuar");

    fireEvent.change(usernameInput, { target: { value: "Learnify" } });
    fireEvent.click(buttonElement);

    expect(setUserDataMock).toHaveBeenCalledWith({
      userName: "Learnify",
    });
  });
});
