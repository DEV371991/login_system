import React from "react";
import "./Login.css";
import InputField from "./InputField";
import Button from "./Button";


function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <InputField label="Email" type="email" placeholder="Enter your email" />
        <InputField label="Password" type="password" placeholder="Enter your password" />
        <Button text="Sign In" />
      </form>
    </div>
  );
}

export default Login