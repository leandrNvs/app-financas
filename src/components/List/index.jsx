import * as L from "./styles";
import { BiDownArrowCircle, BiUpArrowCircle, BiTrash } from "react-icons/bi";

function chooseIcon(type) {
  return type === "income" ? (
    <BiUpArrowCircle className="icon" />
  ) : (
    <BiDownArrowCircle className="icon" />
  );
}

export default function List({ data, setData }) {

  const handleDelete = (id) => {
    let newData = data.filter((obj) => obj.id !== id);

    setData(newData);
  };

  return (
    <L.Table>
      <tbody>
        {data.map((obj) => (
          <tr key={obj.id}>
            <td>
              <L.Icon>
                {chooseIcon(obj.type)}
                <L.IconLabel>{obj.description}</L.IconLabel>
              </L.Icon>
            </td>
            <td>R$ {Number(obj.amount).toFixed(2)}</td>
            <td>
              <L.Button onClick={() => handleDelete(obj.id)}>
                <BiTrash />
              </L.Button>
            </td>
          </tr>
        ))}
      </tbody>
    </L.Table>
  );
}
