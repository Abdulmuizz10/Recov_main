import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayouts = ({ setLoading }) => {
  return (
    <main>
      <Navbar setLoading={setLoading} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayouts;
