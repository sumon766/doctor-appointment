import React from "react";
import "./login.scss";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import { authActions } from "../../redux/authSlice";

function Login() {
  // const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axios } = useAxios();
  const signIn = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: "/users/sign_in",
        data,
      });

      console.log("SIGNED IN USER RES::", res.data.user);
      dispatch(authActions.login(res?.data?.user));
      localStorage?.setItem("curr_user", JSON.stringify(res?.data?.user));
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      toast.error("Unexpected error");
    }
  };

  // eslint-disable-next-line consistent-return
  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.username?.value;
    const password = e.target.password?.value;

    if (!username || !password) {
      return toast.error("Both username and password are required.");
    }

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
              placeholder="username"
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
