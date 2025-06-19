// src/components/Login.jsx
import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

const Login = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in as:', user.displayName);
      onLoginSuccess(user); // inform App.js
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Login to SkillShare</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
