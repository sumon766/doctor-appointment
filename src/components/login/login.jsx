import React from "react";
import "./login.scss";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";

function Login() {
  const { axios } = useAxios();
  const signIn = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: "/user/12345",
        data,
      });

      console.log(res);
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data || "Unexpected error");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.username?.value;
    const password = e.target.password?.value;

    if (!username || !password) {
      toast.error("Both username and password are required.");
    }
    console.log("VALUES: ", username, password);

    // Sign in to backend
    signIn({
      user: {
        username,
        password,
      },
    });
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
          </div>
          <div className="login_form_input">
            <input
              type="password"
              name="password"
              id="password"
              className="login-input"
              placeholder="Password"
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
