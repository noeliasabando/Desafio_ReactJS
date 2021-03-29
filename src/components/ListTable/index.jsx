import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, Row } from "antd";

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
        <Row>
          <Button
            type="link"
            onClick={() => deleteUser(record.idEmployee)}
            disabled={!userType}
          >
            Eliminar usuario
          </Button>
          <Link to={{ pathname: `/formulario/${record.idEmployee}`}}>
            <Button type="link" disabled={!userType}>
              Editar usuario
            </Button>
          </Link>
        </Row>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default ListTable;
