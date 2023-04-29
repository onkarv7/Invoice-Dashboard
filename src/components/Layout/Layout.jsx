import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
};

export default Layout;
