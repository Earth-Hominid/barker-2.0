// Mongoose models
const Member = require('../models/Member');
const Forum = require('../models/Forum');
const Post = require('../models/Post');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLScalarType,
  GraphQLInt,
} = require('graphql');

// Member Type
const MemberType = new GraphQLObjectType({
  name: 'Member',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

// Fourm Type
const ForumType = new GraphQLObjectType({
  name: 'Forum',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    creator: {
      type: MemberType,
      resolve(parent, args) {
        return Member.findById(parent.memberId);
      },
    },
  }),
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    content: { type: GraphQLString },
    forum: {
      type: ForumType,
      resolve(parent, args) {
        return Forum.findById(parent.forumId);
      },
    },
    creator: {
      type: MemberType,
      resolve(parent, args) {
        return Member.findById(parent.memberId);
      },
    },
    votes: { type: GraphQLInt },
  }),
});

module.exports = { MemberType, ForumType, PostType };
