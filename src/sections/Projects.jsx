import React from "react";

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1.",
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/yourusername/project1",
    liveDemoLink: "https://yourproject1demo.com",
  },
  {
    title: "Project 2",
    description: "Description of Project 2.",
    technologies: ["HTML5", "CSS3"],
    githubLink: "https://github.com/yourusername/project2",
    liveDemoLink: "https://yourproject2demo.com",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>
          <div className="projectLinks">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
      {/* Add more project sections as needed */}
    </div>
  );
}

export default Projects;
