import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >News App</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar