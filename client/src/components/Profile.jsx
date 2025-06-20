import React, { useState, useEffect } from 'react';

const Profile = ({ user }) => {
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState(user?.photo || '');
  const [showEditor, setShowEditor] = useState(false);
  const [newBio, setNewBio] = useState('');
  const [newPhotoFile, setNewPhotoFile] = useState(null);

  useEffect(() => {
    const savedBio = localStorage.getItem('userBio');
    const savedPhoto = localStorage.getItem('userPhoto');
    if (savedBio) setBio(savedBio);
    if (savedPhoto) setPhoto(savedPhoto);
  }, []);

  const handleSave = () => {
    setBio(newBio);
    localStorage.setItem('userBio', newBio);

    if (newPhotoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        localStorage.setItem('userPhoto', reader.result);
      };
      reader.readAsDataURL(newPhotoFile);
    }

    setShowEditor(false);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img
          src={photo || 'https://via.placeholder.com/150'}
          alt="Profile"
          style={imageStyle}
        />
        <div>
          <h2 style={{ color: '#3578e5' }}>Welcome, {user?.name || 'User'}</h2>
          <p><strong>Email :</strong> {user?.email}</p>
          <p><strong>Role :</strong> Instructor</p>
          <p><strong>Bio :</strong> {bio || 'Add your bio'}</p>
          <button onClick={() => setShowEditor(true)} style={buttonStyle}>Edit Profile</button>
        </div>
      </div>

      {showEditor && (
        <div style={editorStyle}>
          <h3>Edit Profile</h3>
          <input
            type="text"
            placeholder="Bio"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            style={inputStyle}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewPhotoFile(e.target.files[0])}
            style={{ marginTop: '10px' }}
          />
          <button onClick={handleSave} style={buttonStyle}>Save Changes</button>
          <button onClick={() => setShowEditor(false)} style={{ ...buttonStyle, backgroundColor: '#ccc' }}>Cancel</button>
        </div>
      )}
    </div>
  );
};

// === Styles ===
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '40px',
  backgroundColor: '#f2f3f5',
  minHeight: '40vh'
};

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  maxWidth: '600px',
  width: '100%'
};

const imageStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  border: '3px solid #3578e5',
  objectFit: 'cover'
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#3578e5',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

const editorStyle = {
  marginTop: '20px',
  padding: '20px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  maxWidth: '400px',
  width: '100%'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

export default Profile;
