import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import s from "./navbar.module.scss";
import { authActions } from "../../redux/authSlice";
import useAxios from "../../hooks/useAxios";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setMobileMenuOpen }) => {
  const { axios } = useAxios();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

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
    localStorage?.removeItem("curr_user");
  };

  const myAppointmentsLinkHandler = () => {
    setMobileMenuOpen(false);
    if (!user) {
      toast.error("Please log in to view your appointments.");
    }
  };

  return (
    <div>
      <nav>
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
            onClick={myAppointmentsLinkHandler}
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
