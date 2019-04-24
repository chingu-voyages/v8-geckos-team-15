import React from "react";
import HamburgerMenu from "./MobileMenu/Hamburger";
import SearchBar from "./SearchBar/SearchBar";
import HeaderRight from "./HeaderRight/HeaderRight";

import styles from "./header.module.css";

export const Header = () => (
  <div className={styles.header}>
    <HamburgerMenu />

    <div className={styles.logo}>
      <h1 className={styles.logoTitle}>ProjectCode</h1>
      <i className="fas fa-code logo" />
    </div>

    <div className={styles.navContainer}>
      <SearchBar />
      <HeaderRight direction="horizontal" />
    </div>
  </div>
);