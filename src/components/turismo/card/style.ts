import styled from "styled-components";

interface Props {
  color: string;
}

export const Card = styled.article<Props>`
  width: 25%;
  padding: 0 1rem;

  gap: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    width: 250px;
    height: 170px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-radius: 20px;

    img {
      width: 150%;
    }
  }

  button {
    font-size: 1.2rem;
    color: #fff;
    background-color: ${(p) => p.color};
  }
`;
