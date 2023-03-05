import styled from "styled-components";
import { keyframes } from "styled-components";

const squareAnim1 = keyframes`
    0%{
        transform: rotate(115deg);
    }
    60%{
        background: var(--primary-disabled);
        transform: rotate(115deg);
    }
    100%{
        background: var(--primary-color);
        transform: translate(-2vh, 2vw) rotate(130deg);
    }
`;
const squareAnim2 = keyframes`
        0%{
        transform: rotate(140deg);
    }
    60%{
        background: var(--primary-disabled);

        transform: rotate(140deg);
    }
    90%{
        background: var(--primary-color);
    }
    100%{
        background: var(--primary-color);
        transform: translate(-2vh, 0vw) rotate(155deg);
    }
`;
const squareAnim3 = keyframes`
        0%{
        transform: rotate(70deg);
    }
    60%{
        background: var(--primary-disabled);
        transform: rotate(70deg);
    }
    90%{
        background: var(--primary-color);
    }
    100%{
        background: var(--primary-color);
        transform: translate(2vh, 5vw) rotate(85deg);
    }
`;
const squareAnim4 = keyframes`
        0%{
        transform: rotate(55deg);
    }
    60%{
        background: var(--primary-disabled);

        transform: rotate(55deg);
    }
    90%{
        background: var(--primary-color);
    }
    100%{
        background: var(--primary-color);
        transform: translate(2vh, 2vw) rotate(70deg);
    }
`;

const logoWrapperAnim = keyframes`

    0%{
        transform: translateX(-38%);
    }
    60%{
        transform: translateX(-38%);
    }
    100%{
        transform: translateX(0%);
    }
`;

const logoAnim = keyframes`
        0%{
            transform: translateX(75%);
        }
        60%{
        transform: translateX(75%);
        }
        70%{
        opacity: 1;
        }
        100%{
        opacity: 1;
            transform: translateX(0%);
        }
`;
 const goToName = keyframes`
    0%{
        transform: translateY(0%);
    }
    80%{
        transform: translateY(0%);
    }
    98%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(-100%);
    }
`;

const Styles = styled.main`
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .splash__animation{
    background: var(--light-color);
    z-index: 2;
    height: 100vh;
    animation:  ${goToName} 2.4s ease-in-out forwards;
    .splash-1{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .square{
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 15%;
            background: var(--primary-disabled);
            transition: all .3s ease-in-out;
            @media screen and (min-width: 768px){
                width: 15rem;
                height: 15rem;
            }
            &.type-1{
                transform: rotate(115deg);
                left: initial;
                top: -1vh;
                bottom: initial;
                right: -12vw;
                animation: ${squareAnim1} 1.2s ease-in-out forwards;
            }
            &.type-2{
                transform: rotate(140deg);
                left: -12vw;
                top: 28vh;
                bottom: initial;
                right: initial;
                animation: ${squareAnim2} 1.2s ease-in-out forwards;
            }
            &.type-3{
                transform: rotate(99deg);
                left: initial;
                top: 55vh;
                bottom: initial;
                right: -12vw;
                animation: ${squareAnim3} 1.2s ease-in-out forwards;
            }
            &.type-4{
                transform: rotate(55deg);
                left: -12vw;
                top: 82vh;
                bottom: initial;
                right: initial;
                animation: ${squareAnim4} 1.2s ease-in-out forwards;
            } 
            @media screen and (min-width: 768px){
                &.type-1{
                    left: initial;
                    top: -10vh;
                    bottom: initial;
                    right: -8vw;
                }
                &.type-2{
                    left: -12vw;
                    top: 1vh;
                    bottom: initial;
                    right: initial;
                }
                &.type-3{
                    left: initial;
                    top: 70vh;
                    bottom: initial;
                    right: -12vw;
                }
                &.type-4{
                    left: -12vw;
                    top: 80vh;
                    bottom: initial;
                    right: initial;
                } 
            }
        }
        .logo__wrapper{
            height: 100px;
            position: relative;
            overflow: hidden;
            transform: translateX(-38%);
            animation: ${logoWrapperAnim} 1.2s ease-in-out forwards;
        }
        .splash__logo-2{
            height: 100px;
            opacity: 0;
            transform: translateX(75%);
            animation: ${logoAnim} 1.2s ease-in-out forwards;
        }
    }
        
    } 
    .name__input-form{
        transform: translateY(-100vh);
        height: 100vh;
        width: 100%;
        
        .square{
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 15%;
            background: ${(prop) => prop.active ? 'var(--primary-color)' : 'var(--primary-disabled)'};
            @media screen and (min-width: 768px){
                width: 15rem;
                height: 15rem;
            }

            &.type-1{
                transform: rotate(115deg);
                left: initial;
                top: -10vh;
                bottom: initial;
                right: 8vw;
            }
            &.type-2{
                transform: rotate(140deg);
                left: -18vw;
                top: 15vh;
                bottom: initial;
                right: initial;
            }
            &.type-3{
                transform: rotate(70deg);
                left: initial;
                top: 70vh;
                bottom: initial;
                right: -18vw;
            }
            &.type-4{
                transform: rotate(55deg);
                left: -12vw;
                top: 95vh;
                bottom: initial;
                right: initial;
            } 
            @media screen and (min-width: 768px){
                &.type-1{
                    left: initial;
                    top: -10vh;
                    bottom: initial;
                    right: -8vw;
                }
                &.type-2{
                    left: -12vw;
                    top: 1vh;
                    bottom: initial;
                    right: initial; 
                }
                &.type-3{
                    left: initial;
                    top: 70vh;
                    bottom: initial;
                    right: -12vw;
                }
                &.type-4{
                    left: -12vw;
                    top: 80vh;
                    bottom: initial;
                    right: initial;
                } 
            }
        }
        .name__input-container{
            height: 100vh;
            width: 100%;
            padding: 6rem 0;
            display: grid;
            place-items: center;
            gap: 1rem;
            .name__input-logo{
                max-width: 100px;
            }
            .name__input{
                padding: .5rem;
                border-bottom: 2px solid var(--dark-color);
                font-size: 1.4rem;
                width: 80%;
                max-width: 320px;
                max-height: 80px;
            }
            .emote__happy, .emote__normal{
                width: 180px;
                margin: 2.5rem 0 ;
            }
            button{
                z-index: 2;
                margin-top: 1rem;
                width: 80%;
                max-width: 320px;
                max-height: 80px;
                cursor: ${(prop) => prop.active && 'pointer'};
            }
        }
    }
`;


export default Styles;