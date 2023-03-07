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
import ArrowRightDisable from "../../assets/imgs/arrow-right-disable.svg";
import ArrowRightEnable from "../../assets/imgs/arrow-right-enable.svg";
//import Components
import QuestionAndAsk from "../QuestionAndAsk";
import { useNavigate } from "react-router-dom";
let proxQuestion = 1;
const Questions = () => {
  const [progress, setProgress] = useState(10);
  const [selectQuestionIsTrue, setSelectQuestionIsTrue] = useState();
  const navigate = useNavigate();



  if (progress === 110) {
    navigate("/results");
  }
  const clickQuestionIsTrue = (clickNextQuestionsIsTrue) => {
    if (!clickNextQuestionsIsTrue === true) {
      setSelectQuestionIsTrue(true);
    } else {
      setSelectQuestionIsTrue(false);
    }
  };
  const clickNextQuestions = () => {
    if(!selectQuestionIsTrue === true){

      setProgress(progress + 10);
      proxQuestion = proxQuestion + 1;
    }
  };
  return (
    <Main>
      <SectionComponents>
        <QuestionAndAsk
          proxQuestion={proxQuestion}
          clickQuestionIsTrue={clickQuestionIsTrue}
        ></QuestionAndAsk>
        <ArticleNext>
          <NextPage
            onClick={clickNextQuestions}
            topButton={selectQuestionIsTrue}
          >
            Próxima
          </NextPage>
          {selectQuestionIsTrue ? (
            <ArrowDisable src={ArrowRightDisable} />
          ) : (
            <ArrowDisable src={ArrowRightEnable} />
          )}
        </ArticleNext>
        <ProgressBarQuestions
          type="range"
          min="0"
          max="100"
          value="0"
          ProgressValue={progress}
        ></ProgressBarQuestions>
      </SectionComponents>
    </Main>
  );
};

export default Questions;
