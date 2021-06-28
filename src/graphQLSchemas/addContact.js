import { gql } from "@apollo/client";

const CREATE_CONTACT = gql`
  mutation createContact($input: ContactsInput) {
    createContact(input: $input) {
      id, first_name, last_name
    }
  }

`

export default CREATE_CONTACT