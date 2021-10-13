import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";

import "./TaskCard.scss";

const PlanCard = () => {
  return (
    <Card className="main-task-card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Tasks you have already created:</Card.Title>
        <Card.Text>tu bedzie lista</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlanCard;
