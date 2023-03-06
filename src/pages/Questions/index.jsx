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
const Questions = () => {
const [progress,setProgress] = useState(10)
const navigate = useNavigate()
if(progress === 100){
    navigate('/results')
}
  return (
    <Main>
      <SectionComponents>
        <QuestionAndAsk></QuestionAndAsk>
        <ArticleNext>
            <NextPage onClick={()=> setProgress(progress+10)}>Próxima</NextPage >
    <ArrowDisable src={ArrowRightDisable} />
        </ArticleNext>
        <ProgressBarQuestions type="range" min="0" max="100" value="0" ProgressValue={progress}></ProgressBarQuestions>
      </SectionComponents>
    </Main>
  );
};

export default Questions;
