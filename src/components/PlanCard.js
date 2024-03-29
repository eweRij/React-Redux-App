import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup, Col } from "react-bootstrap";

import "./PlanCard.scss";
import Check from "../assets/Check.svg";

import {
  selectTodo,
  doneTask,
  removeTask,
  fetchTasks,
} from "../features/todos/todosSlice";
import { selectUserData, fetchUser } from "../features/user/userSlice";

const PlanCard = () => {
  const user = useSelector(selectUserData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(user._id));
    dispatch(fetchTasks(user._id));
  }, []);

  const todosList = useSelector(selectTodo);

  const handleTaskColor = (importance) => {
    if (parseFloat(importance) === 1) {
      return "danger";
    } else if (parseFloat(importance) === 2) {
      return "warning";
    } else {
      return "success";
    }
  };
  const handleDone = (e, id, user) => {
    e.preventDefault();
    dispatch(fetchUser(user._id));
    dispatch(fetchTasks(user._id));
    dispatch(doneTask({ id, user }));
    dispatch(fetchTasks(user._id));
    dispatch(fetchUser(user._id));
  };

  const handleRemove = (e, id, user) => {
    e.preventDefault();
    dispatch(removeTask({ id, user }));
    dispatch(fetchUser(user._id));
    dispatch(fetchTasks(user._id));
  };
  return (
    <Card style={{ width: "80%" }} className="main-plan-card">
      <Card.Body>
        <Card.Title>
          <span>Tasks you have already created:</span>
          <span className="main-plan-card-legend">
            <div className="main-plan-card-legend-urgent">Urgent!</div>
            <div className="main-plan-card-legend-important">Important</div>
            <div className="main-plan-card-legend-forLater">For later</div>
          </span>
        </Card.Title>
        <Card.Text>
          <ListGroup>
            {todosList &&
              todosList.map((todo, id) => {
                return (
                  <div className="main-plan-card-listContainer">
                    <Button
                      className="main-plan-card-listContainer-btnDone"
                      variant="info"
                      onClick={(e) => handleDone(e, todo.id, user)}
                    >
                      {todo.done === false ? "Done" : "Undone"}
                    </Button>
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
                      {todo.done === true && (
                        <div className="main-plan-card-listItem-check">
                          <img
                            className="main-plan-card-listItem-check-icon"
                            style={{ width: "20px", height: "20px" }}
                            src={Check}
                            alt="check"
                          ></img>
                        </div>
                      )}
                    </ListGroup.Item>

                    <Button
                      onClick={(e) => {
                        handleRemove(e, todo.id, user);
                      }}
                      className="main-plan-card-listContainer-btnRemove"
                      variant="dark"
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlanCard;
