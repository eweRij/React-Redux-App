import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Form, Col, Row } from "react-bootstrap";

import { addTask } from "../features/todos/todosSlice";
import { getUser } from "../utils/auth";

import "./TaskCard.scss";

const TaskCard = () => {
  const dispatch = useDispatch();
  const user = getUser();
  const randomId = Math.floor(Math.random() * 100000) + 1;

  const [taskData, setTaskData] = useState({
    id: "",
    category: "",
    description: "",
    importance: "",
    done: false,
  });

  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTaskData = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTaskData((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: randomId,
      };
    });
  };
  useEffect(() => {
    taskData.category !== "" &&
      taskData.description !== "" &&
      taskData.importance !== "" &&
      setBtnDisabled(false);
  }, [taskData]);

  const handleTaskList = (event) => {
    event.preventDefault(); //tu trzeba warningi wmontowac
    dispatch(addTask(taskData));
    setTaskData({
      id: "",
      category: "",
      description: "",
      importance: "",
      done: false,
    });
    setBtnDisabled(true);
  };
  return (
    <Row>
      <Col>
        <Card style={{ width: "80%" }} className="main-task-card">
          <Card.Body>
            <Card.Title>
              Hi {user.first_name}! Create your task to do:
            </Card.Title>
            <Card.Text>
              <InputGroup className="mb-3">
                <InputGroup.Text>Task category</InputGroup.Text>
                <FormControl
                  onChange={handleTaskData}
                  type="text"
                  name="category"
                  value={taskData.category}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <br />
              <InputGroup className="mb-3">
                <InputGroup.Text>Task Description</InputGroup.Text>
                <FormControl
                  onChange={handleTaskData}
                  type="text"
                  name="description"
                  value={taskData.description}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <br />
              <Form.Select
                name="importance"
                onChange={handleTaskData}
                aria-label="Default select example"
              >
                <option>Importance</option>
                <option value="1">Urgent! To do today.</option>
                <option name="importance" value="2">
                  Important. To do tomorrow.
                </option>
                <option value="3">For later. To do in this week.</option>.
              </Form.Select>
            </Card.Text>
            <div className="d-grid gap-2">
              <Button
                disabled={btnDisabled}
                onClick={handleTaskList}
                variant="warning"
                size="lg"
              >
                Add task
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TaskCard;
