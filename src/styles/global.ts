import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #121212;
    --dark-200: #151515;
    --light: #FFFFFF;
    --primary: #00D2DF;
    --gray-light: #c4c4c4;
  }

  body {
    background: var(--dark);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;
