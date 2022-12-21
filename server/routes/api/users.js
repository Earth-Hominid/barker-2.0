const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
  }
);

module.exports = router;