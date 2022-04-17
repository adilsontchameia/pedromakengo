import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  max-width: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 15vh;

  h2 {
    color: var(--primary);
  }

  nav {
    a {
      margin-left: 2rem;
      color: var(--light);
      text-decoration: none;

      font-weight: 300;
    }
  }
`;
