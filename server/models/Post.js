const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 2,
      maxlength: 100,
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    forum: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'forum',
      },
    ],
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
