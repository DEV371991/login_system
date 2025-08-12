// src/components/LoginForm.js
import React, { useState } from "react";
import { login } from "../api/auth";
import axios from "axios";
import "./Login.css";


export async function getProtectedData() {
  const token = localStorage.getItem("access");
  const res = await axios.get("http://127.0.0.1:8000/api/protected/", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}

export async function refreshAccessToken() {
  const refresh = localStorage.getItem("refresh");
  const res = await axios.post("http://127.0.0.1:8000/api/refresh/", { refresh });
  localStorage.setItem("access", res.data.access);
}


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      setMessage(`Welcome ${data.user.username}!`);
    } catch {
      setMessage("Invalid credentials");
    }
  };
  

  return (
    
        <div className="bg_color" >
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Username</label>
                    <input
                        
                        className="input-field"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                    
                        className="input-field"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn" type="submit">Login</button>
                    <p><b>{message}</b></p>
                </form>
            </div>
        </div>
    
    
    
  );
}



