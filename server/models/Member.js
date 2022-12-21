const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    friends: { type: Array },
    createdSubforums: { type: Array },
    memberSubforums: { type: Array },
    createdPosts: { type: Array },
    savedPosts: { type: Array },
    createdComments: { type: Array },
    savedComments: { type: Array },
    postVoteCount: { type: Number },
    commentVoteCount: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Member', MemberSchema);
