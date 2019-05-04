import React from "react";
import "./project-tile.css";
import ProjectTileLevel from "./projectTileLevel/ProjectTileLevel";
import Members from "./members/Members";
import Stack from "./projectTileStack/ProjectTileStack";

const formatDescription = description =>
  description.length > 80 ? description.substring(0, 100) + "..." : description;

const ProjectTile = props => {
  const { name, description, level, stack, requiredTeamSize } = props.project;
  const generateRandomImage = () => {
    const images = [
      "http://gundamevolve.com/wp-content/uploads/2018/08/gundam-build-fighters-wallpaper-800x340.png",
      "https://cnet4.cbsistatic.com/img/93e1i19Xfu42_Qu0B81j7s-p6s4=/1600x900/2019/03/14/c12c9e9d-e470-4020-a699-5c4be5509321/avengers-endgame-poster-og-social-crop.jpg",
      "https://www.sciencenewsforstudents.org/sites/default/files/2017/04/main/articles/860_main_robot_ethics.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqAakMhE-U_ikIlk90Xxw34VDWl2tMHqUJsyekDytH72x4OuIkw"
    ];
    const randomNumber = Math.floor(Math.random() * 4 + 1);
    return images[randomNumber - 1];
  };
  return (
    <div onClick={() => alert(name + " | " + description)} className="project-container">
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${generateRandomImage()})`
        }}
      />
      <div className="project-title">{name}</div>
      <div className="project-description">{formatDescription(description)}</div>
      <div className="project-footer">
        <div className="stack-container">
          <Stack stack={stack} />
        </div>
        <div className="levelAndMembers">
          <div className="level">
            <ProjectTileLevel level={level} />
          </div>
          <Members members={+requiredTeamSize} />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
