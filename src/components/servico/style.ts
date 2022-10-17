import styled from "styled-components";

export const SSectionServicos = styled.section`
  margin: 3rem 0 0;

  .container {
    gap: 2rem;
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      color: ${({ theme: { gray_three } }) => gray_three};
    }

    .lista {
      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      button {
        width: 20%;
        padding: 0.7rem 0;

        gap: 0.5rem;
        display: flex;
        justify-content: center;

        color: #fff;
        font-weight: 700;
        font-size: 1.1rem;

        border-radius: 7px;
        background-color: ${({ theme: { dark_green } }) => dark_green};

        svg {
          transform: translateY(10%);
        }
      }
    }
  }
`;
