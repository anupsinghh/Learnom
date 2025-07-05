import React from 'react';
import './LoginPage.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase-config';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in:", result.user);
        // Redirect to the semester selection page after successful login
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome! 🎓</h1>
        <p>Your one-stop solution for all your academic resources. 📚✨</p>
        <p>Sign in to access past papers, notes, and more. 🚀</p>
        <button onClick={handleLogin} className="login-button">
          Login with Google 🚀
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
