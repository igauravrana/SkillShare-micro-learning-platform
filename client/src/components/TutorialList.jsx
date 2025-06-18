import React, { useState, useEffect } from 'react';

const TutorialList = ({ onViewTutorial, refresh }) => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTutorials();
  }, [refresh]);

  const fetchTutorials = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tutorials');
      const data = await response.json();
      setTutorials(data);
    } catch (error) {
      console.error('Error fetching tutorials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading tutorials...</div>;

  return (
    <div className="tutorial-list">
      <h2>Available Tutorials</h2>
      <div className="tutorials-grid">
        {tutorials.map(tutorial => (
          <div key={tutorial._id} className="tutorial-card">
            <h3>{tutorial.title}</h3>
            <p><strong>By:</strong> {tutorial.author}</p>
            <p><strong>Category:</strong> {tutorial.category}</p>
            <p>{tutorial.description}</p>
            <div className="tutorial-meta">
              <span>❤️ {tutorial.likes}</span>
              <span>{new Date(tutorial.createdAt).toLocaleDateString()}</span>
            </div>
            <button onClick={() => onViewTutorial(tutorial)}>
              View Tutorial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialList;