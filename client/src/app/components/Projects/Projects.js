import React, { Component } from "react";
import Filters from "./Filters/Filters";
import ProjectTile from "../ProjectTile/ProjectTile";
import "./projects.css";

class Projects extends Component {
  state = {
    filters: {},
    projects: []
  };

  componentDidMount() {
    fetch("/api/projects")
      .then(response => response.json())
      .then(jsonRes => {
        if (jsonRes.success) {
          this.setState({ projects: jsonRes.projects });
        } else {
          throw Error(jsonRes.error);
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  }

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
      // Delete the filter when it is empty
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
    const { projects } = this.state;

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
