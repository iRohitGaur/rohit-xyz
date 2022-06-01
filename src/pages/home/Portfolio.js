import React, { useState } from "react";
import { projects } from "./Projects";
import Project from "./Project";
import "./Portfolio.css";

function Portfolio() {
  const projectCategories = Object.keys(projects);

  const [selected, setSelected] = useState(projectCategories[0]);

  let changeSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <div className="portfolio__selector">
        {projectCategories.map((item) => (
          <div
            onClick={() => changeSelected(item)}
            key={item}
            className={`portfolio__selectorOption ${
              selected === item ? "selected" : ""
            }
            `}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="portfolio__projectsContainer">
        {projects[selected].map((item) => (
          <Project
            key={item.poster}
            name={item.name}
            poster={item.poster}
            description={item.description}
            actions={item.actions}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
