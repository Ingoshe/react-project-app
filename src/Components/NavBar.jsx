import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <div className="nav-bar">
      
       <Navbar  bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">JELA 5TAR</Navbar.Brand>
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="faq">FAQs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="events">Upcoming Events</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar