import styled from "styled-components";

import bannerImg from "../../assets/banner.svg";

export const Container = styled.section`
  height: 85vh;
  background: url(${bannerImg});
  background-repeat: no-repeat;
  background-position-x: right;

  color: #fff;
`;

export const Content = styled.div`
  max-width: 60rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  span {
    line-height: 0;
    font-size: 24px;
  }

  h1 {
    color: var(--primary);
    font-size: 48px;
    line-height: 0;
  }

  p {
    font-size: 24px;
  }
`;

export const ContentButtons = styled.div`
  margin-top: 3rem;

  display: flex;

  a {
    width: 153px;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #fff;

    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    text-decoration: none;

    img {
      margin-right: 0.5rem;
    }
  }
`;
