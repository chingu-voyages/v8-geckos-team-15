import React, { Component } from "react";
import Filters from "./Filters/Filters";
import ProjectTile from "../ProjectTile/ProjectTile";
import "./projects.css";

/* Enter your required stack in the array above upto a maximum of 5
The following stack are avaiable and please make sure to get the correct 
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

const projects = [
  {
    title: "Coding for Fun",
    description: "This is a project about creating a website for coders",
    level: 1,
    stack: ["javascript", "react", "mongodb", "nodejs", "angularjs"],
    members: 3,
    image:
      "http://gundamevolve.com/wp-content/uploads/2018/08/gundam-build-fighters-wallpaper-800x340.png"
  },
  {
    title: "Coding Like a SuperHero",
    description:
      "This is a project on a 'heroic' scale. Only join if you have what it takes! We live in a world of amazing technologies and technologies are evolving even faster then we can think. Computers are the center of this evolution and an important part of the world we live in.",
    level: 3,
    stack: ["javascript", "css3", "html5", "webpack"],
    members: 5,
    image:
      "https://cnet4.cbsistatic.com/img/93e1i19Xfu42_Qu0B81j7s-p6s4=/1600x900/2019/03/14/c12c9e9d-e470-4020-a699-5c4be5509321/avengers-endgame-poster-og-social-crop.jpg"
  }
];

class Projects extends Component {
  state = {
    filters: {}
  };

  updateFilters = ({ name, type, value }) => {
    const isFilterEmpty = () => {
      switch (type) {
        case "single":
          return !value;
        case "multiselect":
          return !value.length;
        default:
          return true;
      }
    };

    if (!isFilterEmpty()) {
      this.setState({
        filters: { ...this.state.filters, [name]: { type, value } }
      });
    } else {
      // Delete the filter when there is no selected value
      const newFilters = { ...this.state.filters };
      delete newFilters[name];

      this.setState({
        filters: newFilters
      });
    }
  };

  applyFilters = currentProject => {
    const { filters } = this.state;
    let checkPassed = true;

    // Check if any filter excludes the currentProject
    for (let filterName of Object.keys(filters)) {
      const { type, value } = filters[filterName];

      switch (type) {
        case "single":
          checkPassed = currentProject[filterName] === value;
          break;

        case "multiselect":
          checkPassed = value.every(value => {
            return currentProject[filterName].includes(value);
          });
          break;

        default:
          return true;
      }

      // As soon as any filter criteria is not met, we stop other filter check to avoid override
      if (!checkPassed) {
        break;
      }
    }

    return checkPassed;
  };

  render() {
    return (
      <>
        <Filters updateFilters={this.updateFilters} />
        <div className="projects">
          {projects.filter(this.applyFilters).map(project => (
            <ProjectTile project={project} />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
