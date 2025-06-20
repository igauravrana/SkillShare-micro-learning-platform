<<<<<<< HEAD
// src/components/Login.jsx
import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';
=======
import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';
import './Login.css';
>>>>>>> 8c5ceac (Updated full project with changes)

const Login = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in as:', user.displayName);
<<<<<<< HEAD
      onLoginSuccess(user); // inform App.js
=======
      onLoginSuccess(user);
>>>>>>> 8c5ceac (Updated full project with changes)
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
<<<<<<< HEAD
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Login to SkillShare</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
=======
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">SkillShare</h1>
        <p className="subtitle">Login to SkillShare</p>
        <button className="login-button" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
>>>>>>> 8c5ceac (Updated full project with changes)
    </div>
  );
};

export default Login;
