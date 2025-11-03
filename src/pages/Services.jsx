import React from "react";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      Services
      <Outlet />
    </div>
  );
};

export default Services;
