import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "./formUser.css";

const FormUser = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="formUser">
      <Form name="basic" onFinish={onFinish} form={form}>
        <Row justify="center">
          <Col span={20}>
            <Row justify="center">
              <Col span={14}>
                <p>Nombre usuario</p>
                <Form.Item name="username">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={14}>
                <p>Email</p>
                <Form.Item name="email">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={14}>
                <p>Password</p>
                <Form.Item name="password">
                  <Input type="password" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Form.Item shouldUpdate>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!form.isFieldsTouched(true)}
              >
                Guardar cambios
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormUser;
