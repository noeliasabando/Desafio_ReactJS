import React from "react";
import { useJwt } from "react-jwt";
import { Layout, Row, Col } from "antd";
import LateralMenu from "../../components/LateralMenu";
import "./layout.css";

const ContainerLayout = ({ children }) => {
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt(token);

  return (
    <Layout className="Layout">
      <Layout.Content>
        <Row className="containerUser">
          <Col className="user">
            {decodedToken && decodedToken.employee.name}{" "}
            {decodedToken && decodedToken.employee.surname}
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Row>
              <LateralMenu
                userType={decodedToken && decodedToken.employee.isAdm}
              />
            </Row>
          </Col>
          <Col span={20}>{children}</Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default ContainerLayout;
