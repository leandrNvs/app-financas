import * as R from "./styles";
import {
  BiDollarCircle,
  BiDownArrowCircle,
  BiUpArrowCircle,
} from "react-icons/bi";

function ResumeItem({ title, icon, value }) {
  return (
    <R.Item value={value}>
      <R.ItemHeader>
        <R.ItemTitle>{title}</R.ItemTitle>
        <R.ItemIcon>{icon}</R.ItemIcon>
      </R.ItemHeader>
      <R.ItemBody>R$ {Number(value).toFixed(2)}</R.ItemBody>
    </R.Item>
  );
}

export default function Resume({ data }) {
  const income = data.reduce((sum, obj) => {
    if (obj.type === "income") sum += Number(obj.amount);
    return sum;
  }, 0);

  const outcome = data.reduce((sum, obj) => {
    if (obj.type === "outcome") sum += Number(obj.amount);
    return sum;
  }, 0);

  const total = income - outcome;

  return (
    <R.Container>
      <ResumeItem title="Entrada" icon={<BiUpArrowCircle />} value={income} />
      <ResumeItem title="Saída" icon={<BiDownArrowCircle />} value={outcome} />
      <ResumeItem title="Total" icon={<BiDollarCircle />} value={total} />
    </R.Container>
  );
}
