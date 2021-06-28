import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ALL_CONTACTS } from '../../graphQLSchemas/getAllContacts.js'

const ContactList = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_CONTACTS)

  useEffect(() => {
    refetch()
  }, [data, refetch])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <span className="visually-hidden">Some error occurred. Please, reload the page </span>
    )
  }
  const contactsBlock = data.getContacts.map((contact) => {
    return (
      <li className="list-group-item" key={contact.id}>{contact.first_name}</li>
    )
  })

  return (
    <div>
      <h4>A list of contacts</h4>
      <ul className="list-group">
        {contactsBlock}
      </ul>
    </div>
  )
}

export default ContactList