import React from "react";
import "./Login.css";
import cancel from "./../../assets/cancel.svg";
import eyeOutline from "./../../assets/mdi_eye-outline.svg";
import eyeOffOutline from "./../../assets/eye-off-outline.svg";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <img src={cancel} alt="cancel icon" />

          <div className="login-contentbox">
            <h2 className="login-h2">Login to SwipTory</h2>
            <label>
              Username
              <input
                type="text"
                placeholder="Enter username"
                name="name"
                // onChange={handleChange}
                // value={name}
              />
            </label>
            <label style={{ marginLeft: "6vw" }}>
              Password
              <input
                type="text"
                placeholder="Enter password"
                name="password"
                // onChange={handleChange}
                // value={name}
              />
              <img src={eyeOutline} alt="" className="eye-icon" />
            </label>
            <p>Please enter valid username</p>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
