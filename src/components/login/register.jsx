import React from "react";
import "./login.scss";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import { authActions } from "../../redux/authSlice";

function Register() {
  const { axios } = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerFun = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: "/users",
        data,
      });

      localStorage?.setItem(
        "curr_user",
        JSON.stringify(res?.data?.status.data)
      );
      dispatch(authActions.login(res?.data?.status.data));
      toast.success("Registered successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data?.status?.message || "Unexpected error");
    }
  };

  // eslint-disable-next-line consistent-return
  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.username?.value;
    const email = e.target.email?.value;
    const role = e.target.role?.value;
    const password = e.target.password?.value;

    if (!username || !password || !email || !role) {
      return toast.error("All fields are required.");
    }

    // Sign in to backend
    registerFun({
      user: {
        username,
        email,
        role,
        password,
      },
    });
  };
  return (
    <div className="login">
      <div className="login-content">
        <h1 className="login_title">Register</h1>
        <form onSubmit={submitHandler}>
          <div className="login_form_input">
            <input
              type="text"
              name="username"
              id="username"
              className="login-input"
              placeholder="username"
            />
          </div>
          <div className="login_form_input">
            <input
              type="email"
              name="email"
              id="email"
              className="login-input"
              placeholder="Email"
            />
          </div>
          <div className="login_form_input">
            <input
              type="password"
              name="password"
              id="password"
              className="login-input"
              placeholder="password"
            />
          </div>
          <div className="login_form_input">
            <input
              type="text"
              name="role"
              id="role"
              className="login-input"
              placeholder="role e.g. user"
            />
          </div>
          <div className="login_form_input">
            <button type="submit" className="login-button ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
