const { buildSchema } = require('graphql');

module.exports = buildSchema(`#graphql
  input UserInput {
    email: String!
    password: String!
  }
  type User {
    _id: ID!
    email: String!
    password: String
  }

  type RootQuery {
    getUsers: [User!]!
    getUser(userId:ID!): User!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    deleteUser(userId: ID!): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
