import React from "react";
import "./project-tile-level.css";

const maxLevel = 5;

const createFilled = num => {
  const elem = <div className="level-fill" />;
  const createArray = Array(num);
  createArray.fill(elem);

  return createArray;
};

const createNonFilled = num => {
  const elem = <div className="level-no-fill" />;
  const createArray = Array(num);
  createArray.fill(elem);

  return createArray;
};

const ProjectTileLevel = ({ level }) => {
  const adjustedLevel = level < 6 ? level : 5;
  const noFill = createNonFilled(maxLevel - adjustedLevel);
  const filled = createFilled(adjustedLevel);

  return (
    <div className="level-container">
      {filled}
      {noFill}
    </div>
  );
};

export default ProjectTileLevel;
