import React from "react";

import Skill from "./Skill";

import "./Skills.css";

class Skills extends React.Component {
  state = {
    skills: [
      "html5",
      "js",
      "laravel",
      "css3",
      "react",
      "python",
      "bootstrap",
      "node",
      "git",
      "db",
      "redux",
      "express",
      "apis",
    ],
  };

  skill = () => {
    const { skills } = this.state;

    return skills.map((skill) => {
      return <Skill skill={skill} />;
    });
  };
  render() {
    return <div className="skills-content">{this.skill()}</div>;
  }
}

export default Skills;
