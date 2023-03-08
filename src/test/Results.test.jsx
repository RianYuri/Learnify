import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import Results from "../pages/Results";
import { mockedCategorySelected } from "./mocks/CategorySelectedMock";
import { mockedUserDataContext } from "./mocks/UserDataMock";
import { mockedQuestionsData } from "./mocks/QuestionsDataMock";
import { questionDataContext } from "../contexts/QuestionsDataContext";
import { userDataContext } from "../contexts/UserDataContext";
import { categorySelectedContext } from "../contexts/CategorySelectedContext";
import { useNavigate } from "react-router-dom";

const componentRender = (
  <questionDataContext.Provider value={mockedQuestionsData}>
    <categorySelectedContext.Provider value={mockedCategorySelected}>
      <userDataContext.Provider value={mockedUserDataContext}>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </userDataContext.Provider>
    </categorySelectedContext.Provider>
  </questionDataContext.Provider>
);

describe("Results", () => {
  it("should renders the correct message and points if user hits less than 6", () => {
    mockedUserDataContext.userData.userName = "Learnify";
    render(componentRender);
    expect(screen.getByText("Poxa vida, Learnify!"));
    expect(screen.getByText("1/2"));
  });
  it("should renders the correct message and points if user hits more than 6", () => {
    mockedUserDataContext.userData.userName = "Learnify";
    mockedQuestionsData.userPoints = 7;
    render(componentRender);
    expect(screen.getByText("Parabéns, Learnify!"));
    expect(screen.getByText("7/2"));
  });
});
