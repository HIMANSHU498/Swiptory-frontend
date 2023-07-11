import React from "react";
import "./Register.css";
import cancel from "./../../assets/cancel.svg";
import eyeOutline from "./../../assets/mdi_eye-outline.svg";
import eyeOffOutline from "./../../assets/eye-off-outline.svg";
const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-box">
          <img src={cancel} alt="cancel icon" />

          <div className="register-contentbox">
            <h2 className="login-h2">Register to SwipTory</h2>
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
            <button className="register-button">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
