import React from "react";

const Skill = ({ skill }) => {
  const { name, description } = skill;
  return (
    <div className="card">
      <i className={`fab fa-${name} fa-5x`}></i>
      <h4 className="description">{description}</h4>
    </div>
  );
};

export default Skill;
