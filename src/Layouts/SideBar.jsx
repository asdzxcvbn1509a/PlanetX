import React from "react";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <h1>SideBar</h1>
      <Outlet />
    </div>
  );
};

export default SideBar;
