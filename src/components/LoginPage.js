import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/login.css'; // This CSS will control layout and specific login form styles
import companyLogo from '../assets/logo.svg'; // Corrected filename

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  return (
    // Removed inline backgroundColor and color. Rely on body/App.css for theme.
    <div className="login-container">
      <div className="login-left">
        <h2>Sign In to your Account</h2>
        <p>
          New to RAPIDAIGO? <Link to="/signup">Sign Up</Link>
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          <input type="email" id="login-email" name="email" placeholder="Email address" required />

          <div className="password-group">
            <label htmlFor="login-password-input">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="login-password-input"
              placeholder="Password"
              required
            />
            <span className="toggle-password" onClick={togglePassword}>
              <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>

          <div className="forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="btn primary" type="submit">Sign In</button>

          <div className="divider"><span>Or</span></div>

          <button
            className="btn go"
            type="button"
            // Corrected to use process.env.PUBLIC_URL for correct path on GitHub Pages
            onClick={() => window.location.href = process.env.PUBLIC_URL + '/api/login/google'}
          >
            <i className="fab fa-google"></i> Login with Google
          </button>
        </form>
      </div>

      <div className="login-right">
        <img src={companyLogo} alt="Company Logo" />
      </div>
    </div>
  );
}

export default LoginPage;
