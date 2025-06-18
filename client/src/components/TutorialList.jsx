import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TutorialList.css';

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);

  const fetchTutorials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tutorials');
      setTutorials(res.data);
    } catch (err) {
      console.error('Error fetching tutorials:', err);
    }
  };

  useEffect(() => {
    fetchTutorials();
  }, []);

  const handleLike = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/tutorials/${id}/like`);
      fetchTutorials();
    } catch (err) {
      console.error('Error liking tutorial:', err);
    }
  };

  return (
    <div className="tutorial-list">
      {tutorials.map((tutorial) => (
        <div className="tutorial-card" key={tutorial._id}>
          <h3>{tutorial.title}</h3>
          <p><strong>Author:</strong> {tutorial.author}</p>
          <p><strong>Category:</strong> {tutorial.category}</p>
          <p>{tutorial.description}</p>
          <p><strong>Likes:</strong> {tutorial.likes}</p>
          <div className="tutorial-actions">
            <button onClick={() => handleLike(tutorial._id)}>👍 Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutorialList;
