import { useEffect, useState,useContext } from "react";
import data from "../../services/data.json";
import { categorySelectedContext } from "../../contexts/CategorySelectedContext";

import {
  ArticleQuestions,
  Question,
  AnswersButton,
  ABCD,
  AnswersText,
  ArticleAB,
  ArticleCD,
  NumberQuestion,
} from "./styled";
const QuestionAndAsk = ({proxQuestion}) => {

const [QuestionId, setQuestionId] = useState(0)
const [selectAsk, setSelectAsk] = useState();
  const { categorySelected } = useContext(categorySelectedContext);

useEffect(() => {
  

  setQuestionId(proxQuestion)

}, [proxQuestion])
 console.log(categorySelected)
  return (
    <ArticleQuestions>
        <NumberQuestion>
        {QuestionId < 10
            ? `0${QuestionId}`
            : `${QuestionId}`
          } 
        
  </NumberQuestion>

      <Question>{categorySelected[QuestionId].question}</Question>
      <ArticleAB>
        <AnswersButton
          topButton={selectAsk === 0 ? true : false}
          onClick={() => setSelectAsk(0)}
        >
          <ABCD>A</ABCD>
          <AnswersText>
          {categorySelected[QuestionId].options[0]}
          </AnswersText>
        </AnswersButton>
        <AnswersButton
          topButton={selectAsk === 1 ? true : false}
          onClick={() => setSelectAsk(1)}
        >
          <ABCD>B</ABCD>
          <AnswersText>
          {categorySelected[QuestionId].options[1]}
          </AnswersText>
        </AnswersButton>
      </ArticleAB>
      <ArticleCD>
        <AnswersButton
          topButton={selectAsk === 2 ? true : false}
          onClick={() => setSelectAsk(2)}
        >
          <ABCD>C</ABCD>
          <AnswersText>
          {categorySelected[QuestionId].options[2]}
          </AnswersText>
        </AnswersButton>
        <AnswersButton
          topButton={selectAsk === 3 ? true : false}
          onClick={() => setSelectAsk(3)}
        >
          <ABCD>D</ABCD>
          <AnswersText>
          {categorySelected[QuestionId].options[3]}
          </AnswersText>
        </AnswersButton>
      </ArticleCD>
    </ArticleQuestions>
  );
};
export default QuestionAndAsk;
