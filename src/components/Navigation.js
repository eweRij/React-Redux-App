import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { setLogged } from "../features/user/userSlice";
import { removeToken, removeUser } from "../utils/auth";
import { success_toast } from "../utils/toast";

import "./Navigation.scss";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    removeToken();
    removeUser();
    dispatch(setLogged());
    history.push("/");
    success_toast("You were successfully logged out!");
  };
  return (
    <Navbar bg="light" expand="lg" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#app">Your Time Organiser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-container-custom">
          <Nav>
            <Nav.Link href="#app">Home</Nav.Link>
            <Nav.Link href="#link">Your Profile</Nav.Link>
            <Nav.Link onClick={handleSignOut} href="/">
              Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
