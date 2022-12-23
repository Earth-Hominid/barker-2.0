const express = require('express');
const router = express.Router();

// @route   GET api/forums
// @desc    Get all forums
// @access  Public

router.get('/', async (req, res) => {
  try {
    const profiles = await Forum.find().populate('forum', [
      'posts',
      'comments',
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
