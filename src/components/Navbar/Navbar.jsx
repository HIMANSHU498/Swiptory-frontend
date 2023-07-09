import React from "react";
import "./Navbar.css";
import profileIcon from "./../../assets/hk.jpeg";
import menuIcon from "./../../assets/menu-icon.svg";
import bookmarkIcon from "./../../assets/Vector.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="page-title">SwipTory</div>
        <div className="navbar-btns">
          <button className="register-btn">Register Now</button>

          <button className="signin-btn">Sign in</button>
          {/* <button className="bookmarks-btn">
            <img src={bookmarkIcon} alt="" /> &nbsp; Bookmarks
          </button>
          <button className="bookmarks-btn">Add Story</button>
          <img src={profileIcon} alt="profile-icon" className="profile-icon" />
          <img src={menuIcon} alt="menu-icon" className="menu-icon" /> */}
        </div>
      </div>
      {/* <div className="profile-card">
        <h1 className="username">Himanshu kushwah</h1>
        <button className="logout-btn">Logout</button>
      </div> */}
    </>
  );
};

export default Navbar;
