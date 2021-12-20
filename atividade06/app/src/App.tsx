import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Table, { TableColunmType, TableDataType } from "./components/Table";
import Text from "./components/Text";
import { StudentService } from "./services/student.service";

const colunms: TableColunmType[] = [
  {
    header: "MATRÍCULA",
    identification: "registration",
  },
  {
    header: "NOME",
    identification: "name",
  },
  {
    header: "CURSO",
    identification: "course",
  },
  {
    header: "IRA",
    identification: "ira",
  },
  {
    header: "",
    identification: "actions",
  },
];

function App() {
  const [data, setData] = useState<TableDataType[]>([]);

  const [registerModalHidden, setRegisterModalHidden] = useState(true);

  useEffect(() => {
    (async () => {
      const students = await StudentService.findAll();
      console.log(process.env.REACT_APP_ENDPOINT_API);
      console.log(students);
      setData(
        students.map((s) => {
          return { value: { ...s, actions: <p>...</p> } };
        })
      );
    })();

    return () => {
      setData([]);
      setRegisterModalHidden(true);
    };
  }, []);

  async function handleRegisterStudent(e: any) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      registration: e.target.registration.value,
      course: e.target.course.value,
      ira: e.target.ira.value,
    };

    if (
      data.name.length === 0 ||
      data.registration.length < 0 ||
      data.course.length < 0 ||
      !data.ira
    )
      return alert("Preencha todos os campos para realizar o cadastro!");

    const result = await StudentService.store(data);
    console.log(result);
  }

  return (
    <>
      <Modal
        hidden={registerModalHidden}
        title="Cadastre um estudante"
        subtitle="Cadastre um estudante no sistema de controle de alunos"
        onCloseClick={() => {
          setRegisterModalHidden(true);
          document.querySelector("form")?.reset();
        }}
      >
        <form onSubmit={handleRegisterStudent}>
          <input name="name" placeholder="Digite o nome do estudante" />
          <input name="registration" placeholder="Número da matrícula" />
          <input name="course" placeholder="Curso do estudante" />
          <input
            step="any"
            type="number"
            name="ira"
            placeholder="Pontuação IRA do estudante"
          />

          <button type="submit">Cadastrar estudante</button>
        </form>
      </Modal>
      <Container>
        <Text center title size="large">
          SISTEMA DE CONTROLE DE ALUNOS
        </Text>
        <hr />

        <button onClick={() => setRegisterModalHidden(false)}>
          Cadastrar estudante
        </button>
        <Table data={data} colunms={colunms} />
      </Container>
    </>
  );
}

export default App;
