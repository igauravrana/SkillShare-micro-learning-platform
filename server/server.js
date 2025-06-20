const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const tutorialRoutes = require('./routes/tutorials');
const defaultTutorialRoutes = require('./routes/defaultTutorials');
<<<<<<< HEAD
const userRoutes = require('./routes/users'); // ✅ NEW
=======
const userRoutes = require('./routes/User'); // ✅ NEW
>>>>>>> 8c5ceac (Updated full project with changes)

const app = express();

// ✅ Middleware - Increase JSON payload limit for base64 images (banner images)
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ MongoDB connection
<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/skillshare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

=======
mongoose.connect('mongodb://localhost:27017/Skillshare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  require('./seedDefaultTutorials'); // ✅ safe to call now
});



>>>>>>> 8c5ceac (Updated full project with changes)
// ✅ Routes
app.use('/api/tutorials', tutorialRoutes);
app.use('/api/default-tutorials', defaultTutorialRoutes);
app.use('/api/users', userRoutes); // ✅ NEW

<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));
>>>>>>> 8c5ceac (Updated full project with changes)
