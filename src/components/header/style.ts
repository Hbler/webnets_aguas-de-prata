import styled from "styled-components";

export const SHeader = styled.div``;

export const SAcessibilidade = styled.div`
  background-color: ${({ theme: { brand } }) => brand};

  .container {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
    }

    div {
      gap: 1rem;
      display: flex;
      button {
        color: #fff;
        font-weight: 700;

        padding: 0.5rem;
        background-color: #243e79;
        border-radius: 5px;
      }
    }

    ul {
      gap: 1rem;
      display: flex;
      align-items: center;

      font-size: 0.8rem;
    }
  }
`;

export const SInstitucional = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .institucional_logo {
      gap: 1rem;
      display: flex;
      align-items: center;

      img {
        max-width: 110px;
      }

      h1 {
        display: flex;
        flex-direction: column;

        color: #0a328b;
        span {
          font-size: 1.4rem;
        }
      }
    }

    .institucional_pesquisa {
      width: 60%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .social {
        gap: 1rem;
        display: flex;

        svg {
          font-size: 1.5rem;
          color: #0a328b;
        }
      }

      .pesquisa {
        border: 1px solid;
        border-radius: 5px;
        border-color: ${({ theme: { gray_three } }) => gray_three};

        overflow: hidden;

        input {
          border: none;
        }

        button {
          padding: 0.2rem 0.5rem;

          color: #fff;
          font-size: 1rem;

          background-color: #0a328b;

          svg {
            transform: translateY(10%);
          }
        }
      }
    }
  }
`;

export const SNavigation = styled.nav`
  background-color: ${({ theme: { dark_blue } }) => dark_blue};
  .container {
    ul {
      display: flex;
      justify-content: space-between;

      font-weight: 700;
      font-size: 0.9rem;
    }
  }
`;
