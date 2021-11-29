import React, { useState, useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Cities() {

  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001//api/v1/cities')
      .then((response) => {
        setCities(response.data.cities)
      }).catch(() => {
        console.log("Deu erro")
      })
  }, [])

  function deleteCity(id) {

    axios.delete(`http://localhost:3001//api/v1/cities/${id}`)

    setCities(cities.filter(city => city.id !== id))

  }


  return (
    <Container>
      <Link to="/cities/post" >
        <Button variant="success" className="float-end mt-5 mb-3">Add new City</Button>
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
          {cities.map((city, key) => {
            return (
              <tr key={key}>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.state.initials}</td>
                <td><Link to={{ pathname: `/cities/edit/${city.id}` }} >
                  <Button variant="info">Edit</Button>
                </Link>
                  <Button variant="danger" onClick={() => deleteCity(city.id)}>delete</Button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </Container>


  )
}

export default Cities