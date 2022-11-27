const express = require('express');
const router = express.Router();

//@route Get api/forums
// #description Test route
// @access Public

router.get('/', (req, res) => res.send('Comment route'));

module.exports = router;
