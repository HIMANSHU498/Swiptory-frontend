import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="loginpage-container">
        <div className="login-box">
          <div className="login-content">
            <div className="login-heading1">Already have an account?</div>
            <div className="login-heading2">
              Your personal job finder is here
            </div>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="user-input"
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="user-input"
              />{" "}
              <br />
              <button className="login-btn">Sign in</button>
            </form>
            <span>Don’t have an account?</span> &nbsp;
            <span className="signup-btn">Sign Up</span>
          </div>
        </div>
        <div className="login-banner">
          <img src={loginBanner} alt="" />
          <div className="banner-title">Your Personal Job Finder</div>
        </div>
      </div>
    </>
  );
};

export default Login;
