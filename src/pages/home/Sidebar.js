import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Sidebar({ content, contentHandler }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [visible, setVisible] = useState(false);

  const updateWidthHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setVisible(false);
  }, [content]);

  useEffect(() => {
    window.addEventListener("resize", updateWidthHeight);
    return () => window.removeEventListener("resize", updateWidthHeight);
  }, []);

  return (
    <div className="sidebar__container">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src="img/rohit-logo.gif" alt="" />
      </div>
      {(width < 1041 || height < 721) && (
        <div
          className="sidebar__burgerButton"
          onClick={() => {
            visible ? setVisible(false) : setVisible(true);
          }}
        >
          {visible ? "X" : "☰"}
        </div>
      )}
      <div
        className={`sidebar__burgerContent ${
          width < 1041 || height < 721
            ? visible
              ? "visible"
              : "invisible"
            : ""
        }`}
      >
        <div className="sidebar__profilePicContainer fadeIn">
          <img className="sidebar__profilePic" src="img/dp.jpg" alt="" />
          <h1 className="sidebar__heroTitle">Rohit Gaur</h1>
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
          <div
            className={`sidebar__navButton ${
              content === "portfolio" ? "selected" : ""
            }
          `}
            onClick={() => contentHandler("portfolio")}
          >
            Portfolio
          </div>
          <div
            className={`sidebar__navButton ${
              content === "blog" ? "selected" : ""
            }
          `}
            onClick={() => contentHandler("blog")}
          >
            Blog
          </div>
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
    </div>
  );
}

export default Sidebar;
