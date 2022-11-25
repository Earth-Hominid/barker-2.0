const { MemberType, ForumType } = require('./schemaTypes');

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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    member: {
      type: MemberType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Member.findById(args.id);
      },
    },
    members: {
      type: new GraphQLList(MemberType),
      resolve(parent, args) {
        return Member.find();
      },
    },
    forum: {
      type: ForumType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Forum.findById(args.id);
      },
    },
    forums: {
      type: new GraphQLList(ForumType),
      resolve(parent, args) {
        return Forum.find();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
