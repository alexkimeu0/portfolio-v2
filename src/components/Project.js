import React from "react";

const Project = ({ project }) => {
  const { name, image, description, url } = project;
  return (
    <div className="card">
      <a href={url}>
        <img src={image} alt={name} />
      </a>
      <h4 className="title">{name}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default Project;
