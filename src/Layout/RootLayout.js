import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

function RootLayout() {
  const location = useLocation();
  const isAppointmentPage = location.pathname === "/appointment";

  return (
    <div className={isAppointmentPage ? "full-container appointment-page" : "full-container"}>
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
