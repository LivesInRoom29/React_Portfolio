import React from "react";
import Navigation from "../Nav";
import Project from "../Project";
import projectData from "../../assets/projectData";

const Projects = () => {
  console.log(projectData);

  return (
    <>
      <Navigation />
      <h1 className="project-heading">Projects</h1>
      {projectData.map(({ type, name, repo, deployed, image, description, techUsed }) => (
        <Project
          type={type}
          name={name}
          repo={repo}
          deployed={deployed}
          image={image}
          description={description}
          techUsed={techUsed}
        />
      ))}
    </>
  )
};

export default Projects;