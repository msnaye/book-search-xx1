const {gql} = require("apollo-server-express");

const typeDefs =gql`
type Books{
    bookId: String
    authors: [String]
    description: String
    title: String
    link: String
    image: String
}
type User{
    _id: id
    username: String
    email: String
    bookCount: Int
    savedBooks: [Books]
}

`;