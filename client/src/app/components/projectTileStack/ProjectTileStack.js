import React from "react";

import "./project-tile-stack.css";

const getIcons = language => {
  const elem = <i className={`devicon-${language}-plain`} />;
  return elem;
};

const Stack = ({ languages }) => {
  return (
    <div className="stack">
      {languages.map((language, index) => {
        return getIcons(language.toLowerCase());
      })}
    </div>
  );
};

export default Stack;
