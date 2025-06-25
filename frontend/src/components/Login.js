/*import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });

      // Example: Save token or session
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
    } catch (error) {
      console.error(error);
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
};

export default Login;*/

/*const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous error

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData);
      if (response.status === 200) {
        alert("Login successful!");

        // Optionally store auth info (like a token) here if backend returns it

        navigate("/"); // 👈 redirect to homepage (or any page you want)
      }
    } catch (error) {
      setError("Invalid username or password.");
    }
  };*/

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 👉 for navigation
import "./Login.css"



const Login = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login/", formData);
    if (response.status === 200) {
      alert("Login successful!");

      // ✅ Store login status in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", formData.username); // optional

      navigate("/"); // redirect to home or dashboard
    }
  } catch (error) {
    setError("Invalid username or password.");
  }
};

const handleLogout = () => {

  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  navigate("/login"); // redirect to login
};
  return (
    <div className="login-form-container">

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
  //<h2>Login</h2>//


export default Login;

