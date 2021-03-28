import React from "react";
import { Table, Button } from "antd";

const ListTable = ({ data, deleteUser, userType }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "idEmployee",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
      },
    },
    {
      title: "Apellido",
      dataIndex: "surname",
      sorter: {
        compare: (a, b) => a.surname.localeCompare(b.surname),
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Rut",
      dataIndex: "rut",
      sorter: {
        compare: (a, b) => a.rut.localeCompare(b.rut),
      },
    },
    {
      title: "Acciones",
      key: "action",
      render: (record) => (
        <Button
          type="link"
          onClick={() => deleteUser(record.idEmployee)}
          disabled={!userType}
        >
          Eliminar usuario
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default ListTable;
