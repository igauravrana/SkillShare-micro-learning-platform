import React, { useState } from 'react';

const InstructorPanel = ({ onSuccess }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    videoUrl: '',
    tags: '',
<<<<<<< HEAD
    banner: null, // store the file itself
    preview: null  // for image preview
=======
    banner: null,
    preview: null
>>>>>>> 8c5ceac (Updated full project with changes)
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
<<<<<<< HEAD
      reader.readAsDataURL(file); // convert image to base64
=======
      reader.readAsDataURL(file);
>>>>>>> 8c5ceac (Updated full project with changes)
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
<<<<<<< HEAD
          banner: form.banner // base64
=======
          banner: form.banner
>>>>>>> 8c5ceac (Updated full project with changes)
        })
      });

      if (!response.ok) throw new Error('Failed to add tutorial');
<<<<<<< HEAD
      setMessage('Tutorial submitted successfully!');
=======
      setMessage('✅ Tutorial submitted successfully!');
>>>>>>> 8c5ceac (Updated full project with changes)
      setForm({ title: '', description: '', videoUrl: '', tags: '', banner: null, preview: null });
      onSuccess();
    } catch (err) {
      console.error(err);
<<<<<<< HEAD
      setMessage('Submission failed.');
=======
      setMessage('❌ Submission failed.');
>>>>>>> 8c5ceac (Updated full project with changes)
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div style={pageBackgroundStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📘 Add a New Tutorial</h2>

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label>Description:</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <div style={formGroupStyle}>
            <label>Video URL:</label>
            <input
              type="text"
              name="videoUrl"
              value={form.videoUrl}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label>Tags (comma separated):</label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label>Banner Image:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginTop: '5px' }} />
            {form.preview && (
              <img
                src={form.preview}
                alt="Banner Preview"
                style={{ width: '100%', marginTop: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
              />
            )}
          </div>

          <button type="submit" style={buttonStyle}>➕ Add Tutorial</button>
        </form>

        {message && <p style={{ textAlign: 'center', marginTop: '15px' }}>{message}</p>}
      </div>
>>>>>>> 8c5ceac (Updated full project with changes)
    </div>
  );
};

<<<<<<< HEAD
=======
// === Styles ===


const pageBackgroundStyle = {
  backgroundColor: '#e5eaf5', // Light blue background
  minHeight: '100vh',
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start'
};


const body = {
  backgroundColor:'blue'
}



const formContainerStyle = {
  maxWidth: '600px',
  width: '100%',
  padding: '30px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  background: '#ffffff',
  fontFamily: 'Arial, sans-serif'
};

const formGroupStyle = {
  marginBottom: '15px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginTop: '5px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '10px'
};

>>>>>>> 8c5ceac (Updated full project with changes)
export default InstructorPanel;
