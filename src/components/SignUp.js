import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row, Container } from "react-bootstrap";

import { userRegister } from "../utils/api";
import { success_toast, error_toast } from "../utils/toast";

import "./SignUp.scss";

const SignUp = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    first_name: null,
    last_name: null,
    email: "",
    password: "",
  });

  const handleSetUser = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleRegistration = (e, userData) => {
    e.preventDefault();
    userRegister(userData)
      .then(() => {
        setUserData({
          first_name: null,
          last_name: null,
          email: "",
          password: "",
        });
        history.push("/");
        success_toast("New user was created!");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          error_toast("User with this email already exists :/");
        } else if (err.response.status === 400) {
          error_toast("All fields are required!");
        }
      });
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Card className="auth-card" bg="light">
            <Card.Body>
              <h1>Your Time Planner</h1>
              <Card.Title>Registration</Card.Title>
              <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text>First name</InputGroup.Text>
                  <FormControl
                    onChange={handleSetUser}
                    name="first_name"
                    type="text"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Last name</InputGroup.Text>
                  <FormControl
                    onChange={handleSetUser}
                    name="last_name"
                    type="text"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>E-mail</InputGroup.Text>
                  <FormControl
                    onChange={handleSetUser}
                    name="email"
                    type="email"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Password</InputGroup.Text>
                  <FormControl
                    onChange={handleSetUser}
                    name="password"
                    type="password"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                </InputGroup>
              </Card.Text>
              <div className="auth-card-btn-container">
                <Button
                  onClick={(e) => handleRegistration(e, userData)}
                  variant="success"
                  size="md"
                >
                  Sign up
                </Button>
              </div>
              <p className="auth-card-footer">
                Already registered?<a href="/login"> Sign in here!</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
