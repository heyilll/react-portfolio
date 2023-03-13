import React from "react";
import ProjectCard from "../../ProjectCard";
import projects from "../../../projects.json"
import "./style.css"

function ProjectGallery() {
  return (
    <div className="main mx-auto">
      <h1>Project Gallery</h1>
      {projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
          />
        ))}
    </div>
  );
}

export default ProjectGallery;
