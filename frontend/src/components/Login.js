import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation after login
import "../styles/Login.css"; // Import CSS file

function Login() {
  const [email, setEmail] = useState(""); // State for storing email
  const [password, setPassword] = useState(""); // State for storing password
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Login handler function (you can expand this to make an API call)
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Basic validation: Check if email and password are entered
    if (email && password) {
      // Redirect to the 'form' page upon successful login
      navigate("/form");
    } else {
      alert("Please enter both email and password"); // Alert if fields are empty
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-login">Login</button>
          </div>
        </form>
        <div className="auth-options">
          <a href="/register" className="auth-link">Create an account</a>
          <a href="/forgot-password" className="auth-link">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;

