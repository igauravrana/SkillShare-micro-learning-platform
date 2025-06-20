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
<<<<<<< HEAD
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
=======
  const learnerId = req.body.learnerId; // Make sure this is sent in the request

  if (!learnerId) {
    return res.status(400).json({ message: "Learner ID is required" });
  }

  try {
    const tutorial = await Tutorial.findById(req.params.id);

    if (!tutorial) {
      return res.status(404).json({ message: "Tutorial not found" });
    }

    // Check if the learner already liked the tutorial
    if (tutorial.likedBy.includes(learnerId)) {
      return res.status(400).json({ message: "You have already liked this tutorial" });
    }

    // Add like and learner ID
    tutorial.likes += 1;
    tutorial.likedBy.push(learnerId);

    await tutorial.save();

>>>>>>> 8c5ceac (Updated full project with changes)
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

<<<<<<< HEAD
=======

>>>>>>> 8c5ceac (Updated full project with changes)
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