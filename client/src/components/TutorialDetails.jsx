import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TutorialDetails.css';

const TutorialDetails = ({ tutorialId }) => {
  const [tutorial, setTutorial] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tutorials/${tutorialId}`);
        setTutorial(res.data);
        setComments(res.data.comments || []);
      } catch (err) {
        console.error('Error fetching tutorial details:', err);
      }
    };

    fetchTutorial();
  }, [tutorialId]);

  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;

    try {
      await axios.post(`http://localhost:5000/api/tutorials/${tutorialId}/comment`, { text: comment });
      setComments([...comments, { text: comment }]);
      setComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  if (!tutorial) return <p>Loading tutorial...</p>;

  return (
    <div className="tutorial-details">
      <h3>{tutorial.title}</h3>
      <p><strong>Author:</strong> {tutorial.author}</p>
      <p><strong>Category:</strong> {tutorial.category}</p>
      <p>{tutorial.description}</p>
      <a href={tutorial.videoURL} target="_blank" rel="noopener noreferrer">📺 Watch Video</a>
      
      <div className="comment-box">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleCommentSubmit}>💬 Comment</button>
      </div>

      <ul className="comments-list">
        {comments.map((c, index) => (
          <li key={index}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialDetails;
