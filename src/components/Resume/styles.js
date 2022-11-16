import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, fit-content);
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1120px) {
    margin-bottom: 0;
    align-self: start;
    grid-template-columns: unset;
  }
`;

export const Item = styled.div`
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 0.2rem 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  color: ${({ value }) => (value < 0 ? "red" : "")};
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
`;

export const ItemTitle = styled.span`
  font-size: 14px;
`;

export const ItemIcon = styled.span`
  font-size: 30px;
  display: flex;
`;

export const ItemBody = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem 0;
  display: block;
`;
