import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="SIS — Santos Ice Services" width="40" height="40" className="d-inline-block align-top me-2" />
            SIS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              {/* Menu removed - Home shows available items */}
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Item>
                <span className="nav-link disabled">Contact</span>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
