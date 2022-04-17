import styled from "styled-components";

export const Container = styled.section`
  background: var(--dark);
  padding: 3rem 0;
  color: var(--light);
`;

export const Content = styled.div`
  max-width: 70%;
  margin: 0 auto;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  }
`;

export const ContentTab = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;

  nav {
    width: 24%;
    margin-right: 2rem;

    button {
      width: 100%;
      height: 55px;
      display: flex;
      text-align: left;

      align-items: center;
      border: 0;
      border-left: 1px solid var(--dark-200);
      padding-left: 1rem;

      color: var(--gray-light);
      font-size: 0.999rem;
      background: transparent;

      transition: background 0.5s;

      &:hover {
        border-left: 1px solid var(--primary);
        background: var(--dark-200) !important;
        cursor: pointer;
      }

      &.active {
        color: var(--light);
        background: var(--dark-200);
        border-left: 2px solid var(--primary);
      }
    }
  }

  .tab {
    width: 74%;

    .tab-content {
      .tab-row {
        display: flex;
        justify-content: space-between;

        strong {
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
      p {
        margin-top: 2rem;
      }
    }
  }
`;
