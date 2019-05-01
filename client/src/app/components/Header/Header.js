import React from "react";
import HamburgerMenu from "./MobileMenu/Hamburger";
import SearchBar from "./SearchBar/SearchBar";
import HeaderRight from "./HeaderRight/HeaderRight";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

export const Header = () => (
  <div className={styles.header}>
    <HamburgerMenu />

    <Link className={styles.logo} to="/">
      <h1 className={styles.logoTitle}>ProjectCode</h1>
      <i className="fas fa-code logo" />
    </Link>

    <div className={styles.navContainer}>
      <SearchBar />
      <HeaderRight direction="horizontal" />
    </div>
  </div>
);
