const express = require('express');
const router = express.Router();
const { protectRoute } = require('../../middleware/authMiddleware');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', protectRoute, (req, res) => {
  res.send('Auth route');
});

module.exports = router;
