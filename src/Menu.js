import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="nav">
          <Link className="nav-link" to='/states/states'>
            States
          </Link>
          <Link className="nav-link" to='/cities/cities'>
            Cities
          </Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Menu;
