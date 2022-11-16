import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Resume from "./components/Resume";
import GlobalStyles, { Container, Content } from "./globalStyles";

function settingStorage() {
  useEffect(() => {
    let storage = localStorage.getItem("financas");

    if (!storage) {
      localStorage.setItem("financas", "[]");
    }
  }, []);
}

export default function App() {
  settingStorage();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("financas")) || []
  );

  useEffect(() => {
    let storage = JSON.stringify(data);

    localStorage.setItem("financas", storage);
  }, [data]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Content>
          <Form setData={setData} />
          <List data={data} setData={setData} />
        </Content>
        <Resume data={data}  />
      </Container>
    </>
  );
}
