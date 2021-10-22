import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row, Container } from "react-bootstrap";

import "./SignUp.scss";

import { userLogin } from "../utils/api";
import { success_toast, error_toast } from "../utils/styles";
import {
  removeToken,
  setToken,
  getToken,
  setUser,
  getUser,
} from "../utils/auth";
import {
  selectUserLogged,
  selectUserData,
  setLogged,
  setUserData,
} from "../features/user/userSlice";

const SignIn = () => {
  const history = useHistory();
  const isLogged = useSelector(selectUserLogged);

  const dispatch = useDispatch();

  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const user = useSelector(selectUserData);

  const handleSetUser = (e) => {
    const { name, value } = e.target;
    setUserLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleLogin = (e, userData) => {
    e.preventDefault();
    userLogin(userData)
      .then((resp) => {
        console.log(resp.data);
        dispatch(setUserData(resp.data));
        setToken(resp.data.token);
        dispatch(setLogged());
        setUser(resp.data); //to trzeba w reduxa
        console.log(getUser(user));
        setUserLoginData({
          email: "",
          password: "",
        });
        history.push("/app");
        //to ze is logge!
      })
      .catch((err) => {
        setUserLoginData({
          email: "",
          password: "",
        });
        if (err.response.status === 409) {
          error_toast("Invaid email or password!");
        } else if (err.response.status === 400) {
          error_toast("All fields are required!");
        }
      });
  };
  console.log(isLogged, getToken());

  console.log(getUser());
  return (
    <Container className="auth-container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <ToastContainer />
          <Card className="auth-card" bg="light">
            <Card.Body>
              <h1>Your Time Planner</h1>
              <Card.Title>Log in</Card.Title>
              <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text>E mail</InputGroup.Text>
                  <FormControl
                    onChange={handleSetUser}
                    name="email"
                    type="email"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                    value={userLoginData.email}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Password</InputGroup.Text>
                  <FormControl
                    onChange={handleSetUser}
                    name="password"
                    type="password"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-small"
                    value={userLoginData.password}
                  />
                </InputGroup>
              </Card.Text>
              <div className="auth-card-btn-container">
                <Button
                  onClick={(e) => handleLogin(e, userLoginData)}
                  variant="success"
                  size="md"
                >
                  Sign in
                </Button>
                {/* <Button onClick={removeToken} variant="success" size="md">
                  Sign out
                </Button> */}
              </div>
              <p className="auth-card-footer">
                You don't have account?
                <a href="/register">
                  <Link to="/register"> Register here!</Link>
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
