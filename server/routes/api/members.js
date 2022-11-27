const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const Member = require('../../models/Member');

//@route POST api/members
// #description Register member
// @access Public

router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check('password', 'Password requires 6 or more characters').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if member is already registered
      let member = await Member.findOne({ email: email });

      if (member) {
        return res
          .status(400)
          .json({ erros: [{ msg: 'Member already registered' }] });
      }

      member = new Member({
        username: username,
        email: email,
        password: password,
      });

      // Encypt password
      const salt = await bcrypt.genSalt(10);
      member.password = await bcrypt.hash(password, salt);
      await member.save();

      // Return jsonwebtoken
      res.send('Member registered');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
