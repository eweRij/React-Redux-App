import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Card } from "react-bootstrap";

import { verifyUser } from "../utils/api";

import "./Welcome.scss";

const Welcome = (props) => {
  if (props.match.path === "/confirm/:confirmationCode") {
    verifyUser(props.match.params.confirmationCode);
  }

  return (
    <div className="auth-layout-container">
      <Container className="auth-container welcome">
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <Card className="auth-card" bg="light">
              <Card.Body>
                <h1>
                  <strong>Account confirmed!</strong>
                </h1>
                <Card.Text>
                  <Link
                    style={{ textDecoration: "none", color: "#20c997" }}
                    to="/"
                  >
                    <h3>Please Login</h3>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
