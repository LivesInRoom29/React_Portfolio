import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="nav-top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logoMK192.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {/* <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#group">Group Projects</NavDropdown.Item>
            <NavDropdown.Item href="#independent">Independent Projects</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;