import React, { useState } from 'react';

const CommentBox = ({ tutorialId, comments, onCommentAdded, user }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.name) {
      alert("Please log in to comment.");
      return;
    }

    const newComment = {
      userName: user.name,
      message: message.trim()
    };

    if (!newComment.message) return;

    try {
      const response = await fetch(`http://localhost:5000/api/tutorials/${tutorialId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      });

      if (response.ok) {
        setMessage('');
        onCommentAdded();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="comment-box" style={{ marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>Comments ({comments.length})</h3>

      <form onSubmit={handleSubmit} className="comment-form" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <textarea
          placeholder={user ? "Write a comment..." : "Please login to comment"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={!user}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            resize: 'vertical'
          }}
        />
        <button 
          type="submit" 
          disabled={!user}
          style={{
            backgroundColor: '#4b61d1',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: user ? 'pointer' : 'not-allowed',
            opacity: user ? 1 : 0.5
          }}
        >
          Add Comment
        </button>
      </form>

      <div className="comments-list" style={{ marginTop: '1.5rem' }}>
        {comments.map(comment => (
          <div key={comment._id} className="comment" style={{
            borderBottom: '1px solid #e0e0e0',
            paddingBottom: '1rem',
            marginBottom: '1rem'
          }}>
            <div className="comment-header" style={{ fontSize: '0.9rem', color: '#555' }}>
              <strong>{comment.userName}</strong>
              <span style={{ marginLeft: '1rem', fontStyle: 'italic', fontSize: '0.85rem' }}>
                {new Date(comment.commentedAt).toLocaleDateString()}
              </span>
            </div>
            <p style={{ marginTop: '0.5rem' }}>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
