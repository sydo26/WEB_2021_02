import React, { useEffect, useState } from "react";
import Container from "./components/Container";
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

  useEffect(() => {
    (async () => {
      const students = await StudentService.findAll();
      setData(
        students.map((s) => {
          return { value: { ...s, actions: <p>Teste</p> } };
        })
      );
    })();

    return () => {
      setData([]);
    };
  });

  return (
    <Container>
      <Text center title size="large">
        SISTEMA DE CONTROLE DE ALUNOS
      </Text>
      <hr />

      <Table data={data} colunms={colunms} />
    </Container>
  );
}

export default App;
