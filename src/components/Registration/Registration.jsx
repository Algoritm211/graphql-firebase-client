import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import CREATE_CONTACT from '../../graphQLSchemas/addContact'

const Registration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [createContact] = useMutation(CREATE_CONTACT)

  const onSubmit = (event) => {
    event.preventDefault()
    createContact({
      variables: {
        input: {
          first_name: firstName,
          last_name: lastName
        }
      }
    })
    alert(`${firstName} ${lastName}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row mb-3">
        <label htmlFor="first_name" className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
          <input
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            className="form-control"
            id="first_name" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="last_name" className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            className="form-control"
            id="last_name" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Add new contact</button>
    </form>
  )
}

export default Registration