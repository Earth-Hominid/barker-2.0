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
    updateMember: {
      type: MemberType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Member.findByIdAndUpdate(
          args.id,
          {
            $set: {
              username: args.username,
              email: args.email,
            },
          },
          { new: true }
        );
      },
    },

    addForum: {
      type: ForumType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        memberId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const forum = new Forum({
          name: args.name,
          description: args.description,
          memberId: args.memberId,
        });
        return forum.save();
      },
    },
    deleteForum: {
      type: ForumType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Forum.findByIdAndRemove(args.id, args);
      },
    },
    updateForum: {
      type: ForumType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Forum.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: barkerMutations,
});
