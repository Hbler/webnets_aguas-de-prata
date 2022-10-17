import styled from "styled-components";

export const SSectionVideos = styled.section`
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
  }
`;
