import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github link:</strong> <a href={props.github}>{props.github}</a>
          </li>
          <li>
            <strong>Deployed link:</strong> <a href={props.deployed}>{props.deployed}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
