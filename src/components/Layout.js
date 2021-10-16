import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
