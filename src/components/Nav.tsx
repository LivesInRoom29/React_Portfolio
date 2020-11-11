import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
import { NavItem } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="nav-top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={`${process.env.PUBLIC_URL}/logoMK192.png`}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Molly Kizer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/About">About</Link>
          </Nav.Item>

          {/* <Nav.Link href="/React_Portfolio/About">About</Nav.Link> */}
          <Nav.Link href="/React_Portfolio/Projects">Projects</Nav.Link>
          <Nav.Link href="/React_Portfolio/Contact">Contact</Nav.Link>
          <NavDropdown title="Learn More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/React_Portfolio/resume">Resume</NavDropdown.Item>
            <NavDropdown.Item href="/React_Portfolio/credits">Credits</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;