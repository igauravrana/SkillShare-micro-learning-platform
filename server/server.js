const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const tutorialRoutes = require('./routes/tutorials');
const defaultTutorialRoutes = require('./routes/defaultTutorials');
const userRoutes = require('./routes/users'); // ✅ NEW

const app = express();

// ✅ Middleware - Increase JSON payload limit for base64 images (banner images)
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ MongoDB connection
mongoose.connect('mongodb://localhost:27017/skillshare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ✅ Routes
app.use('/api/tutorials', tutorialRoutes);
app.use('/api/default-tutorials', defaultTutorialRoutes);
app.use('/api/users', userRoutes); // ✅ NEW

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
