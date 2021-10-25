import React from "react";

import SignIn from "./SignIn.js";

import "./AuthLayout.scss";

const AuthLayout = () => {
  return (
    <div className="auth-layout-container">
      <SignIn></SignIn>
    </div>
  );
};

export default AuthLayout;
