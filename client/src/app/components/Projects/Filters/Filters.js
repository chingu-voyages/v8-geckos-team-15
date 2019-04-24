import React, { Component } from "react";
import styles from "./Filters.module.css";
import Dropdown from "./Dropdown/Dropdown";
import Button from "./Button/Button";

const teckStackValues = [
  "javascript",
  "react",
  "mongodb",
  "nodejs",
  "angularjs",
  "css3",
  "html5",
  "webpack"
];
const levelValues = [1, 2, 3];
const levelLabels = ["Beginner", "Intermediate", "Advanced"];

class Filters extends Component {
  handleTechStackChange = newOptions => {
    this.props.updateFilters({
      name: "stack",
      type: "multiselect",
      value: newOptions
    });
  };

  handleLevelChange = ([newOption]) => {
    this.props.updateFilters({
      name: "level",
      type: "single",
      value: newOption
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Dropdown
          text="Tech stack"
          options={teckStackValues}
          multiselect
          changeCallback={this.handleTechStackChange}
        />

        <Dropdown
          text="Level"
          options={levelValues}
          labels={levelLabels}
          changeCallback={this.handleLevelChange}
        />

        <Button icon="filter">More filters</Button>
      </div>
    );
  }
}

export default Filters;
