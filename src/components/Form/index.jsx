import { useState } from "react";
import * as F from "./styles";

function useFormControll() {
  const [inputs, setInputs] = useState({
    description: "",
    amount: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return [inputs, setInputs, handleChange];
}

function useValidatio(obj) {
  let error = 0;
  let field = "";

  for (let x in obj) {
    if (obj[x] === "") {
      error = 1;
      field = x;
      break;
    }
  }

  if (Boolean(error)) {
    switch (field) {
      case "description":
        alert("Preencha a descrição");
        break;
      case "amount":
        alert("Preencha o valor");
        break;
      case "type":
        alert("Escolha um tipo");
        break;
    }

    return false;
  }

  if (!/(^[\d]+\.[\d]+$)|(^[\d]+$)/.test(obj.amount)) {
    alert("Informe um valor numérico válido");
    return false;
  }

  return true;
}

export default function Form({ setData }) {
  const [inputs, setInputs, handleChange] = useFormControll();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = useValidatio(inputs);

    if (isValid) {
      inputs.id = Date.now();
      setData((p) => [...p, inputs]);

      setInputs({
        description: "",
        amount: "",
        type: "",
      });
    }
  };

  const clearAll = () => {
    let isSure = confirm('Tem certaza que deseja apagar todos os registros?')

    if(isSure) {
      localStorage.removeItem('fincancas')
      setData([])
    }
  }

  return (
    <F.Form onSubmit={handleSubmit}>
      <F.InputControl>
        <F.InputLabel htmlFor="description">Descrição</F.InputLabel>
        <F.Input
          type="text"
          name="description"
          id="description"
          value={inputs.description}
          onChange={handleChange}
        />
      </F.InputControl>

      <F.InputControl>
        <F.InputLabel htmlFor="amount">Valor</F.InputLabel>
        <F.Input
          type="text"
          name="amount"
          id="amount"
          value={inputs.amount}
          onChange={handleChange}
        />
      </F.InputControl>

      <F.RadioControl>
        <label>
          <F.RadioInput
            type="radio"
            name="type"
            value="income"
            checked={inputs.type === "income"}
            onChange={handleChange}
          />
          <F.CustomRadio />
          Entrada
        </label>
        <label>
          <F.RadioInput
            type="radio"
            name="type"
            value="outcome"
            checked={inputs.type === "outcome"}
            onChange={handleChange}
          />
          <F.CustomRadio />
          Saída
        </label>
      </F.RadioControl>

      <F.ButtonGroup>
        <F.Button type="submit">Confirmar</F.Button>
        <F.Button type="button" onClick={clearAll}>Apagar Todos</F.Button>
      </F.ButtonGroup>
    </F.Form>
  );
}
