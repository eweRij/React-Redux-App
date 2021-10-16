import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row, Container } from "react-bootstrap";

import "./SignUp.scss";

const SignUp = () => {
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
                  <InputGroup.Text>E-mail</InputGroup.Text>
                  <FormControl
                    name="email"
                    type="email"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text>Password</InputGroup.Text>
                  <FormControl
                    name="password"
                    type="password"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                </InputGroup>
              </Card.Text>
              <div className="auth-card-btn-container">
                <Button variant="success" size="md">
                  Sign up
                </Button>
              </div>
              <p className="auth-card-footer">
                Already registered?<a href="#"> Sign in here!</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;