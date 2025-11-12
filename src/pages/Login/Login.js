import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./App.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const defaultUsername = "user"; 
    const defaultPassword = "123abc";  

    if (username === defaultUsername && password === defaultPassword) {
      onLogin();
    } else {
      alert("Invalid username or password!");
    }
  };
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Login</h2>
        <form onSubmit={handleLogin} className="form">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button type="submit" onClick={() => navigate('/') }className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}



export default Login;
