const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
        return res
          .status(400)
          .json({ errors: [{ message: 'User already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        default: 'mm',
      });

      user = new User({
        username,
        email,
        avatar,
        password,
      });

      // Encrypt password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return JSON webtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }

    User.findOne;
  }
);

module.exports = router;
