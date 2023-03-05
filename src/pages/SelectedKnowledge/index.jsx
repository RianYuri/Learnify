import React from "react";
//Import styled components
import {
  ArticleQuestions,
  ArticleText,
  CategoryTitle,
  CategorySummary,
  FaceImg,
  Main,
  Section,
  Line,
  Circles,
  TypeQuestion,
  Types,
  ContainerCategories,
  FigureCategory,
  ImageCategory,
  ButtonsContainer,
  BackButton,
  ArrowIcon,
  StartTest,
} from "./styled";

// Import Images
import FaceHappy from "../../assets/imgs/FaceDesktop-4.svg";
import LanguageLearning from "../../assets/imgs/CategoryImage/language-learning.svg";
import ArrowLeft from "../../assets/imgs/arrow-left.svg";
import ArrowRight from "../../assets/imgs/arrow-right.svg";

// Codigo
const SelectedKnowledge = () => {
  return (
    <Main>
      <FaceImg src={FaceHappy} />
      <Section>
        {/* Primeira div pai */}

        <ArticleText>
          <CategoryTitle>Linguagens</CategoryTitle>
          <CategorySummary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            interdum, odio et suscipit faucibus, sem orci rutrum mi.
          </CategorySummary>
        </ArticleText>


        {/* Segunda div pai */}
        <ContainerCategories>
          <ArticleQuestions>
            <Line>
              <Circles></Circles>
              <Circles></Circles>
              <Circles></Circles>
            </Line>
            <Types>
              <TypeQuestion>Português</TypeQuestion>
              <TypeQuestion>Inglês</TypeQuestion>
              <TypeQuestion>Espanhol</TypeQuestion>
            </Types>
          </ArticleQuestions>
          <FigureCategory>
            <ImageCategory src={LanguageLearning} />
          </FigureCategory>
        </ContainerCategories>


        <ButtonsContainer>
          <BackButton>
            <ArrowIcon src={ArrowLeft} />
            Voltar
          </BackButton>
          <StartTest>
            Iniciar teste
            <ArrowIcon src={ArrowRight} />
          </StartTest>
        </ButtonsContainer>
      </Section>
    </Main>
  );
};
export default SelectedKnowledge;
