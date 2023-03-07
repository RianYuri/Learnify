import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { categorySelectedContext } from "../../contexts/CategorySelectedContext";
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
import illMath from "../../assets/imgs/math-illustration.svg";
import illLaw from "../../assets/imgs/law-illustration.svg";
import illProg from "../../assets/imgs/prog-illustration.svg";
import illAll from "../../assets/imgs/all-illustration.svg";

// Codigo
const SelectedKnowledge = () => {
  const { categorySelected } = useContext(categorySelectedContext);
const [imageLanguage, setImageLanguage] = useState()
useEffect(() => {
  
  if(categorySelected[0].category=== "Matemática"){
    setImageLanguage(illMath);
  }
  else if(categorySelected[0].category=== "Linguagens" ){
  
    setImageLanguage(LanguageLearning);
  
  }
  else if(categorySelected[0].category=== "Direito" ){
  
    setImageLanguage(illLaw);
  
  }
  else if(categorySelected[0].category=== "Programação" ){
  
    setImageLanguage(illProg);
  
  }
  else{
  
    setImageLanguage(illAll);
  
  }
}, [])

  const navigate = useNavigate();
  return (
    <Main>
      <FaceImg src={FaceHappy} />
      <Section>
        {/* Primeira div pai */}

        <ArticleText>
          <CategoryTitle>{categorySelected[0].category}</CategoryTitle>
          <CategorySummary>
        { categorySelected[0].sobre}
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
              <TypeQuestion>{categorySelected[0].fieldStudy[0]}</TypeQuestion>
              <TypeQuestion>{categorySelected[0].fieldStudy[1]}</TypeQuestion>
              <TypeQuestion>{categorySelected[0].fieldStudy[2]}</TypeQuestion>
            </Types>
          </ArticleQuestions>
          <FigureCategory>
            <ImageCategory src={imageLanguage} />
          </FigureCategory>
        </ContainerCategories>
 {/* Terceira div pai */}
        <ButtonsContainer>
          <BackButton onClick={()=>navigate("/home") }>
            <ArrowIcon src={ArrowLeft} />
            Voltar
          </BackButton>
          <StartTest onClick={() => navigate("/questions")}>
            Iniciar teste
            <ArrowIcon src={ArrowRight} topButton="true" />
          </StartTest>
        </ButtonsContainer>
      </Section>
    </Main>
  );
};
export default SelectedKnowledge;
