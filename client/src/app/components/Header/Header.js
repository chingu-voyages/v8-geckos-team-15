import React from "react";
import HamburgerMenu from "./MobileMenu/Hamburger";

import "./header.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputBg: "grey"
    };
  }

  render() {
    return (
      <div
        className={`${
          this.state.inputBg === "grey" ? "searchBarGrey" : "searchBarWhite"
        } input-container`}
      >
        <input
          onFocus={() => {
            this.setState({ inputBg: "white" });
          }}
          onBlur={() => {
            this.setState({ inputBg: "grey" });
          }}
          placeholder="Search for a project"
          className={`${
            this.state.inputBg === "grey" ? "searchBarGrey" : "searchBarWhite"
          }`}
        />
        <button>
          <i class="fas fa-search" />
        </button>
      </div>
    );
  }
}

const Nav = () => {
  return (
    <div className="nav-container">
      <Input />
      <div>
        <ul>
          <li>Projects</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

const Logo = () => (
  <div className="logo">
    <h1>
      ProjectCode
      <i className="fas fa-code logo" />
    </h1>
  </div>
);

export const Header = () => (
  <div className="header">
    <HamburgerMenu />
    <Logo />
    <Nav />
    <div id="space-balancer" />
  </div>
);
