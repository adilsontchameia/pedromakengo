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
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

 ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--dark);
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;

    &:hover {
    }
  }

  
  * {
    font-family: 'Inter', sans-serif;
  }

  footer {
    height: 100px;
    background:var(--dark);

    display: flex;
  }

  footer .container {
    width: 70%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--gray-light)
  }
`;
