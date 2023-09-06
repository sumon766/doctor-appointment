/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import s from "./navbar.module.scss";
import { authActions } from "../../redux/authSlice";
import useAxios from "../../hooks/useAxios";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setMobileMenuOpen }) => {
  const navRef = useRef();
  const { axios } = useAxios();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

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

  // const navLinks = [
  //   { to: "/", text: "Doctor" },
  //   { to: "/appointment", text: "Appointment" },
  //   { to: "/my-appointments", text: "My Appointments" },
  //   { to: "/add-doctor", text: "Add Doctor" },
  //   { to: "/delete-doctor", text: "Delete Doctor" },
  // ];

  return (
    <div>
      <nav className={isNavOpen ? s["mobile-navbar"] : s["desktop-navbar"]}>
        <div className={s["navbar-links"]}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-nav-link" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Doctor
          </Link>
          <Link
            to="/appointment"
            className={
              location.pathname === "/appointment" ? "active-nav-link" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Appointment
          </Link>
          <Link
            to="/my-appointments"
            className={
              location.pathname === "/my-appointments" ? "active-nav-link" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            My Appointments
          </Link>
          <Link
            to="/add-doctor"
            className={
              location.pathname === "/add-doctor" ? "active-nav-link" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Add Doctor
          </Link>
          <Link
            to="/delete-doctor"
            className={
              location.pathname === "/delete-doctor" ? "active-nav-link" : ""
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Delete Doctor
          </Link>

          <div className={s["auth-links"]}>
            <div className={`${s["auth-link"]} ${s["auth-link-top"]}`}>
              {!user && (
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
              )}
            </div>
            <div className={s["auth-link"]}>
              {!user && (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              )}
            </div>
            {user && (
              <div className={s["logout-wrapper"]}>
                <button
                  type="button"
                  className={s["logout-btn"]}
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
