import React, { useState } from "react";
import "./Navbar.css";
import profileIcon from "./../../assets/hk.jpeg";
import menuIcon from "./../../assets/menu-icon.svg";
import bookmarkIcon from "./../../assets/Vector.svg";
import cross from "./../../assets/cross.svg";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  const [isProfileCardOpen, setProfileCardOpen] = useState(false);

  const toggleProfileCard = () => {
    setProfileCardOpen(!isProfileCardOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="page-title">SwipTory</div>
        <div className="navbar-btns">
          {!isLoggedIn ? (
            <>
              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                Register Now
              </button>
              <button className="signin-btn" onClick={() => navigate("/login")}>
                Sign in
              </button>
            </>
          ) : (
            <>
              <button className="bookmarks-btn">
                <img src={bookmarkIcon} alt="" /> &nbsp; Bookmarks
              </button>
              <button
                className="bookmarks-btn"
                onClick={() => navigate("/addstory")}
              >
                Add Story
              </button>
              <img
                src={profileIcon}
                alt="profile-icon"
                className="profile-icon"
              />
              <img
                src={menuIcon}
                alt="menu-icon"
                className="menu-icon"
                onClick={toggleProfileCard}
              />
              {isProfileCardOpen && (
                <div className="profile-card">
                  <img
                    src={cross}
                    alt="cancel btn"
                    onClick={toggleProfileCard}
                  />
                  <h1 className="username">{username}</h1>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
