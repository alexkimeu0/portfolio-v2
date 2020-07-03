import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <i className={`fab fa-${skill} fa-5x`}></i>
    </div>
  );
};

export default Skill;
