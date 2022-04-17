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
  gap: 50px;
  flex-wrap: wrap;

  img.image-project {
    width: 100%;
    height: 200px !important;
    border-left: 1px solid var(--primary);
  }
`;

export const Repository = styled.div`
  color: var(--light);
  margin-top: 2rem;

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
