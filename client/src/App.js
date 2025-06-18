import React from 'react';
import './styles/App.css'; // ✅ Import the global CSS file

import TutorialForm from './components/TutorialForm';
import TutorialList from './components/TutorialList';
import TutorialDetails from './components/TutorialDetails';

const App = () => {
  return (
    <div className="container">
      <h1>🎓 Welcome to SkillShare</h1>
      <TutorialForm />
      <TutorialList />
      
      <h2>📘 Tutorial Preview</h2>
      <TutorialDetails tutorialId="6851c750b70abdfce25a1cf4" />
    </div>
  );
};

export default App;
