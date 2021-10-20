import React from "react";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";

import "./AuthLayout.scss";

const AuthLayout = () => {
  return (
    <div className="auth-layout-container">
      <SignUp></SignUp>
      <SignIn></SignIn>
    </div>
  );
};

export default AuthLayout;
