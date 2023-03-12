import React from "react";
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json"

function ProjectGallery() {
  return (
    <div>
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
