import React from "react";
import { Form, Input, Button, Alert, Row, Col } from "antd";
import "./login.css";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

const Login = ({ login, error }) => {
  const onFinish = (values) => {
    login(values.rut, values.password);
  };

  return (
    <div className="login">
      {error && (
        <Row justify="center">
          <Col span={12} offset={4}>
            <Alert
              className="alertError"
              message="Los datos ingresados no son correctos."
              type="error"
              showIcon
            />
          </Col>
        </Row>
      )}
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="RUT"
          name="rut"
          rules={[
            {
              required: true,
              message: "Ingresar rut",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: "Ingresar contraseña",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
