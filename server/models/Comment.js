const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  tutorialId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutorial', required: true },
  userName: { type: String, required: true },
  message: { type: String, required: true },
  commentedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);