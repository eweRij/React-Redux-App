import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import RegisterLayout from "./components/RegisterLayout";
import Welcome from "./components/Welcome";
import {
  selectUserLogged,
  selectUserData,
  setLogged,
} from "./features/user/userSlice";
import { clearToken, removeToken } from "./utils/auth";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectUserLogged);
  console.log(isLogged);
  const user = useSelector(selectUserData);
  console.log(user);
  useEffect(() => {
    dispatch(setLogged);
  }, [isLogged]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <ToastContainer />
      {isLogged ? (
        <Layout></Layout>
      ) : (
        <HashRouter>
          <Switch>
            <Route exact path="/" component={AuthLayout} />
            <Route path="/register" component={RegisterLayout} />
            <Route path="/confirm/:confirmationCode" component={Welcome} />
          </Switch>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
