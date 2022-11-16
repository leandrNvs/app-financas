import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 0 0 1rem;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
`;

export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 0.8rem 0;
`;

export const InputLabel = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid burlywood;
  font-size: 18px;
  color: #333;
  padding-bottom: 2px;
`;

export const RadioControl = styled.div`
  margin: 1.5rem 0 0.4rem;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: brown;
  color: #fff;
  font-weight: 600;
  border: 0;
  font-size: 15px;
  padding: 0.5rem;
  margin-top: 1rem;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + div {
    background-color: burlywood;
  }
`;

export const CustomRadio = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #888;
  border-radius: 2px;
`;

export const ButtonGroup = styled.div`
  text-align: right;
`;
