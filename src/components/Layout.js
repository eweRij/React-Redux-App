import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <HashRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/app" render={() => <Main />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
        </Switch>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
};

export default Layout;
