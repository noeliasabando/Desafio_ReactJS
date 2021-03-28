import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import { useJwt } from "react-jwt";
import ListTable from "../../components/ListTable";
import "./containerListTable.css";

const ContainerListTable = () => {
  const axios = require("axios");
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt(token);
  const [data, setData] = useState();
  const [dataTable, setDatatable] = useState();

  const { Search } = Input;

  const fetchList = () => {
    axios
      .get("http://localhost:5000/api/employees", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        setDatatable(response.data);
      })
      .catch(() => {});
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/api/employees/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        fetchList();
      })
      .catch(() => {});
  };

  const onSearch = (value) => {
    value = value.toLowerCase();
    setDatatable(
      data.filter(
        (employee) =>
          employee.idEmployee === value ||
          employee.name.toLowerCase().includes(value) ||
          employee.surname.toLowerCase().includes(value) ||
          employee.name.toLowerCase().includes(value) ||
          employee.rut === value
      )
    );
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Row justify="center" className="containerListTable">
      <Col span={20}>
        <Row>
          <Col span={6}>
            <Search
              className="inputListTable"
              placeholder="Buscar empleado"
              onSearch={onSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ListTable
              data={dataTable}
              deleteUser={deleteUser}
              userType={decodedToken && decodedToken.employee.isAdm}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContainerListTable;
