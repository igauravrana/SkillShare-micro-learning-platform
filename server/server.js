const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tutorialRoutes = require('./routes/tutorials');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/skillshare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api/tutorials', tutorialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));