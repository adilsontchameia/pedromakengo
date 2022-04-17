import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #121212;
  }

  body {
    background: var(--dark);
  }
`;
