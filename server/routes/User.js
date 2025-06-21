const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Save user info from Firebase
router.post('/login', async (req, res) => {
  const { name, email, uid } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, googleId: uid });
      await user.save();
    }
    res.json({ message: 'User saved or already exists', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;