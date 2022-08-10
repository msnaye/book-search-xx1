const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Books{
    bookId: String
    authors: [String]
    description: String
    title: String
    link: String
    image: String
}
input BookInput{
    bookId: String
    authors: [String]
    description: String
    title: String
    link: String
    image: String

}
type User{
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Books]
}
type Auth{
    token: ID!
    user: User
}
type Query{
    me: User
    user(username: String!): User
    users: [User]
}
type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookData): User
    removeBook(bookId: String): User
}
`;