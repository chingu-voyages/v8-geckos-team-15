import React from "react";
import "./project-tile.css";
import ProjectTileLevel from "../projectTileLevel/ProjectTileLevel";
import Members from "../members/Members";
import Stack from "../projectTileStack/ProjectTileStack";

const formatDescription = description =>
  description.length > 80 ? description.substring(0, 100) + "..." : description;

const ProjectTile = ({
  title,
  description,
  level,
  languages,
  image,
  members
}) => {
  return (
    <div
      onClick={() => alert(title + " | " + description)}
      className="project-container"
    >
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="project-title">{title}</div>
      <div className="project-description">
        {formatDescription(description)}
      </div>
      <div className="project-footer">
        <div className="stack-container">
          <Stack languages={languages} />
        </div>
        <div className="levelAndMembers">
          <div className="level">
            <ProjectTileLevel level={level} />
          </div>
          <Members members={members} />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
