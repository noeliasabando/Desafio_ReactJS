import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Select, Alert } from "antd";
import "./formUser.css";
import { getCheckDigit } from "rut.js";

const FormUser = ({ departments, user, edit, create, view }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState(false);

  const onFinish = (values) => {
    if (values.dv === getCheckDigit(values.rut.toString())) {
      if (view === "Create") {
        create(values);
      } else {
        edit(values);
      }
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        surname: user.surname,
        rut: user.rut,
        dv: user.dv,
        email: user.email,
        isAdm: user.isAdm,
        department: user.department.idDept,
      });
    } else {
      form.resetFields();
    }
  }, [user]);
  return (
    <div className="formUser">
      <Form name="basic" onFinish={onFinish} form={form}>
        <Row justify="center">
          <Col span={20}>
            <Row justify="center">
              <Col span={14}>
                <p>Nombre usuario</p>
                <Form.Item name="name">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={14}>
                <p>Apellido usuario</p>
                <Form.Item name="surname">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={9}>
                <p>RUT usuario</p>
                <Form.Item name="rut">
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={4} offset={1}>
                <p>DV</p>
                <Form.Item name="dv">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            {error && (
              <Row justify="center">
                <Col span={14}>
                  <Alert
                    className="alertError"
                    message="RUT inválido"
                    type="error"
                    showIcon
                  />
                </Col>
              </Row>
            )}
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
                  <Input type="password" disabled={user} />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Form.Item shouldUpdate>
                {() => (
                  <Form.Item name="isAdm">
                    <Checkbox
                      checked={form.getFieldValue("isAdm")}
                      onChange={(e) => {
                        form.setFieldsValue({ isAdm: e.target.checked });
                      }}
                    >
                      Usuario administrador
                    </Checkbox>
                  </Form.Item>
                )}
              </Form.Item>
            </Row>
            <Row justify="center">
              <Col span={14}>
                <p>Seleccionar departamento</p>
                <Form.Item name="department">
                  <Select
                    allowClear
                    onChange={(value) =>
                      form.setFieldsValue({
                        department: value,
                      })
                    }
                  >
                    {departments &&
                      departments.map((department) => (
                        <Select.Option
                          key={department.idDept}
                          value={department.idDept}
                        >
                          {department.description}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={!user && !form.isFieldsTouched()}
                >
                  Guardar cambios
                </Button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormUser;
