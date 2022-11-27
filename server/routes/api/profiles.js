const express = require('express');
const router = express.Router();

//@route Get api/forums
// #description Test route
// @access Private

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
