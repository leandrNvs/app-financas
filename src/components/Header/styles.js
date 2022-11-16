import styled from "styled-components";

export const Header = styled.header`
  background-color: burlywood;
  height: 270px;
  text-align: center;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 1.7rem;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;
