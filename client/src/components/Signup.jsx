// src/components/Signup.jsx
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
    </div>
  );
};

export default Signup;
