import { useContext, useState } from "react";
import Styles from "./styled";
import Button from "../../global/Button";

import data from "../../services/data.json";
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
	const { categorySelected } = useContext(categorySelectedContext);
	const { questions, userPoints } = useContext(questionDataContext);

	const [showResults, setShowResults] = useState(false);

	const letterOptions = ["A", "B", "C", "D"];
	const smileConfig = { color: "", src: "", className: "" };
	if (userPoints < 6) {
		smileConfig.color = "red";
		smileConfig.src = faceSad;
		smileConfig.className = "sad";
	} else {
		smileConfig.color = "green";
		smileConfig.src = faceSmile;
		smileConfig.className = "happy";
	}

	return (
		<Styles color={smileConfig.color}>
			<img src={smileConfig.src} alt="" className={`face ${smileConfig.className}`} />
			<section className="container">
				<section className="points">
					<img src={flag} alt="flag icon" />
					<h2>
						{userPoints}/{questions.length}
					</h2>
				</section>

				<section className="content">
					<div className="message">
						<h1>Parabéns, Rebeca Baruch!</h1>
						<p>Ótima pontuação. Veja a correção do seu teste e pontos que você pode melhorar.</p>
					</div>

					<div className="link" onClick={() => setShowResults(true)}>
						<p>Ver detalhes do teste</p>
						<img src={fileText} alt="" />
					</div>
				</section>
				<section className="buttons">
					<Button bg="transparent" color="#000" border="var(--dark-color)">
						Refazer teste <img src={refresh} alt="" />
					</Button>
					<Button>Voltar para a tela inicial</Button>
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
						<img src={close} alt="Close icon" onClick={() => setShowResults(false)} />
						<section className="title">
							<h1>Resultado</h1>
							<p>Veja a correção do seu teste e pontos que você pode melhorar.</p>
						</section>

						<ul className="questions">
							{questions.map(({ questionId, answer, correctAnswer }, index) => {
								const questionData = data["Linguagens"].find(({ id }) => {
									return id === questionId;
								});
								return (
									<li key={index} className="question">
										<section className="ask">
											<div className="number">{(index + 1).toString().padStart(2, "0")}</div>
											<p>{questionData.question}</p>
										</section>
										<ul className="answers">
											{questionData.options.map((option, index) => {
												if (answer === correctAnswer) {
													return (
														<li key={index} className={`answer ${answer === option ? "success" : ""}`}>
															<h3 className="option">{letterOptions[index]}</h3>
															<p>{option}</p>
															{correctAnswer === option && <img src={success} alt="Success icon" />}
														</li>
													);
												}
												return (
													<li
														key={index}
														className={`answer ${answer === option ? "wrong" : ""} ${
															correctAnswer === option ? "success" : ""
														}`}
													>
														<h3 className="option">{letterOptions[index]}</h3>
														<p>{option}</p>
														{answer === option && <img src={wrong} alt="Wrong icon" />}
														{correctAnswer === option && <img src={success} alt="Success icon" />}
													</li>
												);
											})}
										</ul>
									</li>
								);
							})}
						</ul>
					</section>
				</div>
			)}
		</Styles>
	);
};

export default Results;
