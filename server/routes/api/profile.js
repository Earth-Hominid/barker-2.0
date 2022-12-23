const express = require('express');
const router = express.Router();
const { protectRoute } = require('../../middleware/authMiddleware');
const Profile = require('../../models/Profile');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', protectRoute, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['username', 'avatar']
    );
    if (!profile) {
      return res.status(400).json({ msg: 'No profile exists for user' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/profile
// @desc    Create/update user profile
// @access  Private

router.post('/', protectRoute, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors });
  }

  const {
    joinedForums,
    createdForums,
    createdPosts,
    savedPosts,
    createdComments,
    savedComments,
  } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (joinedForums) profileFields.joinedForums = joinedForums;
  if (createdForums) profileFields.createdForums = createdForums;
  if (createdPosts) profileFields.createdPosts = createdPosts;
  if (savedPosts) profileFields.savedPosts = savedPosts;
  if (createdComments) profileFields.createdComments = createdComments;
  if (savedComments) profileFields.savedComments = savedComments;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update the profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    // Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
