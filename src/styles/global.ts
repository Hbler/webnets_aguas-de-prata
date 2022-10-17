import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

const breakpoints = [576, 768, 992, 1200, 2000];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
*{
    margin: 0;
    padding: 0;
    transition: 0.2s;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
}
h1,h2,h3{
    font-family: 'Open Sans', sans-serif;
}
body{
    background-color: ${({ theme: { white } }) => white};
}
button{
    border: none;
    
    :hover{
        cursor: pointer;
    }
}
a{
    text-decoration: none;
    color: ${({ theme: { white } }) => white};
    :hover{
        color: ${({ theme: { yellow } }) => yellow};
    }
}
ul, ol{
    list-style: none;
}
img {
    width: 100%;
}
.container{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0.8rem;
}
`;
