import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  InputGroup,
  FormControl,
  Form,
  Col,
  Row,
  Image,
  Container,
  ListGroup,
} from "react-bootstrap";

import { addTask, fetchTasks, selectTodo } from "../features/todos/todosSlice";
import { selectUserData, fetchUser } from "../features/user/userSlice";
// import Avatar from "./Avatar";
import Avatar from "../assets/avatar.jpg";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const user = useSelector(selectUserData);
  const todosList = useSelector(selectTodo);
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
  useEffect(() => {
    dispatch(fetchUser(user._id));
    // dispatch(fetchTasks(user._id));
  }, []);
  const handleTaskColor = (importance) => {
    if (parseFloat(importance) === 1) {
      return "danger";
    } else if (parseFloat(importance) === 2) {
      return "warning";
    } else {
      return "success";
    }
  };
  return (
    <Row>
      <Col>
        <Card style={{ width: "50%" }} className="main-task-card">
          <Card.Body>
            <Card.Title>Hi {user.first_name}! Check your profile:</Card.Title>
            <Card.Text>
              <div className="profile-user">
                <Container className="profile-user-image-container">
                  <Row>
                    <Col xs={6} md={4}>
                      <Image
                        style={{
                          backgroundColor: "balck",
                          width: "300px",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src={Avatar}
                        roundedCircle
                      />
                      {/* <Avatar></Avatar> */}
                    </Col>
                  </Row>
                </Container>
                <div className="profile-user-data-container">
                  <h5>Name : {user.first_name}</h5>
                  <h5>Surname : {user.last_name}</h5>
                  <h5>E-mail : {user.email}</h5>
                </div>
              </div>
              <div className="profile-task-header">
                <h5>Your tasks by now:</h5>
                <Button href="#app" variant="warning" size="md">
                  Edit tasks
                </Button>
              </div>

              <ListGroup>
                {todosList &&
                  todosList.map((todo, id) => {
                    return (
                      <div className="main-plan-card-listContainer">
                        <ListGroup.Item
                          variant={handleTaskColor(todo.importance)}
                          className="main-plan-card-listItem"
                          key={id}
                          style={
                            todo.done === false
                              ? { textDecoration: "none" }
                              : { textDecoration: "line-through" }
                          }
                        >
                          <Col md="4">
                            <b>Category: </b>
                            {todo.category}
                          </Col>
                          <Col md="7">
                            <b>What to do:</b> {todo.description}
                          </Col>
                        </ListGroup.Item>
                      </div>
                    );
                  })}
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfilePage;
