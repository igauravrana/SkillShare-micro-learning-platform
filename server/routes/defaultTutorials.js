const express = require('express');
const router = express.Router();
const DefaultTutorial = require('../models/DefaultTutorial');

router.get('/', async (req, res) => {
  try {
    const tutorials = await DefaultTutorial.find();
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
