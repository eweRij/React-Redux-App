import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage";

import "./Layout.scss";

import { clearToken, removeToken } from "../utils/auth";
import { setLogged } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(setLogged);
  useEffect(() => {
    setTimeout(() => {
      removeToken();
      dispatch(setLogged());
    }, 7200000);
  }, []);
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
