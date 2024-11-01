import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(email, password);
      localStorage.setItem("token", response.token);
      // You can add a secure route here after successful login
      navigate("/dashboard");
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <div className="auth-links">
        <Link to="/signup" className="auth-link">
          Need an account? Sign up
        </Link>
        <Link to="/forgot-password" className="auth-link">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
