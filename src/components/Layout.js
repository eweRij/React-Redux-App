import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

import "./Layout.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { getUser } from "../utils/auth";
import { success_toast } from "../utils/styles";

const Layout = () => {
  console.log(getUser());
  useEffect(() => {
    success_toast("Successfully logged!");
  }, []);
  return (
    //   <HashRouter>
    //   <Switch>
    //     <Route exact path="/" render={() => <AuthLayout />} />
    //     <Route exact path="/register" render={() => <RegisterLayout />} />
    //   </Switch>
    // </HashRouter>
    <div className="layout-container">
      <HashRouter>
        <Navigation></Navigation>
        <ToastContainer />
        <Switch>
          <Route exact path="/app" render={() => <Main />} />
          {/* <Route exact path="/register" render={() => <RegisterLayout />} /> */}
        </Switch>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
};

export default Layout;
