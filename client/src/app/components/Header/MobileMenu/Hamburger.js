import React from "react";
import "./mobile-menu.css";

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleTransition = this.handleTransition.bind(this);
    this.state = {
      open: false,
      bar1: undefined,
      bar2: undefined,
      bar3: undefined,
      hide: true
    };
  }

  handleTransition() {
    if (!this.state.open) {
      this.setState(() => {
        return {
          open: true,
          bar1: "bar-1-animate",
          bar2: "bar-2-animate",
          bar3: "bar-3-animate",
          hide: false
        };
      });
    } else {
      this.setState(() => {
        return {
          open: false,
          bar1: "bar-1-animate-rev",
          bar2: "bar-2-animate-rev",
          bar3: "bar-3-animate-rev",
          hide: true
        };
      });
    }
  }

  render() {
    return (
      <Nav
        stateData={this.state}
        handleTransition={this.handleTransition}
        hide={this.state.hide}
      />
    );
  }
}

const Nav = ({ stateData, handleTransition, hide }) => (
  <div>
    <nav onClick={handleTransition}>
      <div id="menu">
        <div className={`bar ${stateData.bar1}`} id="bar-1" />
        <div className={`bar ${stateData.bar2}`} id="bar-2" />
        <div className={`bar ${stateData.bar3}`} id="bar-3" />
      </div>
    </nav>
    <div class={hide ? "side-menu side-menu-hide" : "side-menu"}>
      <div id="side-menu-container">
        <ul>
          <li>Projects</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </div>
);

export default HamburgerMenu;
