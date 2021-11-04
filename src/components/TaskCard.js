import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Form, Col, Row } from "react-bootstrap";

import { addTask, fetchTasks } from "../features/todos/todosSlice";
import { selectUserData } from "../features/user/userSlice";
import "./TaskCard.scss";

const TaskCard = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
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
    dispatch(fetchTasks(user._id));
  }, []);
  useEffect(() => {
    taskData.category !== "" &&
      taskData.description !== "" &&
      taskData.importance !== "" &&
      setBtnDisabled(false);
  }, [taskData]);

  const handleTaskList = (event, id, task) => {
    // event.preventDefault();
    dispatch(fetchTasks(user._id));
    dispatch(addTask({ id, task }));
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
                onClick={(e) => {
                  handleTaskList(e, user._id, taskData);
                }}
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
