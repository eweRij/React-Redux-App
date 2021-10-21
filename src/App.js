import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import RegisterLayout from "./components/RegisterLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { selectUserLogged } from "./features/user/userSlice";

function App() {
  const isLogged = useSelector(selectUserLogged);
  console.log(isLogged);
  console.log(localStorage.getItem("token"));
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
