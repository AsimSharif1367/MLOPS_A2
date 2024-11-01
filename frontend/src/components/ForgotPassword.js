import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.forgotPassword(email);
      setMessage("Password reset email sent. Please check your inbox.");
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      setError(error.message || "Failed to process password reset");
    }
  };

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={() => navigate("/login")} className="back-button">
        Back to Login
      </button>
    </div>
  );
}

export default ForgotPassword;
