import React from "react";
//Import styled components
import { ArticleQuestion, Category, FaceImg, Main, Section } from "./styled";

// Import Images
import FaceHappy from '../../assets/imgs/FaceDesktop-4.svg'



// Codigo
export const SelectedKnowledge = () => {
  return (
    <Main>
      <FaceImg src={FaceHappy}/>
      <Section>
        <ArticleQuestion>
        <Category>
          Linguagens
        </Category>
        </ArticleQuestion>
      </Section>
    </Main>
  );
};
