const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protectRoute = asyncHandler(async (req, res, next) => {
  // Get token from header
  token = req.headers.authorization.split(' ')[1];

  if (!token) {
    res.status(401).json({ msg: 'Not token, authorization denied' });
    throw new Error('Not authorized, no token');
  }

  try {
    // Verify token
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedToken.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
    throw new Error('Token is not valid');
  }
});

module.exports = { protectRoute };
