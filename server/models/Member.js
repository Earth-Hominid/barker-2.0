const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model('Member', MemberSchema);
