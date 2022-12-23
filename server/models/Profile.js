const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    joinedForums: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'forum',
    },
    createdForums: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'forum',
    },
    createdPosts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'post',
    },
    savedPosts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'post',
    },
    createdComments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'comment',
    },
    savedComments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'comment',
    },
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
