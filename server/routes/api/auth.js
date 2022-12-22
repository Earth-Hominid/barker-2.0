const express = require('express');
const router = express.Router();
const { protectRoute } = require('../../middleware/authMiddleware');
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public

router.get('/', protectRoute, async (req, res) => {
  try {
    const verifiedUser = await User.findById(req.user.id).select('-password');
    res.json(verifiedUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
