import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 2rem;
  }

  .anime {
    opacity: 0;
    transform: translateX(-10px);
    animation: anime 0.3s forwards;
  }   

  @keyframes anime {
    to {
      transform: initial;
      opacity: 1;
    }
  }

`;
export const Container = styled.div`
  max-width: 300px;
  margin: 60px auto 0 auto;
`;
