import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import RegisterLayout from "./components/RegisterLayout";
import { selectUserLogged } from "./features/user/userSlice";

function App() {
  const isLogged = useSelector(selectUserLogged);

  return (
    <>
      <ToastContainer />
      {isLogged ? (
        <Layout></Layout>
      ) : (
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <AuthLayout />} />
            <Route exact path="/register" render={() => <RegisterLayout />} />
          </Switch>
        </HashRouter>
      )}
    </>
  );
}

export default App;
