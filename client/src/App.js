import React, { useState } from 'react';
import Home from './components/Home';
import TutorialDetails from './components/TutorialDetails';
<<<<<<< HEAD
import Login from './components/Login';      // 🔧 We'll create this
import Signup from './components/Signup';    // 🔧 We'll create this
import InstructorPanel from './components/InstructorPanel'; // 🔧 We'll create this
=======
import Login from './components/Login';
import Signup from './components/Signup';
import InstructorPanel from './components/InstructorPanel';
import Footer from './components/Footer';
>>>>>>> 8c5ceac (Updated full project with changes)
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [refresh, setRefresh] = useState(0);
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track auth status
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false);
>>>>>>> 8c5ceac (Updated full project with changes)

  const handleViewTutorial = (tutorial) => {
    if (!isLoggedIn) {
      setView('login');
      return;
    }
    setSelectedTutorial(tutorial);
    setView('details');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('home');
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <header>
        <h1 style={{ cursor: 'pointer' }} onClick={() => setView('home')}>
          SkillShare
        </h1>
        <nav>
=======
      <header className="app-header">
        <h1 className="logo" onClick={() => setView('home')}>SkillShare</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Search tutorials..."
        />
        <nav className="nav-buttons">
>>>>>>> 8c5ceac (Updated full project with changes)
          {!isLoggedIn ? (
            <>
              <button onClick={() => setView('login')}>Login</button>
              <button onClick={() => setView('signup')}>Sign Up</button>
            </>
          ) : (
            <>
              <button onClick={() => setView('instructor')}>Instructor</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </header>

<<<<<<< HEAD
      <main>
        {view === 'home' && (
          <Home onCardClick={handleViewTutorial} />
        )}
=======
      <main className="main-content">
        {view === 'home' && <Home onCardClick={handleViewTutorial} />}
>>>>>>> 8c5ceac (Updated full project with changes)
        {view === 'details' && selectedTutorial && (
          <TutorialDetails
            tutorial={selectedTutorial}
            onBack={() => setView('home')}
          />
        )}
        {view === 'login' && (
          <Login onLoginSuccess={() => {
            setIsLoggedIn(true);
            setView('home');
          }} />
        )}
        {view === 'signup' && (
          <Signup onSignupSuccess={() => {
            setIsLoggedIn(true);
            setView('home');
          }} />
        )}
        {view === 'instructor' && (
          <InstructorPanel onSuccess={() => setRefresh(prev => prev + 1)} />
        )}
      </main>
<<<<<<< HEAD
=======

      <Footer />
>>>>>>> 8c5ceac (Updated full project with changes)
    </div>
  );
}

export default App;
