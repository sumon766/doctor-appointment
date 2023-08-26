import { Link } from "react-router-dom";
import n from "./navbar.module.scss";

const Navbar = () => (
  <div className={n["navbar-links"]}>
    <Link to="/">Doctor</Link>
    <Link to="/appoint">Appoint</Link>
    <Link to="/my_appointments">My Appointments</Link>
    <Link to="/add_doctor">Add Doctor</Link>
    <Link to="/delete_doctor">Delete Doctor</Link>

  </div>
);

export default Navbar;
