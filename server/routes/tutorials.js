const express = require("express");
const Tutorial = require("../models/Tutorial");
const Comment = require("../models/Comment");

const router = express.Router();

/** ✅ GET all tutorials */
router.get("/", async (req, res) => {
  try {
    const tutorials = await Tutorial.find().sort({ createdAt: -1 });
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/** ✅ GET a single tutorial + comments */
router.get("/:id", async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    const comments = await Comment.find({ tutorialId: req.params.id }).sort({
      commentedAt: -1,
    });
    res.json({ tutorial, comments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/** ✅ POST a new tutorial */
router.post("/", async (req, res) => {
  try {
    const tutorial = new Tutorial(req.body);
    const savedTutorial = await tutorial.save();
    res.status(201).json(savedTutorial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//** ✅ PUT - Toggle Like a tutorial */
router.put("/:id/like", async (req, res) => {
  const learnerId = req.body.learnerId;
  console.log("Received like toggle from learnerId:", learnerId);

  if (!learnerId) {
    return res.status(400).json({ message: "Learner Id is required." });
  }

  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ message: "Tutorial not found." });
    }

    const likedIndex = tutorial.likedBy.indexOf(learnerId);

    if (likedIndex !== -1) {
      // If already liked, remove like
      tutorial.likedBy.splice(likedIndex, 1);
      tutorial.likes = Math.max(tutorial.likes - 1, 0);
    } else {
      // If not liked, add like
      tutorial.likedBy.push(learnerId);
      tutorial.likes += 1;
    }

    await tutorial.save();
    res.json(tutorial);
  } catch (error) {
    console.error("Error in toggle like route:", error);
    res.status(500).json({ message: error.message });
  }
});

/** ✅ POST - Add a comment */
router.post("/:id/comments", async (req, res) => {
  try {
    const comment = new Comment({
      tutorialId: req.params.id,
      ...req.body,
    });
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
