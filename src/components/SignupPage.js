import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/signup.css'; // This CSS will control layout and specific signup form styles
import companyLogo from '../assets/logo.svg'; // Corrected filename

function SignupPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    subscription: 'Free'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', form);
  };

  return (
    // Removed inline backgroundColor and color. Rely on body/App.css for theme.
    <main className="auth-container">
      <section className="form-box">
        <h2>Sign Up</h2>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>

        <form id="signupForm" onSubmit={handleSubmit}>
          <label htmlFor="signup-email">Email address</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            placeholder="Email address"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />

          <label htmlFor="subscription">Choose a subscription:</label>
          <select
            name="subscription"
            id="subscription"
            value={form.subscription}
            onChange={handleChange}
          >
            <option value="Free">Free - $ 0</option>
            <option value="Silver">Silver - $ 199</option>
            <option value="Gold">Gold - $ 399</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>

        <p className="terms">
          By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <div className="divider"><span>Or</span></div>

        <button
          className="btn go"
          type="button"
          // Corrected to use process.env.PUBLIC_URL for correct path on GitHub Pages
          onClick={() => window.location.href = process.env.PUBLIC_URL + '/api/login/google'}
        >
          <i className="fab fa-google"></i> Continue with Google
        </button>
      </section>

      <section className="logo-box">
        <img src={companyLogo} alt="Company Logo" />
      </section>
    </main>
  );
}

export default SignupPage;