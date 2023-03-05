import styled from "styled-components";

const Button = styled.button`
	transition: all 0.3s ease-in-out;
	padding: 1rem 2.8rem;
	background: ${(props) => (props.bg ? props.bg : "var(--dark-color)")};
	color: ${(props) => (props.color ? props.color : "var(--light-color)")};
	outline: ${(props) => props.border && `2px solid ${props.border}`};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	gap: 0.5rem;
	width: fit-content;
	border-radius: 10px;
	font-family: var(--font-texts);
	font-weight: 600;
`;

export default Button;
