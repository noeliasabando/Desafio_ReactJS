import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import Login from "../../components/Login";

const LoginContainer = () => {
  const history = useHistory();
  const axios = require("axios");
  const [error, setError] = useState(false);

  const login = (rut, password) => {
    axios
      .post("http://localhost:5000/api/token", {
        rut,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.accessToken);
          history.push("/inicio");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div>
      <Row>
        <Col span={10} offset={7}>
          <Login login={login} error={error} />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(LoginContainer);
