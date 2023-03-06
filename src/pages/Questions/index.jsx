import { useState } from "react";
//Import Styles
import {
  Main,
  SectionComponents,
  ArticleNext,
  NextPage,
  ArrowDisable,
  ProgressBarQuestions,
} from "./styled";
// Import image
import ArrowRightDisable from "../../assets/imgs/arrow-right-disable.svg"
//import Components
import QuestionAndAsk from "../QuestionAndAsk"; 
import { useNavigate } from "react-router-dom";
let proxQuestion = 1;
const Questions = () => {
const [progress,setProgress] = useState(10)
const navigate = useNavigate()

const clickNextQuestions = () =>{
  setProgress(progress+10)
  proxQuestion = proxQuestion + 1; 
}

if(progress === 110){
    navigate('/results')
}


  return (
    <Main>
      <SectionComponents>
        <QuestionAndAsk proxQuestion={proxQuestion}></QuestionAndAsk>
        <ArticleNext>
            <NextPage onClick={clickNextQuestions}>Próxima</NextPage >
    <ArrowDisable src={ArrowRightDisable} />
        </ArticleNext>
        <ProgressBarQuestions type="range" min="0" max="100" value="0" ProgressValue={progress}></ProgressBarQuestions>
      </SectionComponents>
    </Main>
  );
};

export default Questions;
