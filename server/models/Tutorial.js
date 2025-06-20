const mongoose = require('mongoose');

const TutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  tags: [String],
<<<<<<< HEAD
  banner: { type: String, required: true }, // ✅ Add this line for banner image
  likes: { type: Number, default: 0 },
=======
  banner: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: [{ type: String }], 
>>>>>>> 8c5ceac (Updated full project with changes)
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tutorial', TutorialSchema);
