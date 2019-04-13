import React from "react";
import "./project-tile.css";
import ProjectTileLevel from "../projectTileLevel/ProjectTileLevel";
import Members from "../members/Members";
import Stack from "../projectTileStack/ProjectTileStack";

const formatDescription = description =>
  description.length > 80 ? description.substring(0, 80) + "..." : description;

const ProjectTile = ({
  projectTitle,
  projectDescription,
  projectLevel,
  projectLanguages,
  projectImage,
  projectMembers
}) => {
  return (
    <>
      <div className="project-container">
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${projectImage})`
          }}
        />
        <div className="project-title">{projectTitle}</div>
        <div className="project-description">
          {formatDescription(projectDescription)}
        </div>
        <div className="project-footer">
          <div className="stack-container">
            <Stack languages={projectLanguages} />
          </div>
          <div className="levelAndMembers">
            <div className="level">
              <ProjectTileLevel level={projectLevel} />
            </div>
            <Members members={projectMembers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
