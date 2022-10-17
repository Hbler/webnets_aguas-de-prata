import styled from "styled-components";

export const SSectionNoticias = styled.section`
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
    }

    button {
      width: 35%;
      padding: 0.5rem;
      margin: 0 auto;

      color: #fff;
      font-weight: 700;
      font-size: 1.1rem;

      border-radius: 7px;
      background-color: ${({ theme: { blue } }) => blue};
    }
  }
`;
