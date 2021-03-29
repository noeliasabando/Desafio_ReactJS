import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Button, Menu } from "antd";

const LateralMenu = ({ userType }) => {
  const history = useHistory();
  const logout =  () => {
    localStorage.removeItem('token')
    history.push("/");
  }
  return (
    <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline">
      <Menu.Item key="1">
        <Link to="/inicio">Lista empleados</Link>
      </Menu.Item>
      {userType && (
        <Menu.Item key="2">
          <Link to={{ pathname: "/formulario" }}>Crear usuarios</Link>
        </Menu.Item>
      )}
      <Menu.Item key="4">
        <Button type="link" onClick={() => logout()}>
          Cerrar sesión
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default LateralMenu;
