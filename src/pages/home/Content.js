import React from "react";
import "./Content.css";
import Portfolio from "./Portfolio";
import Blog from "./Blog";

function Content({ content }) {
  return (
    <div className="content__container">
      {content === "portfolio" && <Portfolio />}
      {content === "blog" && <Blog />}
    </div>
  );
}

export default Content;
