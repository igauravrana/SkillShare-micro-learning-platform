const express = require('express');
const Tutorial = require('../models/Tutorial');
const Comment = require('../models/Comment');
const router = express.Router();

// Get all tutorials
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find().sort({ createdAt: -1 });
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single tutorial
router.get('/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    const comments = await Comment.find({ tutorialId: req.params.id }).sort({ commentedAt: -1 });
    res.json({ tutorial, comments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create tutorial
router.post('/', async (req, res) => {
  try {
    const tutorial = new Tutorial(req.body);
    const savedTutorial = await tutorial.save();
    res.status(201).json(savedTutorial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Like tutorial
router.put('/:id/like', async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add comment
router.post('/:id/comments', async (req, res) => {
  try {
    const comment = new Comment({
      tutorialId: req.params.id,
      ...req.body
    });
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;