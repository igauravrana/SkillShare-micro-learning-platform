const mongoose = require('mongoose');

const TutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  tags: [String],
  author: { type: String, required: true },
  banner: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: {
  type: [String],
  default: []},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tutorial', TutorialSchema);