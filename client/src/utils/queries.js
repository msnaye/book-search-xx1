import { gql } from '@apollo/client';

export const GET_ME = gql`
query findMe{
    me{
        _id
        username
        email 
        bookCount
        savedBooks{
            bookId
            authors
            title
            image
            description
            title
            link
        }

    }
}`;