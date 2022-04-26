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
    users: [User!]!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
