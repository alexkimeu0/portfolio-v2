import React from "react";

import Skill from "./Skill";

import "./Skills.css";

class Skills extends React.Component {
  state = {
    skills: [
      {
        name: "html5",
        description: "HTML5",
      },
      {
        name: "js",
        description: "JavaScript, ES6",
      },
      {
        name: "laravel",
        description: "Laravel PHP Framework",
      },
      {
        name: "css3",
        description: "CSS3",
      },
      {
        name: "react",
        description: "React & Redux.",
      },
      {
        name: "python",
        description: "Python & Django.",
      },
      {
        name: "bootstrap",
        description: "Bootstrap.",
      },
      {
        name: "node",
        description: "Node, Express, APIs.",
      },
      {
        name: "git",
        description: "Git version control & Github.",
      },
    ],
  };

  skill = () => {
    const { skills } = this.state;

    return skills.map((skill) => {
      return <Skill skill={skill} />;
    });
  };
  render() {
    return (
      <div className="about-content">
        <p className="about">Here are some of my Technical skills:</p>
        <div className="skills-content">{this.skill()}</div>
      </div>
    );
  }
}

export default Skills;
