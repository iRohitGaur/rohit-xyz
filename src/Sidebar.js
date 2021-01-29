import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src="img/rohit-logo.gif" alt="" />
      </div>
      <div className="sidebar__profilePicContainer fadeIn">
        <img className="sidebar__profilePic" src="img/dp.jpg" alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
