import styled from "styled-components";

export const ButtonStyle = styled.a`
  width: 153px;
  height: 45px;
  border-radius: 4px;

  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--light);
  text-decoration: none;

  &#primary {
    background: linear-gradient(var(--dark), var(--dark)) padding-box,
      linear-gradient(to right, #9358f7, #10d7e2) border-box;
    border: 1px solid transparent;
  }

  &#secondary {
    background: linear-gradient(var(--dark), var(--dark)) padding-box,
      linear-gradient(to right, #d24074, #6518b4) border-box;
    border: 1px solid transparent;
  }

  img {
    margin-right: 0.5rem;
  }
`;
