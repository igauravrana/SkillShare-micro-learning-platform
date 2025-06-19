import React, { useState } from 'react';
import Home from './components/Home';
import TutorialDetails from './components/TutorialDetails';
import Login from './components/Login';      // 🔧 We'll create this
import Signup from './components/Signup';    // 🔧 We'll create this
import InstructorPanel from './components/InstructorPanel'; // 🔧 We'll create this
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track auth status

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
      <header>
        <h1 style={{ cursor: 'pointer' }} onClick={() => setView('home')}>
          SkillShare
        </h1>
        <nav>
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

      <main>
        {view === 'home' && (
          <Home onCardClick={handleViewTutorial} />
        )}
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
    </div>
  );
}

export default App;
