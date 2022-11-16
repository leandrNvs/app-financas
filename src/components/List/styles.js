import styled from "styled-components";

export const Table = styled.table`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  max-height: 500px;
  overflow-Y: auto;

  td {
    padding: 0.4rem 0;
  }
`;

export const Icon = styled.span`
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 20px;

  .icon {
    display: none;

    @media (min-width: 450px) {
      display: block;
    }
  }
`;

export const IconLabel = styled.span`
  font-size: 16px;
`;

export const Button = styled.button`
  color: brown;
  background-color: transparent;
  border: 0;
  font-size: 20px;
  display: flex;
  cursor: pointer;
`;
