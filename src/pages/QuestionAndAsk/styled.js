import styled from "styled-components";
export const ArticleQuestions = styled.article`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap: 10px;

`
export const Question = styled.h4`
font-family: var(--font-titles);
max-width: 50%;
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 34px;
display: flex;
align-items: center;
text-align: center;
padding-bottom: 20px;
color: var(--dark-color);
@media (max-width: 768px) {
    max-width: 100%;
}
`
export const ArticleAB = styled.article`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 21px;
`
export const ArticleCD = styled.article`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 21px;

`
export const NumberQuestion =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 50px;
height: 54px;

background: #FFFA69;
font-style: normal;
font-weight: 700;
font-size: 28px;
font-family: var(--font-titles);
color: var(--dark-color);
`

export const AnswersButton = styled.button`
width: 358px;
height: 81px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 50px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
border-bottom:${props => props.topButton && '8px solid #FFFA69'};
transition: 0.2s ease-in-out;
`
export const ABCD = styled.h4`
font-family: var(--font-titles);
font-weight: 700;
font-size: 34px;
color: var(--dark-color);
margin-left: 18px;
` 
export const AnswersText = styled.p`
font-family: var(--font-texts);
font-weight: 400;
font-size: 17px;
color: var(--dark-color);
`