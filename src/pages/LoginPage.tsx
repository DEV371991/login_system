// LoginPage.tsx
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return <LoginForm onLoginSuccess={() => navigate("/dashboard")} />;
};

export default LoginPage;