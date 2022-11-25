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
  GraphQLNonNull,
} = require('graphql');

// Querys
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

// Mutations
const barkerMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMember: {
      type: MemberType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const member = new Member({
          username: args.username,
          email: args.email,
        });

        return member.save();
      },
    },
    deleteMember: {
      type: MemberType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Member.findByIdAndRemove(args.id, args);
      },
    },
    addForum: {
      type: ForumType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: barkerMutations,
});
