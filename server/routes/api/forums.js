const express = require('express');
const router = express.Router();

//@route Get api/forums
// #description Test route
// @access Public

router.get('/', (req, res) => res.send('Forum route'));

module.exports = router;
