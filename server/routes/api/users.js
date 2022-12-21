const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public

router.post(
  '/',
  [
    // username must be an email
    body('username', 'Username is required.').not().isEmpty().trim().escape(),
    body('email', 'Please provide a valid email.').isEmail().normalizeEmail(),
    // password must be at least 5 chars long
    body(
      'password',
      'Please enter password with 6 or more characters.'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure req.body to get username, email, password
    const { username, password, email } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ message: 'User already exists' }] });
      }

      res.send('User route');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }

    User.findOne;
  }
);

module.exports = router;
