import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const LateralMenu = ({ userType }) => {
  return (
    <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline">
      <Menu.Item key="1">
        <Link to="/inicio">Lista empleados</Link>
      </Menu.Item>
      {userType && (
        <Menu.Item key="2">
          <Link to="/formulario">Crear usuarios</Link>
        </Menu.Item>
      )}
      {userType && (
        <Menu.Item key="3">
          <Link to="/formulario">Editar usuarios</Link>
        </Menu.Item>
      )}
      <Menu.Item key="4">Cerrar sesión</Menu.Item>
    </Menu>
  );
};

export default LateralMenu;
