import React, { useState } from 'react';
import TutorialForm from './components/TutorialForm';
import TutorialList from './components/TutorialList';
import TutorialDetails from './components/TutorialDetails';
import './App.css';

function App() {
  const [view, setView] = useState('list');
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const handleViewTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
    setView('details');
  };

  const handleRefresh = () => setRefresh(prev => prev + 1);

  return (
    <div className="App">
      <header>
        <h1>SkillShare</h1>
        <nav>
          <button onClick={() => setView('list')}>All Tutorials</button>
          <button onClick={() => setView('form')}>Add Tutorial</button>
        </nav>
      </header>

      <main>
        {view === 'list' && (
          <TutorialList 
            onViewTutorial={handleViewTutorial} 
            refresh={refresh}
          />
        )}
        {view === 'form' && (
          <TutorialForm 
            onSuccess={() => {
              setView('list');
              handleRefresh();
            }}
          />
        )}
        {view === 'details' && selectedTutorial && (
          <TutorialDetails 
            tutorial={selectedTutorial}
            onBack={() => setView('list')}
          />
        )}
      </main>
    </div>
  );
}

export default App;