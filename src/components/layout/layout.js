import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import "./app.css";

const Layout = () => {
  return (
    <div className="stardb-app">
      <h2>Welcome to Star Wars DB</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
