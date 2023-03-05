import styled from "styled-components";

const Styles = styled.main`
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: 30% 70%;

	overflow: hidden;
	position: relative;

	width: 100%;
	height: 100%;
	min-height: 100vh;

	color: var(--dark-color);
	text-align: center;

	background-color: ${({ color }) => `var(--${color}-color)`};

	.container {
		z-index: 20;
		position: relative;

		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1.4rem;

		width: 100%;
		height: 100%;
		padding: 40px 25px;

		background-color: #fff;
		border-radius: 44px 44px 0px 0px;
	}

	.points img {
		width: 24px;
		margin-bottom: 5px;
	}
	.points h2 {
		font-size: 24px;
		font-weight: 700;
		font-family: var(--font-titles);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.content .link > p,
	.message h1 {
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.message h1 {
		font-size: 24px;
		margin-bottom: 5px;
	}
	.message p {
		font-family: var(--font-texts);
	}
	.content .link {
		display: flex;
		justify-content: center;
		gap: 5px;

		cursor: pointer;
	}
	.content .link p {
		text-decoration: underline;
	}
	.content .link img {
		width: 20px;
	}

	.container .buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10px;
		margin-top: 10px;
	}
	.container .buttons button {
		width: 100%;
		font-size: 16px;
		font-weight: 700;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.results-overlay {
		z-index: 30;
		position: absolute;

		width: 100%;
		height: 100%;
		min-height: 100vh;

		background-color: var(--backdrop-color);
	}
	.results-overlay .container-overlay {
		overflow-y: scroll;
		position: relative;

		display: flex;
		flex-direction: column;
		gap: 32px;

		width: 92%;
		max-width: 800px;
		max-height: 100vh;

		margin: 40px auto 0;
		padding: 110px 16px 0;

		text-align: left;
		background-color: #fff;
	}
	.container-overlay::-webkit-scrollbar {
		width: 5px;
		border-radius: 10px;
		background-color: #ccc;
	}
	.container-overlay::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #646464;
	}
	.container-overlay .title,
	.container-overlay .questions {
		margin: 0 auto;
		max-width: 500px;
	}

	.container-overlay > img {
		top: 20px;
		right: 12px;
		position: absolute;
	}
	.container-overlay .title h1 {
		margin-bottom: 10px;

		font-size: 28px;
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.container-overlay .title p {
		font-size: 14px;
		font-weight: 300;
		font-family: var(--font-texts);
	}

	.question {
		padding: 50px 0;

		border-top: 1px solid #c7c7c7;
		border-bottom: 1px solid #c7c7c7;
	}

	.question .ask {
		display: grid;
		grid-template-columns: 45px 1fr;
		gap: 15px;

		margin-bottom: 20px;
	}
	.question .ask .number,
	.question .ask p {
		font-size: 18px;
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.question .ask .number {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 45px;
		height: 45px;

		background-color: var(--yellow-color);
	}

	.question .answers {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.answers .answer {
		display: grid;
		grid-template-columns: 30px 1fr 20px;
		align-items: center;
		gap: 10px;

		width: 100%;
		padding: 18px;

		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
	}
	.answer.wrong {
		border-bottom: 4px solid var(--red-dark-color);
	}
	.answer.success {
		border-bottom: 4px solid var(--green-color);
	}
	.answer .option {
		font-size: 24px;
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.answer p {
		font-size: 14px;
		font-family: var(--font-texts);
	}

	.background-elements {
		z-index: 10;
		position: absolute;

		width: 100%;
		min-height: 100%;
	}
	.background-elements .square.type-3,
	.background-elements .circle {
		display: none;
	}
	.background-elements .square {
		width: 130px;
		height: 130px;
		position: absolute;
		border-radius: 30px;
		border: 70px solid var(--transparent-white-color);
	}
	.background-elements .square.type-1 {
		top: 20vh;
		left: -20vw;
		transform: rotate(52deg);
	}
	.background-elements .square.type-2 {
		top: 20vh;
		left: 80vw;
		transform: rotate(52deg);
	}
	.background-elements .circle {
		width: 120px;
		height: 120px;
		position: absolute;
		border-radius: 50%;
		border: 20px solid var(--transparent-white-color);
	}

	@media screen and (min-width: 768px) {
		.container {
			gap: 3rem;
			border-radius: 204px 204px 0px 0px;
		}

		.content {
			gap: 20px;
		}

		.container .buttons {
			gap: 20px;
		}

		.container .buttons button {
			width: 600px;
			font-size: 20px;
		}

		.container-overlay::-webkit-scrollbar {
			width: 8px;
		}

		.background-elements .square {
			border-width: 20px;
		}
		.background-elements .square.type-1 {
			top: 25vh;
			left: 20vw;
		}
		.background-elements .square.type-2 {
			top: 20vh;
			left: 80vw;
			transform: rotate(-29deg);
		}
		.background-elements .square.type-3 {
			top: -12vh;
			left: 30vw;
			display: block;
			transform: rotate(-29deg);
		}
	}

	@media screen and (min-width: 769px) {
		.background-elements .square {
			border-width: 20px;
		}
		.background-elements .square.type-1 {
			top: 22vh;
			left: 20vw;
		}
		.background-elements .square.type-2 {
			top: 15vh;
			left: 94vw;
		}
		.background-elements .square.type-3 {
			top: -10vh;
			left: 35vw;
		}

		.background-elements .circle {
			display: block;
		}
		.background-elements .circle.type-1 {
			top: -5vh;
			left: 70vw;
		}
		.background-elements .circle.type-2 {
			top: 18vh;
			left: 75vw;
		}
		.background-elements .circle.type-3 {
			top: 10vh;
			left: -3vw;

			width: 140px;
			height: 140px;
			border-width: 30px;
		}
	}
`;

export default Styles;
