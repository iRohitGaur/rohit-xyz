import React from "react";
import "./Sidebar.css";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Sidebar({ contentHandler }) {
  return (
    <div className="sidebar__container">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src="img/rohit-logo.gif" alt="" />
      </div>
      <div className="sidebar__profilePicContainer fadeIn">
        <img className="sidebar__profilePic" src="img/dp.jpg" alt="" />
        <h1>Rohit Gaur</h1>
        <ReactTypingEffect
          className="sidebar__introText"
          text={"iOS and Web developer"}
          speed="100"
          typingDelay="0"
          cursor=" "
          eraseDelay="99999999999999"
        />
      </div>
      <div className="sidebar__nav">
        <div onClick={() => contentHandler("portfolio")}>Portfolio</div>
        <div onClick={() => contentHandler("blog")}>Blog</div>
      </div>
      <div className="sidebar__social">
        <a href="https://apps.apple.com/us/developer/rohit-gaur/id1382308402">
          <FontAwesomeIcon icon={["fab", "apple"]} />
        </a>
        <a href="https://github.com/iRohitGaur">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://twitter.com/iRohitGaur">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="https://www.linkedin.com/in/iRohitGaur">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="https://www.youtube.com/alrodev">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </a>
        <a href="https://www.instagram.com/iRohitGaur">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;