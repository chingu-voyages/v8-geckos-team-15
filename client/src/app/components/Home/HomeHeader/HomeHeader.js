import React from "react";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => (
  <ul className={styles.list}>
    <li className={styles.step}>1. Find or Create your project</li>
    <li className={styles.step}>2. Meet other coders</li>
    <li className={styles.step}>3. Start coding together!</li>
  </ul>
);

export default HomeHeader;
