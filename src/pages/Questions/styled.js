import styled from "styled-components";
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
justify-content: flex-end;
align-items: center;
flex-direction: column;

`
export const SectionComponents = styled.section`
width: 100%;
height: 75%;
background-color: var(--light-color);
display: flex;
flex-direction: column;
align-items: center;
border-radius: 40px 40px 0px 0px;
    padding:40px 40px 0px 40px;
    justify-content: flex-start;
    gap: 20px;
    @media (max-width: 768px) {
height: 90%;

}
`



export const ArticleNext = styled.article`
width: 100%;
height: 100%;
justify-content: flex-end;
align-items: center;
display: flex;
flex-direction: row;
`
export const NextPage = styled.h4`
font-family: var(--font-titles);

font-weight: 700;
font-size: 20px;
line-height: 24px;
color: ${props => props.topButton ? "#C6C6C6" : "#323232"};
cursor: pointer;
`
export const ArrowDisable = styled.img`
width: 24px;
height: 24px;
`
export const ProgressBarQuestions = styled.input`
width: 100%;
&[type="range"]{
    background: #C4C2C2;
    height: 16px;
    width: 100%;
    border-radius: 10px;
}
&[type="range"]::-webkit-slider-thumb {
-webkit-appearance: none;
background: #323232;
border-radius: 10px;
height: 16px;
max-width: 100%;
width: ${props => `${props.ProgressValue}%` };
transition: 0.5s ease-in-out;

}
`
