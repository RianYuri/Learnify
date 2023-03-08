import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./styled";
import Button from "../../global/Button";

import { userDataContext } from "../../contexts/UserDataContext";
import { questionDataContext } from "../../contexts/QuestionsDataContext";
import { categorySelectedContext } from "../../contexts/CategorySelectedContext";

import flag from "../../assets/imgs/flag.svg";
import close from "../../assets/imgs/x-circle.svg";
import faceSad from "../../assets/imgs/face-sad.svg";
import fileText from "../../assets/imgs/file-text.svg";
import refresh from "../../assets/imgs/refresh-ccw.svg";
import faceSmile from "../../assets/imgs/face-smile.svg";
import success from "../../assets/imgs/check-answer.svg";
import wrong from "../../assets/imgs/x-circle-answer.svg";

const Results = () => {
  const navigate = useNavigate();

  const { userData } = useContext(userDataContext);
  const { categorySelected } = useContext(categorySelectedContext);
  const { questions, userPoints, setQuestions } =
    useContext(questionDataContext);

  const [showResults, setShowResults] = useState(false);

  const letterOptions = ["A", "B", "C", "D"];

  const handleNavigate = (path) => {
    setQuestions([]);
    localStorage.removeItem("questions");
    if (path === "/home") localStorage.removeItem("categorySelected");
    navigate(path);
  };

  return (
    <Styles color={userPoints < 6 ? "red-dark" : "green"}>
      <img
        src={userPoints < 6 ? faceSad : faceSmile}
        alt=""
        className={`face ${userPoints < 6 ? "sad" : "happy"}`}
      />
      <section className="container">
        <section className="points">
          <img src={flag} alt="flag icon" />
          <h2>
            {userPoints}/{questions.length}
          </h2>
        </section>

        <section className="content">
          <div className="message">
            <h1>
              {userPoints < 6 ? "Poxa vida, " : "Parabéns, "}
              {userData.userName}!
            </h1>
            <p>
              {userPoints < 6
                ? "Você pode melhorar a sua pontuação! Veja a correção e tente refazer o seu teste."
                : "Ótima pontuação. Veja a correção do seu teste e pontos que você pode melhorar."}
            </p>
          </div>

          <div className="link" onClick={() => setShowResults(true)}>
            <p>Ver detalhes do teste</p>
            <img src={fileText} alt="" />
          </div>
        </section>
        <section className="buttons">
          <Button
            bg="transparent"
            color="#000"
            border="var(--dark-color)"
            onClick={() => handleNavigate("/select-knowledge")}
          >
            Refazer teste <img src={refresh} alt="" />
          </Button>
          <Button onClick={() => handleNavigate("/home")}>
            Voltar para a tela inicial
          </Button>
        </section>
      </section>

      <div className="background-elements">
        <div className="square type-1"></div>
        <div className="square type-2"></div>
        <div className="square type-3"></div>
        <div className="circle type-1"></div>
        <div className="circle type-2"></div>
        <div className="circle type-3"></div>
      </div>

      {showResults && (
        <div className="results-overlay">
          <section className="container-overlay">
            <img
              src={close}
              alt="Close icon"
              onClick={() => setShowResults(false)}
            />
            <section className="title">
              <h1>Resultado</h1>
              <p>
                Veja a correção do seu teste e pontos que você pode melhorar.
              </p>
            </section>

            <ul className="questions">
              {questions.map(
                ({ id: questionId, userAnswer, correctAnswer }, index) => {
                  const questionData = categorySelected.find(({ id }) => {
                    return id === questionId;
                  });
                  return (
                    <li key={index} className="question">
                      <section className="ask">
                        <div className="number">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>
                        <p>{questionData.question}</p>
                      </section>
                      <ul className="answers">
                        {questionData.options.map((option, index) => {
                          if (userAnswer === correctAnswer) {
                            return (
                              <li
                                key={index}
                                className={`answer ${
                                  correctAnswer === option ? "success" : ""
                                }`}
                              >
                                <h3 className="option">
                                  {letterOptions[index]}
                                </h3>
                                <p>{option}</p>
                                {correctAnswer === option && (
                                  <img src={success} alt="Success icon" />
                                )}
                              </li>
                            );
                          }
                          return (
                            <li
                              key={index}
                              className={`answer ${
                                userAnswer === option ? "wrong" : ""
                              } ${correctAnswer === option ? "success" : ""}`}
                            >
                              <h3 className="option">{letterOptions[index]}</h3>
                              <p>{option}</p>
                              {userAnswer === option && (
                                <img src={wrong} alt="Wrong icon" />
                              )}
                              {correctAnswer === option && (
                                <img src={success} alt="Success icon" />
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }
              )}
            </ul>
          </section>
        </div>
      )}
    </Styles>
  );
};

export default Results;
