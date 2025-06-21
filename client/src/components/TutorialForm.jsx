import React, { useState } from 'react';

const TutorialForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    videoURL: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/tutorials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        onSuccess();
        setFormData({ title: '', author: '', category: '', description: '', videoURL: '' });
      }
    } catch (error) {
      console.error('Error creating tutorial:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="tutorial-form">
      <h2>Add New Tutorial</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Tutorial Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="DevOps">DevOps</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="videoURL"
          placeholder="Video URL"
          value={formData.videoURL}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Tutorial</button>
      </form>
    </div>
  );
};

export default TutorialForm;