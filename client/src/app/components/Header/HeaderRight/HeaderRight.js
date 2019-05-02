import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./HeaderRight.module.css";

const HeaderRight = ({ direction }) => (
  <div className={styles.container}>
    <ul className={classNames(styles.list, styles[direction])}>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li className={styles.ctaButton}>
        <Link to="/create-project">Create Project</Link>
      </li>
    </ul>
  </div>
);

export default HeaderRight;
