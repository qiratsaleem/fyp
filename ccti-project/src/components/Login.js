// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="logo">
        <img src="/path/to/logo.png" alt="CCTI System" />
        <h2>CCTI SYSTEM</h2>
      </div>
      <h2>Log in to your account</h2>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Enter username" />
        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
        />
        <div className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label>Show Password</label>
        </div>
        <button type="button" onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
