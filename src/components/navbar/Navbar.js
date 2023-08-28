import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import n from "./navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleMenu();
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mobileClassName = isMobile ? 'navbar-to-mobile' : 'navbar-desktop-container';

  return (
    <div className={n[mobileClassName]}>
      <button
        className={n["humberger-icon"]}
        onClick={toggleMenu}
        onKeyPress={handleKeyPress}
        tabIndex="0"
        aria-label="Toggle Menu"
        type="button"
      >
        Menu
      </button>
      <div>
        {!isOpen ? (
          <div className={n["navbar-links"]}>
            <Link to="/">Doctor</Link>
            <Link to="/appoint">Appoint</Link>
            <Link to="/my_appointments">My Appointments</Link>
            <Link to="/add_doctor">Add Doctor</Link>
            <Link to="/delete_doctor">Delete Doctor</Link>
          </div>
        ) : null}
      </div>

    </div>
  );
};

export default Navbar;
