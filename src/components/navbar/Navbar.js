import React, { useState, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import s from "./navbar.module.scss";

const Navbar = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleLink = () => {
    navRef.current.classList.toggle(s.removeNavbar);
  };

  const navLinks = [
    { to: "/", text: "Doctor" },
    { to: "/appoint", text: "Appoint" },
    { to: "/my_appointments", text: "My Appointments" },
    { to: "/add-doctor", text: "Add Doctor" },
    { to: "/delete-doctor", text: "Delete Doctor" },
  ];

  return (
    <div ref={navRef}>
      <button
        className={s["nav-btn"]}
        onClick={toggleNavbar}
        type="button"
      >
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={isNavOpen ? s["mobile-navbar"] : s["desktop-navbar"]}>
        {navLinks.map((link) => (
          <div className={s["navbar-links"]} key={link.to}><Link to={link.to} onClick={toggleLink}>{link.text}</Link></div>

        ))}
      </nav>
    </div>
  );
};

export default Navbar;
