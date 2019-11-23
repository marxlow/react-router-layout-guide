import React from "react";
import { Card, Form, Input, Button } from "antd";

const LoginPage = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = () => {
    console.log("> Submitted Form");
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
        <h1 style={{ textAlign: "center" }}>Routes Guide</h1>
        <Form
          hideRequiredMark
          colon={false}
          onSubmit={handleSubmit}
          layout="vertical"
        >
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Email required" }]
            })(<Input size="large" placeholder="JohnDoe@example.com" />)}
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
