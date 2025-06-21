const mongoose = require('mongoose');

const defaultTutorialSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  tags: [String]
});

module.exports = mongoose.model('DefaultTutorial', defaultTutorialSchema);