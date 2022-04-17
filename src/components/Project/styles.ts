import styled from "styled-components";

export const Container = styled.section`
  background: var(--dark-200);
`;

export const Content = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 3rem 0;

  h1 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--light);
  }
`;

export const ContentRepository = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex-wrap: wrap;

  img.image-project {
    width: 100%;
    height: 250px !important;
    border-right: 0;
    border-top: 0;
    border-bottom: 0 !important;
  }
`;

export const Repository = styled.div`
  color: var(--light);
  margin-top: 2rem;

  opacity: 0.5;

  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  p {
    color: var(--gray-light);
  }

  span {
    color: var(--primary);
  }
  a {
    margin-top: 2rem;
  }
`;
