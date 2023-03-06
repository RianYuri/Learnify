import { useState } from "react";
import data from "../../services/data.json";

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
const QuestionAndAsk = () => {

const [QuestionId, setQuestionId] = useState(1)


  const [selectAsk, setSelectAsk] = useState();
  const QuestionText = data["Linguagens"].find(({id }) => {
    return id === QuestionId;
  });
  return (
    <ArticleQuestions>
        <NumberQuestion> {QuestionText.id < 10
            ? `0${QuestionText.id}`
            : `${QuestionText.id}`
          } </NumberQuestion>

      <Question>{QuestionText.question}</Question>
      <ArticleAB>
        <AnswersButton
          topButton={selectAsk === 0 ? true : false}
          onClick={() => setSelectAsk(0)}
        >
          <ABCD>A</ABCD>
          <AnswersText>
          {QuestionText.options[0]}
          </AnswersText>
        </AnswersButton>
        <AnswersButton
          topButton={selectAsk === 1 ? true : false}
          onClick={() => setSelectAsk(1)}
        >
          <ABCD>B</ABCD>
          <AnswersText>
          {QuestionText.options[1]}
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
          {QuestionText.options[2]}
          </AnswersText>
        </AnswersButton>
        <AnswersButton
          topButton={selectAsk === 3 ? true : false}
          onClick={() => setSelectAsk(3)}
        >
          <ABCD>D</ABCD>
          <AnswersText>
          {QuestionText.options[3]}
          </AnswersText>
        </AnswersButton>
      </ArticleCD>
    </ArticleQuestions>
  );
};
export default QuestionAndAsk;
