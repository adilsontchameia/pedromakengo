import styled from "styled-components";

export const Container = styled.section`
  background: var(--dark-200);
  margin-top: 4rem;
`;

export const Content = styled.div`
  max-width: 70%;
  margin: 0 auto;
  color: var(--light);
  display: flex;
  align-items: center;
  padding: 4rem 0;
`;

export const ImgContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 80%;
    margin-left: -3rem;
  }
`;

export const ContentDescrition = styled.div`
  width: 50%;
  h2 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    color: var(--gray-light);
    line-height: 30px;
  }

  .social {
    display: flex;
    margin-top: 2rem;

    a {
      margin-right: 2rem;
      display: flex;
      align-items: center;
    }
  }

  .buttons {
    display: flex;
    margin-top: 2rem;

    a {
    }
  }
`;
