import styled from "styled-components";

export const Card = styled.article`
  width: 25%;
  padding: 0 1rem;

  gap: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    width: 250px;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-radius: 20px;

    img {
      width: 200%;
    }
  }

  h3 {
    font-size: 1.2rem;
    color: ${({ theme: { gray_one } }) => gray_one};
  }

  small {
    width: 100%;

    font-weight: 300;
    color: ${({ theme: { gray_two } }) => gray_two};
  }
`;
