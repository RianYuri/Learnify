import styled from "styled-components";

const Styles = styled.section`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  .home__container {
    position: relative;
    width: 95%;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    place-items: center;
    grid-row-gap: 1rem;
    margin-top: 1rem;
    .square {
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 15%;
      background: ${(prop) =>
        prop.active ? "var(--primary-color)" : "var(--primary-disabled)"};
      @media screen and (min-width: 768px) {
        width: 15rem;
        height: 15rem;
      }
      &.type-1 {
        transform: rotate(115deg);
        left: initial;
        top: -10vh;
        bottom: initial;
        right: 8vw;
      }
      &.type-2 {
        transform: rotate(140deg);
        left: -18vw;
        top: 15vh;
        bottom: initial;
        right: initial;
      }
      &.type-3 {
        transform: rotate(70deg);
        left: initial;
        top: 70vh;
        bottom: initial;
        right: -18vw;
      }
      &.type-4 {
        transform: rotate(55deg);
        left: -12vw;
        top: 95vh;
        bottom: initial;
        right: initial;
      }
      @media screen and (min-width: 768px) {
        &.type-1 {
          left: initial;
          top: -10vh;
          bottom: initial;
          right: -8vw;
        }
        &.type-2 {
          left: -12vw;
          top: 1vh;
          bottom: initial;
          right: initial;
        }
        &.type-3 {
          left: initial;
          top: 70vh;
          bottom: initial;
          right: -12vw;
        }
        &.type-4 {
          left: -12vw;
          top: 80vh;
          bottom: initial;
          right: initial;
        }
      }
    }
    .heading {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      .home__title {
        font-size: 2rem;
        font-weight: 700;
        font-family: var(--font-titles);
        max-width: 80%;
      }
      .home__subtitle {
        font-size: 1.2rem;
        font-weight: 300;
        font-family: var(--font-texts);
      }
      .heading__logo {
        width: 100px;
      }
    }
    .categories__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      align-self: flex-start;
      width: 100%;
      height: 100%;
      max-width: 768px;
      max-height: 340px;
      div {
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        position: relative;

        span {
          z-index: 2;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: 600;
          gap: 0.5rem;
          padding: 1rem;
          img {
            width: 0.8rem;
          }
        }
        .illustration {
          height: 100px;
          position: absolute;
          bottom: -1rem;
          right: -1rem;
        }
      }
      .cat1 {
        color: var(--dark-color);
        background: var(--yellow-color);
        grid-area: 1 / 1 / 2 / 2;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat2 {
        color: var(--light-color);
        grid-area: 1 / 2 / 2 / 3;
        background: var(--red-color);
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat3 {
        color: var(--light-color);
        background: var(--orange-color);
        grid-area: 2 / 1 / 3 / 2;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat4 {
        color: var(--dark-color);
        background: var(--light-blue-color);
        grid-area: 2 / 2 / 3 / 3;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat5 {
        display: flex;
        gap: 0;
        justify-content: flex-start;
        align-items: flex-start;
        color: var(--light-color);
        background: var(--primary-color);
        grid-area: 1 / 3 / 3 / 4;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
        .title {
          font-size: 1.1rem;
          padding: 0 1rem;
        }
        .subtitle {
          padding: 0 1rem;
          font-size: 0.9rem;
          font-weight: 300;
        }
        .general {
          width: 100%;
          display: flex;
          justify-content: center;
          img {
            height: 150px;
          }
        }
        button {
          margin: 2rem 0;
          border-radius: 50px;
          padding: 1rem;
          margin: auto;
          width: 80%;
          height: 50px;
          font-size: 1.2rem;
          background: var(--light-color);
          color: var(--primary-color);
        }
      }
    }
    @media (max-width: 768px) {
      .categories__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 40% 30% 30%;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        height: 100vh;

        .cat1 {
          grid-area: 2 / 1 / 3 / 2;
        }
        .cat2 {
          grid-area: 2 / 2 / 3 / 3;
        }
        .cat3 {
          grid-area: 3 / 1 / 4 / 2;
        }
        .cat4 {
          grid-area: 3 / 2 / 4 / 3;
        }
        .cat5 {
          padding: 1rem 0.5rem;
          grid-column: 1 / span 2;
          grid-row: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(1, 1fr);
          grid-row-gap: 0.5rem;
          color: var(--light-color);
          background: var(--primary-color);
          transition: all 0.3s ease-in-out;
          &:hover {
            cursor: pointer;
            filter: brightness(0.95);
          }
          .title {
            grid-area: 1 / 1 / 2 / 3;
            font-size: 1.2rem;
            padding: 0 1rem;
          }
          .subtitle {
            grid-area: 2 / 1 / 3 / 3;
            padding: 0 1rem;
            font-size: 0.9rem;
            font-weight: 300;
          }
          .general {
            grid-area: 1 / 3 / 3 / 4;
            width: 100%;
            display: flex;
            justify-content: center;
            img {
              height: 100px;
            }
          }
          button {
            grid-area: 3 / 1 / 4 / 4;
            margin: 2rem 0;
            border-radius: 50px;
            margin: 0 1rem;
            padding: 1rem;
            width: 90%;
            max-width: 300px;
            height: 50px;
            font-size: 1.2rem;
            background: var(--light-color);
            color: var(--primary-color);
          }
        }
      }
    }
    @media (max-width: 520px) {
      .heading{
        gap: .5rem;
        .home__title{
          font-size: 1.2rem;
          width: 100%;
          text-align: start;
          align-self: flex-start;
        }
        .home__subtitle{
          font-size: 1.1rem;
            width: 100%;
          text-align: start;
        }
      }
      .categories__grid {
        .illustration {
          height: 60px !important;
          position: absolute;
          bottom: -1rem;
          right: -1rem;
        }
        .cat5 {
          button {
            max-width: 200px;
            padding: 5px;
            height: 30px;
          }
        }
      }
    }
    @media (max-width: 400px) {
      .categories__grid {
        .title {
          font-size: 1rem;
        }
        div {
          span {
            font-size: 1rem;
            img {
              display: none;
            }
          }
          .illustration {
            height: 40px;
            position: absolute;
            bottom: -1rem;
            right: -1rem;
          }
        }
      }
    }
    @media (max-width: 375px) {
      width: 95%;
      grid-row-gap: 1rem;
      .heading {
        .heading__logo {
          width: 60px;
        }
      }
      .home__subtitle {
        text-align: center;
      }
      .categories__grid {
        .title {
          font-size: 1rem;
        }
        div {
          span {
            font-size: 1rem;
            img {
              display: none;
            }
          }

          .illustration {
            height: 40px;
            position: absolute;
            bottom: -1rem;
            right: -1rem;
          }
        }

        .cat5 {
          button {
            margin: auto;
          }
          position: relative;
          .general {
            position: absolute;
            height: 60px;
            width: 60px;
            top: 0;
            left: 0;
            img {
              height: 60px;
              width: 60px;
              transform: translate(-50px, -50px);
            }
          }
        }
      }
    }
  }
`;

export default Styles;
