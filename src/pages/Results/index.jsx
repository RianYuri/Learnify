import { useState } from "react";
import Styles from "./styled";
import Button from "../../global/Button";

import flag from "../../assets/imgs/flag.svg";
import close from "../../assets/imgs/x-circle.svg";
import faceSad from "../../assets/imgs/face-sad.svg";
import fileText from "../../assets/imgs/file-text.svg";
import refresh from "../../assets/imgs/refresh-ccw.svg";
import faceSmile from "../../assets/imgs/face-smile.svg";
import success from "../../assets/imgs/check-answer.svg";
import wrong from "../../assets/imgs/x-circle-answer.svg";

const Results = () => {
	const [smile, setSmile] = useState(true);
	const [showResults, setShowResults] = useState(false);

	return (
		<Styles color={smile ? "green" : "red"}>
			<img src={smile ? faceSmile : faceSad} alt="" className={`face ${smile ? "happy" : "sad"}`} />
			<section className="container">
				<section className="points">
					<img src={flag} alt="flag icon" />
					<h2>07/10</h2>
				</section>

				<section className="content">
					<div className="message">
						<h1>Parabéns, Rebeca Baruch!</h1>
						<p>Ótima pontuação. Veja a correção do seu teste e pontos que você pode melhorar.</p>
					</div>

					<div className="link">
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
							<li className="question">
								<section className="ask">
									<div className="number">01</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
								</section>
								<ul className="answers">
									<li className="answer wrong">
										<h3 className="option">A</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<img src={wrong} alt="Wrong icon" />
									</li>
									<li className="answer success">
										<h3 className="option">B</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<img src={success} alt="Success icon" />
									</li>
									<li className="answer">
										<h3 className="option">C</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</li>
									<li className="answer">
										<h3 className="option">D</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</li>
								</ul>
							</li>
							<li className="question">
								<section className="ask">
									<div className="number">01</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
								</section>
								<ul className="answers">
									<li className="answer wrong">
										<h3 className="option">A</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<img src={wrong} alt="Wrong icon" />
									</li>
									<li className="answer success">
										<h3 className="option">B</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<img src={success} alt="Success icon" />
									</li>
									<li className="answer">
										<h3 className="option">C</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</li>
									<li className="answer">
										<h3 className="option">D</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</li>
								</ul>
							</li>
							<li className="question">
								<section className="ask">
									<div className="number">01</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
								</section>
								<ul className="answers">
									<li className="answer wrong">
										<h3 className="option">A</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<img src={wrong} alt="Wrong icon" />
									</li>
									<li className="answer success">
										<h3 className="option">B</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<img src={success} alt="Success icon" />
									</li>
									<li className="answer">
										<h3 className="option">C</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</li>
									<li className="answer">
										<h3 className="option">D</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</li>
								</ul>
							</li>
						</ul>
					</section>
				</div>
			)}
		</Styles>
	);
};

export default Results;
