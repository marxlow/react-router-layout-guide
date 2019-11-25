import React from "react";
import { Card, Form, Input, Button } from "antd";
import routes from "../routes";

const LoginPage = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = () => {
    // Set token into localstorage
    localStorage.setItem("token", "I am now logged in");
    props.history.push(routes.dashboard);
  };
  return (
    <>
      <Card
        bordered={false}
        style={{
          border: "1px solid #dcdcdc",
          boxShadow: "0px 15px 20px 5px #0000001a",
          width: 400
        }}
      >
        <h1 style={{ textAlign: "center" }}>React Routing Guide</h1>
        <Form
          hideRequiredMark
          colon={false}
          onSubmit={handleSubmit}
          layout="vertical"
        >
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Email required" }]
            })(<Input size="large" placeholder="John@example.com" />)}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Password required" }]
            })(
              <Input.Password
                size="large"
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Button block size="large" htmlType="submit">
            Login
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Form.create({ name: "Login" })(LoginPage);
