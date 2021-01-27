import React from "react";
import Navigation from "../Nav";
import Project from "../Project";
import projectData from "../../assets/projectData";
import Footer from "../Footer";

const Projects = () => {
  console.log(projectData);

  return (
    <div className="main-container">
      <Navigation />
      <h1 className="project-heading">Projects</h1>
      {projectData.map(({ type, name, repo, deployed, image, description, techUsed, login }) => (
        <Project
          type={type}
          name={name}
          repo={repo}
          deployed={deployed}
          image={image}
          description={description}
          techUsed={techUsed}
          login={login}
        />
      ))}
      <Footer />
    </div>
  )
};

export default Projects;