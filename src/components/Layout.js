import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

import "./Layout.scss";

const Layout = () => {
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
