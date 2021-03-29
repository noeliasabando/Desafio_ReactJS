import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import FormUser from "../../components/FormUser";

const ContainerFormUser = ({ view }) => {
  const axios = require("axios");
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [departments, setDepartments] = useState();
  const { id } = useParams();

  const userById = () => {
    axios
      .get(`http://localhost:5000/api/employees/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {});
  };

  const fetchDepartments = () => {
    axios
      .get("http://localhost:5000/api/departments", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setDepartments(response.data);
      })
      .catch(() => {});
  };

  const editUser = () => {
    axios
      .put(`http://localhost:5000/api/employees/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {})
      .catch(() => {
        message.error("Error al editar usuario");
      });
  };

  const createUser = () => {
    axios
      .post("http://localhost:5000/api/employees", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {})
      .catch(() => {
        message.error("Error al crear usuario");
      });
  };

  useEffect(() => {
    if (view === "Edit") {
      userById();
    } else {
      setUser(null);
    }
    fetchDepartments();
  }, [view]);
  return (
    <FormUser
      departments={departments}
      user={user}
      edit={editUser}
      create={createUser}
      view={view}
    />
  );
};

export default ContainerFormUser;
