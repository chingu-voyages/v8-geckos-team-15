import React from "react";

import "./projects.css";
import ProjectTile from "../ProjectTile/ProjectTile";

const projects = [
  {
    title: "Coding for Fun",
    description: "This is a project about creating a website for coders",
    level: 2,
    languages: ["javascript", "react", "mongodb", "nodejs", "angularjs"],
    members: 3,
    image:
      "http://gundamevolve.com/wp-content/uploads/2018/08/gundam-build-fighters-wallpaper-800x340.png"
  },
  {
    title: "Coding Like a SuperHero",
    description:
      "This is a project on a 'heroic' scale. Only join if you have what it takes! We live in a world of amazing technologies and technologies are evolving even faster then we can think. Computers are the center of this evolution and an important part of the world we live in.",
    level: 5,
    languages: ["javascript", "css3", "html5", "webpack"],
    members: 5,
    image:
      "https://cnet4.cbsistatic.com/img/93e1i19Xfu42_Qu0B81j7s-p6s4=/1600x900/2019/03/14/c12c9e9d-e470-4020-a699-5c4be5509321/avengers-endgame-poster-og-social-crop.jpg"
  }
];

/* Enter your required languages in the array above upto a maximum of 5
The following languages are avaiable and please make sure to get the correct 
spelling -

javascript
react
angularjs
Mongodb
NodeJS
bootstrap
css3
html5
less
sass
webpack */

export function Projects() {
  return (
    <div className="projects">
      {projects.map(
        ({ title, description, level, languages, image, members }) => {
          return (
            <ProjectTile
              title={title}
              description={description}
              level={level}
              languages={languages}
              image={image}
              members={members}
            />
          );
        }
      )}
    </div>
  );
}
