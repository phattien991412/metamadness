import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Style from "./index.module.scss"
const Layout = ({ children }) => {
  return (
    <div className={Style.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
