const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minLength: 2,
      maxlength: 5000,
    },
    forum: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'forum',
        required: true,
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
      },
    ],
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = Comment = mongoose.model('comment', CommentSchema);
