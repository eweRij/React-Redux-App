import React from "react";

import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

import TaskCard from "./TaskCard.js";
import PlanCard from "./PlanCard.js";

import "./Main.scss";
const Main = () => {
  return (
    <div className="main-container">
      <Container>
        <Row className="mb-3">
          <Col>
            <TaskCard></TaskCard>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <PlanCard></PlanCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
