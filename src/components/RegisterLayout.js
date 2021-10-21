import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import { useSelector, useDispatch } from "react-redux";
import { selectUserLogged, setLogged } from "../features/user/userSlice";
import "./AuthLayout.scss";

const AuthLayout = () => {
  const isLogged = useSelector(selectUserLogged);
  console.log(isLogged);
  return (
    <div className="auth-layout-container">
      <SignUp></SignUp>
      {/* <SignIn></SignIn> */}
    </div>

    // <HashRouter>
    //   <AuthLayout />
    //   <Switch>
    //     <Route exact path="/" render={() => <SignIn />} />
    //     <Route exact path="/register" render={() => <SignUp />} />
    //   </Switch>
    // </HashRouter>
  );
};

export default AuthLayout;
