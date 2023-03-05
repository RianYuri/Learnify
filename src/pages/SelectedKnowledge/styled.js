import styled from "styled-components";

export const Main = styled.main`
width: 100%;
height: 100vh;
background-color: var(--yellow-color);
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;

`
export const Section = styled.section`
display: flex;
align-items: flex-end;
width: 100%;
height: 90%;

`
export const ArticleQuestion = styled.article`
width: 100%;
height: 73%;
background-color: var(--light-color);
border-radius: 204px 204px 0px 0px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`
export const FaceImg = styled.img`
width: 125.48px;
height: 88px;
background-repeat: no-repeat;
background-size: cover;
margin-top: 60px;
`
export const Category = styled.h4`
width: 237px;
height: 46px;

font-family:var(--font-titles);
font-style: normal;
font-weight: 700;
font-size: 38px;
color:var(--dark-color);

`