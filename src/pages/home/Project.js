import React from "react";
import "./Project.css";

function Project({ name, poster, description, actions }) {
  const actionButtons = Object.keys(actions);
  return (
    <div className="project__container">
      <div className="project__posterContainer">
        <img className="project__poster" src={poster} alt={name} />
      </div>
      <div className="project__detailsContainer">
        <div className="project__details">
          <div className="project__detailsName">{name}</div>
          <div className="project__detailsButtonContainer">
            {actionButtons.map((item) => (
              <a key={item} href={actions[item]}>
                <div className="project__detailsButtons">{item}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="project__detailsDesc">{description}</div>
      </div>
    </div>
  );
}

export default Project;
