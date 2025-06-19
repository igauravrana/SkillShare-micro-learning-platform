import React, { useState } from 'react';

const InstructorPanel = ({ onSuccess }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    videoUrl: '',
    tags: '',
    banner: null, // store the file itself
    preview: null  // for image preview
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, banner: reader.result, preview: reader.result }));
      };
      reader.readAsDataURL(file); // convert image to base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, videoUrl, banner } = form;
    if (!title || !description || !videoUrl || !banner) {
      setMessage('All fields including banner are required.');
      return;
    }

    try {
      const response = await fetch('/api/tutorials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          videoUrl: form.videoUrl,
          tags: form.tags.split(',').map(t => t.trim()),
          banner: form.banner // base64
        })
      });

      if (!response.ok) throw new Error('Failed to add tutorial');
      setMessage('Tutorial submitted successfully!');
      setForm({ title: '', description: '', videoUrl: '', tags: '', banner: null, preview: null });
      onSuccess();
    } catch (err) {
      console.error(err);
      setMessage('Submission failed.');
    }
  };

  return (
    <div className="instructor-panel">
      <h2>Add a New Tutorial</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="videoUrl" placeholder="YouTube Video URL" value={form.videoUrl} onChange={handleChange} />
        <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {form.preview && <img src={form.preview} alt="Preview" style={{ width: '100%', marginTop: '10px' }} />}

        <button type="submit">Add Tutorial</button>
      </form>
      {message && <p style={{ textAlign: 'center' }}>{message}</p>}
    </div>
  );
};

export default InstructorPanel;
