import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Your Time Organiser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-container-custom">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">User Profile</Nav.Link>
            <Nav.Link href="#log">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
