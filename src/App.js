import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import RegisterLayout from "./components/RegisterLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { selectUserLogged, selectUserData } from "./features/user/userSlice";

import { getToken, getUser } from "./utils/auth";

function App() {
  const isLogged = useSelector(selectUserLogged);
  const user = useSelector(selectUserData);
  console.log(isLogged);
  console.log(getToken(), getUser(), user);
  return (
    <>
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
  // return (
  //   <HashRouter>
  //     <>{isLogged ? <Layout></Layout> : <AuthLayout></AuthLayout>}</>
  //     <Switch>
  //       <Route exact path="/login" render={() => <SignIn />} />
  //       <Route exact path="/register" render={() => <SignUp />} />
  //     </Switch>
  //   </HashRouter>
  // );
}

export default App;
