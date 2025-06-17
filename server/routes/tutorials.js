const express = require('express');
const router = express.Router();
const Tutorial = require('../models/Tutorial');
const Comment = require('../models/Comment');

// 1. POST /api/tutorials - Add new tutorial
router.post('/', async (req, res) => {
  try {
    const { title, author, category, description, videoURL } = req.body;
    const newTutorial = new Tutorial({ title, author, category, description, videoURL });
    const saved = await newTutorial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create tutorial' });
  }
});

// 2. GET /api/tutorials - List all tutorials
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find().sort({ createdAt: -1 });
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tutorials' });
  }
});

// 3. GET /api/tutorials/:id - Get tutorial by ID
router.get('/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' });
    res.json(tutorial);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving tutorial' });
  }
});

// 4. POST /api/tutorials/:id/like - Like a tutorial
router.post('/:id/like', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' });

    tutorial.likes += 1;
    await tutorial.save();
    res.json({ likes: tutorial.likes });
  } catch (err) {
    res.status(500).json({ error: 'Failed to like tutorial' });
  }
});

// 5. POST /api/tutorials/:id/comment - Comment on a tutorial
router.post('/:id/comments', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' });

    const comment = {
      text: req.body.text,
      createdAt: new Date(),
    };

    tutorial.comments.push(comment);
    await tutorial.save();

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

// 6. GET /api/tutorials/:id/comments - Get comments for a tutorial
router.get('/:id/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ tutorialId: req.params.id }).sort({ commentedAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

module.exports = router;
