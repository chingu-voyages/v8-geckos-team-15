import React from "react";
import classNames from "classnames";
import HeaderRight from "../HeaderRight/HeaderRight";
import styles from "./Hamburger.module.css";

class HamburgerMenu extends React.Component {
  state = {
    open: false
  };

  handleTransition = () => {
    if (!this.state.open) {
      this.setState(() => {
        return {
          open: true
        };
      });
    } else {
      this.setState(() => {
        return {
          open: false
        };
      });
    }
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <nav className={styles.nav} onClick={this.handleTransition}>
          <div className={classNames(styles.menu, { [styles.open]: open })}>
            <div />
            <div />
            <div />
          </div>
        </nav>
        <div className={classNames(styles.sideMenu, { [styles.hide]: !open })}>
          <HeaderRight direction="vertical" />
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
