import React, { useState, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import s from "./navbar.module.scss";
import { authActions } from "../../redux/authSlice";
import useAxios from "../../hooks/useAxios";

const Navbar = () => {
  const navRef = useRef();
  const { axios } = useAxios();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // eslint-disable-next-line no-unused-vars
  const apiLogout = async () => {
    try {
      await axios.delete("/users/sign_out");
    } catch (error) {
      toast.error("Error wile logging out!");
    }
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/login");
    // logout from API
    // apiLogout();
    localStorage?.removeItem("curr_user");
  };

  const navLinks = [
    { to: "/", text: "Doctor" },
    { to: "/appointment", text: "Appointment" },
    { to: "/my_appointments", text: "My Appointments" },
    { to: "/add-doctor", text: "Add Doctor" },
    { to: "/delete-doctor", text: "Delete Doctor" },
  ];

  return (
    <div ref={navRef}>
      <button className={s["nav-btn"]} onClick={toggleNavbar} type="button">
        {isNavOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBarsStaggered} className="bar-custom-icon" />
        )}
      </button>
      <nav className={isNavOpen ? s["mobile-navbar"] : s["desktop-navbar"]}>
        {navLinks.map((link) => (
          <div className={s["navbar-links"]} key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </div>
        ))}
        <div>{!user && <Link to="/register">Register</Link>}</div>
        <div>{!user && <Link to="/login">Login</Link>}</div>

        {user && (
          <button
            type="button"
            className={s["logout-btn"]}
            onClick={logoutHandler}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
