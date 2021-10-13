import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";

import "./TaskCard.scss";

const TaskCard = () => {
  return (
    <Card className="main-task-card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Create your task to do:</Card.Title>
        <Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Task Category
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Task Description
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3 main-task-card-lastInputGroup">
            <InputGroup.Text id="inputGroup-sizing-default">
              Importance
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Card.Text>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Add task
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
