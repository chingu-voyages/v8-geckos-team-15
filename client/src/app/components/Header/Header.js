import React from "react";
import HamburgerMenu from "./MobileMenu/Hamburger";
import SearchBar from "./SearchBar/SearchBar";

import "./header.css";

export const Header = () => (
  <div className="header">
    <HamburgerMenu />

    <div className="logo">
      <h1>
        ProjectCode
        <i className="fas fa-code logo" />
      </h1>
    </div>

    <div className="nav-container">
      <SearchBar />
      <ul>
        <li>Projects</li>
        <li>About Us</li>
      </ul>
    </div>
  </div>
);
