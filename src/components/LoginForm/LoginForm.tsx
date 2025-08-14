import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { login } from "../../api/auth";
import "./Login.css";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {

  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await login(formData.username, formData.password);
      console.log("Login response:", res);
      onLoginSuccess();

    } catch (err) {
      setError("Invalid username or password");

    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form name="login" onFinish={handleSubmit} layout="vertical">
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input placeholder="Enter username" onChange={handleChange} />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter password" onChange={handleChange} />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading} block>
          Login
        </Button>
      </Form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default LoginForm;
