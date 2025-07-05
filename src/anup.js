import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';
import SubjectList from './SubjectList';
import ContentPage from './ContentPage';
import ContentDetails from './ContentDetails';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import TipsBanner from './TipsBanner'; // Import the TipsBanner component
import { auth } from './firebase-config';
import Recommend from './Recommend';

function App() {
  const [semester, setSemester] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const subjects = {
    1: ['Basics of Electrical & Electronic Engineering', 'Physics', 'Computer Programming'],
    2: ['Biology', 'English', 'Computer Science'],
    3: ['Data Structures', 'Database Management System', 'Advance Java Technology','Web Technology','Probability & Statistics'],
    4: ['Database Systems', 'Software Engineering', 'Networks'],
    5: ['Fundamentals of Microprocessors', '.NET Technologies', 'Design and Analysis of Algorithm','Cloud Computing','Cyber Security'],
    6: ['Web Development', 'Mobile Apps', 'AI'],
    7: ['Machine Learning', 'Cloud Computing', 'Cyber Security'],
    8: ['Project', 'Ethics', 'Professional Practices'],
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="ease">Learnomic</nav>
          <nav className="navbar">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {user && (
              <>
                <span className="user-name">Hello, {user.displayName}</span>
                <button onClick={handleSignOut} className="logout-button">Log Out</button>
              </>
            )}
            {!user && <a href="/login" className="loginb">Login</a>}
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <>
                    <h1>Select Your Semester</h1>
                    <div className="semester-dropdown">
                      <select value={semester} onChange={handleSemesterChange}>
                        <option value="">Select Semester</option>
                        {Array.from({ length: 8 }, (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            Semester {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    {semester && (
                      <div className="subjects-container">
                        <SubjectList
                          subjects={subjects[semester]}
                          semester={semester}
                        />
                      </div>
                    )}
                    {/* Include the sliding TipsBanner here */}
                    <TipsBanner />
                    <Recommend/>
                    
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/content/:semester/:subject" element={<ContentPage />} />
            <Route path="/content/:semester/:subject/:contentType" element={<ContentDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p className="footer-text">Website made by Anup Singh</p>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/connectanupsingh/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/anup.singhhhh?igsh=MXQ0cWFobHVxZGc5bQ==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
