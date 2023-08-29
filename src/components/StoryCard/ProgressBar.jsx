import React from "react";
import "./LoadingBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <div className="progress-filler"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
