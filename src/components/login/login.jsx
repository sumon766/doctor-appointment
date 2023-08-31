import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <div className="login-content">
        <h1 className="login_title">Login</h1>
        <form>
          <div className="login_form_input">
            <input type="email" id="email" className="login-input" placeholder="Enter your username..." />
          </div>
          <div className="login_form_input">
            <button type="submit" className="login-button ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
