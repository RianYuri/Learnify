import React, { useState, useContext, useEffect } from "react";
import Styles from "./styled.js";
import fullLogo from "../../assets/imgs/logo-full.svg";
import arrowIcon from "../../assets/imgs/arrow-icon.svg";
import faceSmile from "../../assets/imgs/face-smile.svg";
import faceSerious from "../../assets/imgs/face-serious.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../global/Button.js";
import { userDataContext } from "../../contexts/UserDataContext.jsx";
import { questionDataContext } from "../../contexts/QuestionsDataContext.jsx";
import { categorySelectedContext } from "../../contexts/CategorySelectedContext.jsx";

const QuickStart = () => {
	const { userData, setUserData } = useContext(userDataContext);
	const { setQuestions, setQuestionId } = useContext(questionDataContext);
	const { setCategorySelected } = useContext(categorySelectedContext);

	// Cleanup
	useEffect(() => {
		localStorage.clear();
		setUserData({ userName: "" });
		setQuestions([]);
		setCategorySelected({});
		setQuestionId(0);
	}, []);

	const [nameActive, setNameActive] = useState({
		name: "",
		active: false,
	});

	const navigate = useNavigate();
	const handleChangeUserName = (e) => {
		setNameActive({
			name: e.target.value,
			active: e.target.value.length >= 3,
		});
	};
	const handleSaveUserName = async () => {
		if(nameActive.name > 3){
		try {
			setUserData({ userName: nameActive.name });
			localStorage.setItem("userName", nameActive.name);
		} catch (error) {
			console.log(error);
		} finally {
			navigate("/home");
		}
		}
	};
	return (
		<Styles active={nameActive.active}>
			<section className="splash__animation">
				<section className="splash-1">
					<div className="square type-1"></div>
					<div className="square type-2"></div>
					<div className="square type-3"></div>
					<div className="square type-4"></div>
					<div className="logo__wrapper">
						<img className="splash__logo-2" src={fullLogo} alt="Logo do learniFy" />
					</div>
				</section>
			</section>
			<section className="name__input-form">
				<div className="square type-1"></div>
				<div className="square type-2"></div>
				<div className="square type-3"></div>
				<div className="square type-4"></div>
				<section className="name__input-container">
					<img className="name__input-logo" src={fullLogo} alt="Logo do learniFy" />
					{nameActive.active ? (
						<img className="emote__happy" src={faceSmile} alt="Emote feliz" />
					) : (
						<img className="emote__normal" src={faceSerious} alt="Emote sério" />
					)}
					<input
						type="text"
						className="name__input"
						value={nameActive.name}
						onChange={handleChangeUserName}
						placeholder="Insira seu nome aqui"
					/>
					<Button onClick={handleSaveUserName} bg={!nameActive.active && "#959595"}>
						Continuar
						<img src={arrowIcon} />
					</Button>
				</section>
			</section>
		</Styles>
	);
};

export default QuickStart;
