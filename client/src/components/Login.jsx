import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL, // Optional: If you want to show profile picture
    };

    console.log('Logged in as:', userData);
    onLoginSuccess(user);
  } catch (err) {
    console.error('Login failed:', err);
  
};

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">SkillShare</h1>
        <p className="subtitle">Login to SkillShare</p>
        <button className="login-button" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;