import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Container from "react-bootstrap/Container";

import "./Navigation.scss";

import { selectUserLogged, setLogged } from "../features/user/userSlice";
import { removeToken } from "../utils/auth";

const Navigation = () => {
  const history = useHistory();
  const isLogged = useSelector(selectUserLogged);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    removeToken();
    dispatch(setLogged());
    history.push("/");

    console.log(isLogged);
  };
  return (
    <Navbar bg="light" expand="lg" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Your Time Organiser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-container-custom">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">User Profile</Nav.Link>
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
