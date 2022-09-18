import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

import {
    getUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser,
} from '../controllers/userControllers.js'

const schema = buildSchema(`
 
  input UserInput {
    username: String
    password: String
  }

    type User {
    id: ID!
    username: String
    password: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers(key: String, value: String): [User]
  }
  
  type Mutation {
    createUser(userData: UserInput!): User
    updateUser(id: ID!, newData: UserInput!): User
    deleteUser(id: ID!): User
  }
`)

export const graphqlMiddleware = graphqlHTTP({
    schema,
    rootValue: {
        getUsers,
        getUser,
        saveUser,
        updateUser,
        deleteUser,
    },
    graphiql: true,
})