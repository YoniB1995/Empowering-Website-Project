import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContextProvider";
// import { loginAdmin } from "../../../../service/admin-service";
import "antd/dist/antd.css";
import "./form-admin.css";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import { Form, Input, Button, Checkbox } from "antd";

const FormsTemporary = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const { isLogin, login } = useContext(AuthContext);
  if (isLogin) {
    return <Redirect to="/" />;
  }

  const saveInfoEmail = (e) => {
    setAdminEmail(e.target.value);
    console.log(adminEmail);
  };

  const saveInfoPassword = (e) => {
    setAdminPassword(e.target.value);
    console.log(adminPassword);
  };

  const userAdmin = {
    email: adminEmail,
    password: adminPassword,
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form-page">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="form-container">
          <h1 className="admin-form-header">
            <UserOutlined
              style={{
                background: "#faad80",
                padding: "5px",
                borderRadius: "100%",
                color: "white",
                marginRight: "5px",
              }}
            />
            חיבור אדמין
          </h1>
          <div className="userName-input-conatiner">
            <Form.Item name="username">
              <Input
                onChange={saveInfoEmail}
                placeholder="איימל"
                style={{ padding: "10px", background: "white" }}
              />
            </Form.Item>
          </div>
          <div className="password-input-conatiner">
            <Form.Item
              placeholder="סיסמה"
              name="password"
              rules={[
                {
                  required: true,
                  message: (
                    <p style={{ fontSize: "12px", paddingTop: "2px" }}>
                      נא להכניס סיסמה
                      <InfoCircleOutlined
                        style={{ marginLeft: "2px", marginTop: "5px" }}
                      />
                    </p>
                  ),
                },
              ]}
            >
              <Input.Password
                onChange={saveInfoPassword}
                style={{ width: "100%", background: "white", padding: "10px" }}
              />
            </Form.Item>
          </div>

          <div className="btn-container">
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                onClick={() => login(userAdmin)}
                className="bnt-admin"
                htmlType="submit"
                size="large"
                style={{
                  background: "#faad80",
                  width: "280px",
                  marginLeft: "-114px",
                }}
              >
                התחבר
              </Button>
            </Form.Item>
          </div>
          <div className="checkbox-container">
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>תזכרו אותי</Checkbox>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FormsTemporary;
