import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

function RootLayout() {
  return (
    <div className="full-container">
      <div className="navbar-container">
        <Header />
        <Navbar />
        <Footer />
      </div>
      <div className="main-container">
        <Outlet />

      </div>

    </div>
  );
}

export default RootLayout;
