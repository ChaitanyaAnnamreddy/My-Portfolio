import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        <b>My Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectName="FoodOrderingApplication" />
        <ProjectBox projectName="ECommerce" />
        <ProjectBox projectName="Portfolio" />
      </div>
    </div>
  );
};

export default Projects;
