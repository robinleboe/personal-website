const { buildSchema } = require('graphql');

module.exports = buildSchema(`#graphql
  input UserInput {
    email: String!
    name: String
    password: String!
  }
  type User {
    _id: ID!
    email: String!
    name: String
    password: String
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type RootQuery {
    getUsers: [User!]!
    getUser(userId:ID!): User!
    loginUser(email: String!, password: String!): AuthData!
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
