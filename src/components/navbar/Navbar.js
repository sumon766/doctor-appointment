import React, { useState, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import s from "./navbar.module.scss";

const Navbar = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    navRef.current.classList.toggle(s.removeNavbar);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  window.addEventListener("resize", handleLinkClick);
  const navLinks = [
    { to: "/", text: "Doctor" },
    { to: "/appointment", text: "Appointment" },
    { to: "/my_appointments", text: "My Appointments" },
    { to: "/add-doctor", text: "Add Doctor" },
    { to: "/login", text: "Login" },
    { to: "/delete-doctor", text: "Delete Doctor" },
  ];

  return (
    <div ref={navRef}>
      <button
        className={s["nav-btn"]}
        onClick={toggleNavbar}
        type="button"
      >
        {isNavOpen ? <FontAwesomeIcon icon={faTimes} />
          : <FontAwesomeIcon icon={faBarsStaggered} className="bar-custom-icon" />}
      </button>
      <nav className={isNavOpen ? s["mobile-navbar"] : s["desktop-navbar"]}>
        {navLinks.map((link) => (
          <div className={s["navbar-links"]} key={link.to}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></div>

        ))}
      </nav>
    </div>
  );
};

export default Navbar;
