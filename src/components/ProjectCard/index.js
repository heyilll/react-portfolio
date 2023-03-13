import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="postcard dark">
      <div className=" ">
        <img className="postcard-img" alt={props.name} src={props.image} />
      </div>
      <div className="postcard-text">
        <h1 className="postcard-title">Project: <strong>{props.name}</strong></h1>
        <strong>Github link:</strong> <a href={props.github}>{props.github}</a>
        <strong>Deployed link:</strong> <a href={props.deployed}>{props.deployed}</a>
      </div>
    </div>
  );
}

export default ProjectCard;