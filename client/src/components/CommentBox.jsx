import React, { useState } from 'react';

const CommentBox = ({ tutorialId, comments, onCommentAdded }) => {
  const [newComment, setNewComment] = useState({ userName: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/tutorials/${tutorialId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      if (response.ok) {
        setNewComment({ userName: '', message: '' });
        onCommentAdded();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="comment-box">
      <h3>Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Your name"
          value={newComment.userName}
          onChange={(e) => setNewComment({ ...newComment, userName: e.target.value })}
          required
        />
        <textarea
          placeholder="Write a comment..."
          value={newComment.message}
          onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
          required
        />
        <button type="submit">Add Comment</button>
      </form>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <div className="comment-header">
              <strong>{comment.userName}</strong>
              <span>{new Date(comment.commentedAt).toLocaleDateString()}</span>
            </div>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;