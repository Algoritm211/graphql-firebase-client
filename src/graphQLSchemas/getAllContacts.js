import { gql } from '@apollo/client'

const GET_ALL_CONTACTS = gql`
  query {
    getContacts {
      id
      first_name
      last_name
    }
  }
`

export { GET_ALL_CONTACTS }