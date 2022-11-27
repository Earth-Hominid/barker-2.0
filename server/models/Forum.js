const mongoose = require('mongoose');

const ForumSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  },
});

module.exports = mongoose.model('Forum', ForumSchema);
