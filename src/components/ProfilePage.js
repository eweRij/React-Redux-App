import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row, Container, ListGroup } from "react-bootstrap";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import { fetchTasks, selectTodo } from "../features/todos/todosSlice";
import { selectUserData, fetchUser } from "../features/user/userSlice";
import { setAvatar } from "../utils/api";
import { error_toast } from "../utils/toast";
import "./ProfilePage.scss";

export const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  input: {
    display: "none",
  },
  large: {
    width: "200px",
    height: "200px",
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  const user = useSelector(selectUserData);
  const todosList = useSelector(selectTodo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(user._id));
    dispatch(fetchTasks(user._id));
  }, []);

  const handleSetAvatar = (e) => {
    const { files } = e.target;
    setAvatar(user._id, files)
      .then(() => {
        dispatch(fetchUser(user._id));
      })
      .catch((err) => {
        if (err.response.status === 500) {
          error_toast("File size cannot be larger than 2MB!");
        }
      });
  };

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
                  <div className={classes.root}>
                    <input
                      onChange={(e) => {
                        handleSetAvatar(e);
                      }}
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                      enctype="multipart/form-data"
                      name="avatar"
                    />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <Avatar
                          src={user.avatar && user.avatar}
                          className={classes.large}
                        />
                      </IconButton>
                    </label>
                  </div>
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
