import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "../pages/Home";
import { userDataContext } from "../contexts/UserDataContext";
import { categorySelectedContext } from "../contexts/CategorySelectedContext";
import React from "react";
import { mockedCategorySelected } from "./mocks/CategorySelectedMock";
import { mockedUserDataContext } from "./mocks/UserDataMock";

const componentRender = (
  <categorySelectedContext.Provider value={mockedCategorySelected}>
    <userDataContext.Provider value={mockedUserDataContext}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </userDataContext.Provider>
  </categorySelectedContext.Provider>
);

describe("Home", () => {
  it("should render home component", () => {
    render(componentRender);
  });
  it("should return correct name at title", () => {
    mockedUserDataContext.userData.userName = "Learnify";
    const { getByText } = render(componentRender);
    const titleElement = getByText(/Olá, Learnify/);
    expect(titleElement).toBeInTheDocument();
  });
  it("should user selected a an category", () => {
    const { getAllByAltText } = render(componentRender);
    const categories = getAllByAltText(/Ilustração/);

    categories.forEach((category) => {
      fireEvent.click(category);
    });
  });
});
