import styled from "styled-components";

const Styles = styled.main`
    .splash__animation{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .square{
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            border-radius: 15%;
            background: var(--primary-disabled);
            &.type-1{
                transform: rotate(45deg);
                left: initial;
                right: 0;
            }
        }
        
    }

`;


export default Styles;