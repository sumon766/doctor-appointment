import React from "react";
import "./login.scss";
import { toast } from "react-toastify";
// import useAxios from "../../hooks/useAxios";

function Login() {
  // const { axios } = useAxios();

  const submitHandler = (e) => {
    const username = e.target.value?.username;
    const password = e.target.value?.password;
    if (!username || !password) {
      toast.error("Both username and password are required.");
    }
  };
  return (
    <div className="login">
      <div className="login-content">
        <h1 className="login_title">Login</h1>
        <form onSubmit={submitHandler}>
          <div className="login_form_input">
            <input
              type="text"
              name="username"
              id="username"
              className="login-input"
              placeholder="Enter your username..."
            />
            <input
              type="password"
              name="password"
              id="password"
              className="login-input"
              placeholder="..."
            />
          </div>
          <div className="login_form_input">
            <button type="submit" className="login-button ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
