import React, { useState } from 'react';
import Home from './components/Home';
import TutorialDetails from './components/TutorialDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import InstructorPanel from './components/InstructorPanel';
import Footer from './components/Footer';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
    setUser(null);
    setView('home');
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="logo" onClick={() => setView('home')}>SkillShare</h1>
        <input className="search-bar" type="text" placeholder="Search tutorials..." />
        <nav className="nav-buttons">
          {!isLoggedIn ? (
            <>
              <button onClick={() => setView('login')}>Login</button>
              <button onClick={() => setView('signup')}>Sign Up</button>
            </>
          ) : (
            <>
              <button onClick={() => setView('instructor')}>Instructor</button>
              <button onClick={() => setView('profile')}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </header>

      <main className="main-content">
        {view === 'home' && <Home onCardClick={handleViewTutorial} />}

        {view === 'details' && selectedTutorial && (
          <TutorialDetails
            tutorial={selectedTutorial}
            onBack={() => setView('home')}
            user={user} // ✅ pass user to allow like/comment
          />
        )}

        {view === 'login' && (
          <Login
            onLoginSuccess={(loggedInUser) => {
              setUser({
                name: loggedInUser.displayName,
                email: loggedInUser.email,
                photo: loggedInUser.photoURL,
                uid: loggedInUser.uid, // ✅ include uid for backend like tracking
              });
              setIsLoggedIn(true);
              setView('home');
            }}
          />
        )}

        {view === 'signup' && (
          <Signup
            onSignupSuccess={(registeredUser) => {
              setUser({
                name: registeredUser.displayName,
                email: registeredUser.email,
                photo: registeredUser.photoURL,
                uid: registeredUser.uid, // ✅ include uid for future usage
              });
              setIsLoggedIn(true);
              setView('home');
            }}
          />
        )}

        {view === 'instructor' && (
          <InstructorPanel
            user={user} // ✅ Pass logged-in instructor details
            onSuccess={() => setRefresh((prev) => prev + 1)}
          />
        )}

        {view === 'profile' && <Profile user={user} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
