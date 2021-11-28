import React, { useState, useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'

function States() {

  const [states, setStates] = useState([])

  useEffect(() => {
    axios.get('http://api-registrations.herokuapp.com/api/v1/states')
      .then((response) => {
        setStates(response.data.states)
      }).catch(() => {
        console.log("Deu erro")
      })
  }, [])

  function deleteState(id) {

    axios.delete(`http://api-registrations.herokuapp.com/api/v1/states/${id}`)

    setStates(states.filter(state => state.id !== id))

  }


  return (
    <Container>
      <Link to="/states/post" >
        <Button variant="success" className="float-end mt-5 mb-3">Add new State</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Initials</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state, key) => {
            return (
              <tr key={key}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.initials}</td>
                <td><Link to={{ pathname: `/states/edit/${state.id}` }} >
                  <Button variant="info">Edit</Button>
                </Link>
                  <Button variant="danger" onClick={() => deleteState(state.id)}>delete</Button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </Container>


  )
}

export default States