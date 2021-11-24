import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row, Container } from "react-bootstrap";

import "./SignUp.scss";

import { userLogin } from "../utils/api";
import { success_toast, error_toast } from "../utils/toast";
import { setToken, getToken } from "../utils/auth";
import { setLogged, fetchUser } from "../features/user/userSlice";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

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
        setToken(resp.data.token);
        const token = getToken();
        dispatch(setLogged());
        dispatch(fetchUser(resp.data._id));
        setUserLoginData({
          email: "",
          password: "",
        });
        history.push("/app");
        success_toast("Successfully logged!");
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
  return (
    <Container className="auth-container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
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
