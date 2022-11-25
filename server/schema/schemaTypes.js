// Mongoose models
const Member = require('../models/Member');
const Forum = require('../models/Forum');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList,
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

module.exports = { MemberType, ForumType };
