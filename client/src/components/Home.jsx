import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = ({ onCardClick }) => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res1 = await fetch('/api/default-tutorials');
        const res2 = await fetch('/api/tutorials');
        const defaultData = await res1.json();
        const userData = await res2.json();
        setTutorials([...defaultData, ...userData]);
      } catch (err) {
        console.error('Error fetching tutorials:', err);
      }
    };

    fetchTutorials();
  }, []);

  // 🔁 Fallback image selector for seed/default tutorials
  const getImageForTitle = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes('database')) return '/Database.png';
    if (lower.includes('devops')) return '/Devops.png';
    if (lower.includes('backend')) return '/Backend.png';
    return 'https://source.unsplash.com/500x300/?learning';
  };

  return (
    <div className="home-container">
      {tutorials.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No tutorials found.</p>
      ) : (
        tutorials.map((tutorial, index) => (
          <div className="course-card" key={index} onClick={() => onCardClick(tutorial)}>
            <img
              src={tutorial.banner ? tutorial.banner : getImageForTitle(tutorial.title)} // ✅ Use instructor banner if available
              alt={tutorial.title}
              className="course-image"
              onError={(e) => { e.target.src = '/default.png'; }}
            />
            <h3 className="course-title">{tutorial.title}</h3>
            <p className="course-description">{tutorial.description}</p>
            <div className="course-info">
              <span>⭐ {(Math.random() * 2 + 3).toFixed(1)}</span>
              <span>{Math.floor(Math.random() * 500) + 100} ratings</span>
              <span>{(Math.random() * 100).toFixed(1)} total hours</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
