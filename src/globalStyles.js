import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    background-color: #f2f2f2;
  }
`;

export const Container = styled.main`
  height: 200px;
  margin-top: -190px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  width: 92%;
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-top: -160px;
  }

  @media (min-width: 1120px) {
    display: grid;
    grid-template-columns: 1fr 250px;
    gap: 1rem;
  }
`;

export const Content = styled.div`
  @media (max-width: 1120px) {
    order: 2;
  }
`;

export default GlobalStyles;
