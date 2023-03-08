import styled from "styled-components";
import { useContext } from "react";
import { categorySelectedContext } from "../../contexts/CategorySelectedContext";


const themeKnowledge = (knowledge) => {
  switch (knowledge) {
    case "Matemática":
      return "red";
    case "Linguagens":
      return "yellow";
      case "Direito":
      return "orange";
    case "Programação":
      return "light-blue";
      case "Conhecimento Geral":
        return "primary";
  }
};

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--${(props) => themeKnowledge(props.category)}-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
export const FaceImg = styled.img`
  width: 105.48px;
  height: 88px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 50px;
`;
export const Section = styled.section`
  width: 100%;
  height: 70%;
  background-color: var(--light-color);
  border-radius: 204px 204px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 813px) {
    border-radius: 44px 44px 0px 0px;
    padding: 40px 40px 0px 40px;
    justify-content: flex-start;
  }
`;
// Primeira article pai
export const ArticleText = styled.article`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 813px) {
    align-items: flex-start;
  }
`;

export const CategoryTitle = styled.h4`
  font-family: var(--font-titles);
  font-style: normal;
  font-weight: 700;
  font-size: 1.7rem;
  color: var(--dark-color);
  @media (max-width: 813px) {
    width: 290px;
  }
`;
export const ContainerSummaryH4 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
`;
export const CategorySummary = styled.p`
  width: 100%;
  font-family: var(--font-texts);
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  @media (max-width: 813px) {
    width: 100%;
    font-size: 1rem;
  }
  color: #000000;
`;
export const ArticleQuestions = styled.article`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

// Segunda article Pai
export const ContainerCategories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 180px;
  @media (max-width: 813px) {
    justify-content: flex-start;
    padding-top: 38px;
    padding-bottom: 70px;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 88.43px;
  background: #d9d9d9;
  margin: 0%;
  margin-top: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
export const Circles = styled.div`
  width: 10px;
  height: 16px;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const TypeQuestion = styled.p`
  font-family: var(--font-titles);
  width: 100px;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  color: #000000;
`;
export const Types = styled.div`
  height: 94.43px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 23px;
`;
export const FigureCategory = styled.figure`
  justify-content: center;
  align-items: center;
  @media (max-width: 813px) {
  }
`;
export const ImageCategory = styled.img`
  width: 98px;
  height: 83px;
  @media (max-width: 813px) {
    width: 88px;
    height: 73px;
    position: absolute;
    top: 33vh;
    right: 8vw;
  }
`;

// Terceira article pai
export const ButtonsContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  flex-direction: row;
  gap: 28px;
  padding-top: 60px;
  @media (max-width: 813px) {
    display: flex;
    flex-direction: column-reverse;
    height: 0%;
    margin-top: 20px;
    padding-top: 3%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 238px;
  height: 71px;
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: 18px;
`;
export const ArrowIcon = styled.img`
  width: 28px;
  height: 28px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 813px) {
    display: ${(props) => props.topButton && "none"};
  }
`;
export const StartTest = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 180px;
  height: 50px;
  background: #323232;
  border-radius: 10px;
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: 15px;

  color: #ffffff;
  @media (max-width: 813px) {
    width: 280px;
    height: 60px;
    font-size: 18px;
    padding: 8%;
  }
`;
