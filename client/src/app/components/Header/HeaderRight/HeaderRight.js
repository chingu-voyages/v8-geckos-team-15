import React from "react";
import classNames from "classnames";
import styles from "./HeaderRight.module.css";

const HeaderRight = ({ direction }) => (
  <div className={styles.container}>
    <ul className={classNames(styles.list, styles[direction])}>
      <li>Projects</li>
      <li>About Us</li>
    </ul>
  </div>
);

export default HeaderRight;
