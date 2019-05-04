import React from "react";
import Projects from "../Projects/Projects";
import HomeHeader from "./HomeHeader/HomeHeader";
import styles from "./Home.module.css";

export const Home = () => (
  <div>
    <h1 className={styles.title}>Find projects to collaborate on</h1>
    <h2 className={styles.subTitle}>or create your own!</h2>

    <HomeHeader />
    <Projects />
  </div>
);
