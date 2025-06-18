import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TutorialForm.css';

const TutorialForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    videoURL: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tutorials', formData);
      alert('Tutorial created!');
      setFormData({
        title: '',
        author: '',
        category: '',
        description: '',
        videoURL: ''
      });
    } catch (error) {
      alert('Error creating tutorial');
    }
  };

  return (
    <form className="tutorial-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        required
      ></textarea>
      <input
        type="url"
        name="videoURL"
        placeholder="YouTube Video URL"
        value={formData.videoURL}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Tutorial</button>
    </form>
  );
};

export default TutorialForm;
