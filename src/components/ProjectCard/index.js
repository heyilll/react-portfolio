import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="postcard dark">
      <img className="postcard-img" alt={props.name} src={props.image} />
      <div className="postcard-text">
        <h2 className="postcard-title">Project: <strong>{props.name}</strong></h2>
        <strong>Github link:</strong> <a href={props.github}>{props.github}</a>
        <strong>Deployed link:</strong> <a href={props.deployed}>{props.deployed}</a>
      </div>
    </div>
  );
}

export default ProjectCard;
