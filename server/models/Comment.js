const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    forumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'forum',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    },
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = Comment = mongoose.model('comment', CommentSchema);
