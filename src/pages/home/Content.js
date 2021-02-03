import React, { useState } from "react";
import { projects } from "./Projects";
import "./Content.css";
import Project from "./Project";

function Content() {
  const projectCategories = Object.keys(projects);

  const [selected, setSelected] = useState(projectCategories[0]);

  let changeSelected = (value) => {
    console.log(value);
    setSelected(value);
  };

  return (
    <div className="content__container">
      <div className="content__selector">
        {projectCategories.map((item) => (
          <div
            onClick={() => changeSelected(item)}
            key={item}
            className={`content__selectorOption ${
              selected === item ? "selected" : ""
            }
            `}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="content__projectsContainer">
        {console.log(selected)}
        {projects[selected].map((item) => (
          <Project
            key={item.name}
            name={item.name}
            poster={item.poster}
            description={item.description}
            actions={item.actions}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
