import React from "react";

import Project from "./Project";

import "./Projects.css";

class Projects extends React.Component {
  state = {
    projects: [
      {
        name: "Pace",
        image:
          "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/246591/1.jpg?5310",
        description: "Product landing page.",
        url: "https://codepen.io/alexkimeu0/full/qBdPywp",
      },
      {
        name: "Microsoft",
        image:
          "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/246591/1.jpg?5310",
        description: "Microsoft Homepage clone.",
        url: "https://codepen.io/alexkimeu0/full/NWqMORV",
      },
      {
        name: "Mahanaim",
        image:
          "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/246591/1.jpg?5310",
        description: "Mahanaim Educational Institute website.",
        url: "http://mei.ac.ke/",
      },
      {
        name: "Lyrix",
        image:
          "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/246591/1.jpg?5310",
        description: "Playing around Musixmatch API.",
        url: "https://github.com/alexkimeu0/Lyrix",
      },
      {
        name: "Github Users",
        image:
          "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/246591/1.jpg?5310",
        description: "Playing around Github API.",
        url: "https://zealous-tesla-8e9d3d.netlify.app/",
      },
      {
        name: "Exercise Tracker",
        image:
          "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/246591/1.jpg?5310",
        description: "MERN stack Exercise Tracker.",
        url: "https://github.com/alexkimeu0/exercise-tracker",
      },
    ],
  };

  getProject = () => {
    const { projects } = this.state;

    return projects.map((project) => {
      return <Project project={project} />;
    });
  };
  render() {
    return (
      <div className="about-content">
        <p className="about">
          Here are some of my projects. For more check out my{" "}
          <a href="https://github.com/alexkimeu0">Github</a>&nbsp;account.
        </p>
        <div className="projects-content">{this.getProject()}</div>
      </div>
    );
  }
}

export default Projects;
