import React from "react";
import "./Sidebar.css";
import ReactTypingEffect from "react-typing-effect";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src="img/rohit-logo.gif" alt="" />
      </div>
      <div className="sidebar__profilePicContainer fadeIn">
        <img className="sidebar__profilePic" src="img/dp.jpg" alt="" />
      </div>
      <div className="sidebar__introTextContainer">
        <ReactTypingEffect
          className="sidebar__introText"
          text={"Hi, I'm Rohit Gaur"}
          speed="100"
          typingDelay="900"
          cursor=" "
          eraseDelay="99999999999999"
          displayTextRenderer={(text, i) => {
            return <h3>{text}</h3>;
          }}
        />
        <br />
        <ReactTypingEffect
          className="sidebar__introText"
          text={"iOS and Web developer"}
          speed="100"
          typingDelay="3000"
          cursor=" "
          eraseDelay="99999999999999"
        />
      </div>
      <div className="sidebar__nav">
        <div>Portfolio</div>
        <div>Blogs</div>
      </div>
      <div className="sidebar__social">
        <span>Twitter</span>
        <span>Github</span>
        <span>Instagram</span>
      </div>
    </div>
  );
}

export default Sidebar;
