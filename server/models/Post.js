const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    forumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Forum',
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
