import React from "react";

import "./project-tile-stack.css";

const getClassName = language => {
  return `devicon-${language.toLowerCase()}-plain`;
};

const Stack = ({ stack }) => {
  return (
    <div className="stack">
      {stack.map((language, index) => (
        <i className={getClassName(language)} key={index} />
      ))}
    </div>
  );
};

export default Stack;
