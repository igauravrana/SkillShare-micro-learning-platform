// src/components/Signup.jsx
<<<<<<< HEAD
import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

const Signup = ({ onSignupSuccess }) => {
  const handleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Signed up as:', user.displayName);
      onSignupSuccess(user); // notify App.js
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Sign Up to SkillShare</h2>
      <button onClick={handleSignup}>Sign up with Google</button>
=======
import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from '../firebase';
import './Signup.css';

const Signup = ({ onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(true);

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onSignupSuccess(result.user);
    } catch (err) {
      console.error('Google signup failed:', err);
    }
  };

  const handleEmailSignup = () => {
    console.log('Signup with email:', { name, email, optIn });
    alert('Email signup not implemented yet.');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign up with email</h2>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={optIn}
            onChange={() => setOptIn(!optIn)}
          />
          Send me special offers, personalized recommendations, and learning tips.
        </label>
        <button className="email-button" onClick={handleEmailSignup}>
          📧 Continue with email
        </button>

        <div className="divider"><span>Other sign up options</span></div>

        <div className="social-buttons">
          <button className="social-btn google" onClick={handleGoogleSignup}>
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Google
          </button>
          <button className="social-btn facebook" disabled>
            <img src="https://img.icons8.com/fluency/16/facebook.png" alt="Facebook" /> Facebook
          </button>
          <button className="social-btn apple" disabled>
            <img src="https://img.icons8.com/ios-filled/16/mac-os.png" alt="Apple" /> Apple
          </button>
        </div>

        <p className="terms">
          By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>

        <div className="footer-login">
          Already have an account? <a href="#">Log in</a>
        </div>
      </div>
>>>>>>> 8c5ceac (Updated full project with changes)
    </div>
  );
};

export default Signup;
