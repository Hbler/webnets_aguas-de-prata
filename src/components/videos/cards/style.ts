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
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-radius: 2px;

    img {
      width: 150%;
    }

    box-shadow: 0 2px 2px 2px #4445;
  }

  h4 {
    font-size: 0.8rem;
    text-align: center;
    color: ${({ theme: { gray_one } }) => gray_one};
  }
`;
