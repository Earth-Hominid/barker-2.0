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
      ref: 'forum',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model('post', PostSchema);
