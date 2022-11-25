const mongoose = require('mongoose');

const ForumSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  },
});

module.exports = mongoose.model('Forum', ForumSchema);
