import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default AuthLayouts;
