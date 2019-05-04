import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <input className={styles.input} placeholder="Search for a project" />
        <button className={styles.button}>
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
