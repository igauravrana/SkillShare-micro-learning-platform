import React, { useState, useEffect } from 'react';
import CommentBox from './CommentBox';

const TutorialDetails = ({ tutorial, onBack }) => {
  const [tutorialData, setTutorialData] = useState(tutorial || null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    if (!tutorial?._id) return; // Prevent crash on undefined
=======
    if (!tutorial?._id) return;
>>>>>>> 8c5ceac (Updated full project with changes)
    fetchTutorialDetails();
  }, [tutorial?._id]);

  const fetchTutorialDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/tutorials/${tutorial._id}`);
      const data = await response.json();
<<<<<<< HEAD
      setTutorialData(data.tutorial || tutorial); // fallback to original
=======
      setTutorialData(data.tutorial || tutorial);
>>>>>>> 8c5ceac (Updated full project with changes)
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching tutorial details:', error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/tutorials/${tutorial._id}/like`, {
        method: 'PUT'
      });
      const updatedTutorial = await response.json();
      setTutorialData(updatedTutorial);
    } catch (error) {
      console.error('Error liking tutorial:', error);
    }
  };

  const getVideoId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  if (!tutorialData) {
    return (
      <div className="tutorial-details">
        <p style={{ color: 'red' }}>Tutorial not found or loading...</p>
        <button onClick={onBack}>← Back</button>
      </div>
    );
  }

<<<<<<< HEAD
  const videoId = getVideoId(tutorialData.videoUrl || tutorialData.videoURL); // handle both camelCase or lowercase
=======
  const videoId = getVideoId(tutorialData.videoUrl || tutorialData.videoURL);
>>>>>>> 8c5ceac (Updated full project with changes)

  return (
    <div className="tutorial-details">
      <button onClick={onBack} className="back-btn">← Back to Tutorials</button>
<<<<<<< HEAD
      
      <div className="tutorial-content">
        <h1>{tutorialData.title}</h1>
        <div className="tutorial-info">
          {tutorialData.author && <span><strong>Author:</strong> {tutorialData.author}</span>}
=======

      <div className="tutorial-content">
        <h1>{tutorialData.title}</h1>
        <div className="tutorial-info">
>>>>>>> 8c5ceac (Updated full project with changes)
          {tutorialData.category && <span><strong>Category:</strong> {tutorialData.category}</span>}
          {tutorialData.createdAt && (
            <span><strong>Published:</strong> {new Date(tutorialData.createdAt).toLocaleDateString()}</span>
          )}
        </div>

<<<<<<< HEAD
        {videoId ? (
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={tutorialData.title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ) : (
          <p style={{ color: 'red' }}>No video available for this tutorial.</p>
        )}

        <div className="tutorial-description">
          <p>{tutorialData.description}</p>
        </div>

        <div className="tutorial-actions">
=======
        {/* Video and Instructor Name Side-by-Side */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <div style={{ flex: 3 }}>
            {videoId ? (
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={tutorialData.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <p style={{ color: 'red' }}>No video available for this tutorial.</p>
            )}
          </div>

          {/* Instructor Name Only */}
          <div style={{ flex: 1 }}>
            <p><strong>Instructor:</strong> {tutorialData.author || 'Unknown'}</p>
          </div>
        </div>

        <div className="tutorial-description" style={{ marginTop: '20px' }}>
          <p>{tutorialData.description}</p>
        </div>

        <div className="tutorial-actions" style={{ marginTop: '10px' }}>
>>>>>>> 8c5ceac (Updated full project with changes)
          <button onClick={handleLike} className="like-btn">
            ❤️ Like ({tutorialData.likes || 0})
          </button>
        </div>

        <CommentBox 
          tutorialId={tutorial._id}
          comments={comments}
          onCommentAdded={fetchTutorialDetails}
        />
      </div>
    </div>
  );
};

export default TutorialDetails;
