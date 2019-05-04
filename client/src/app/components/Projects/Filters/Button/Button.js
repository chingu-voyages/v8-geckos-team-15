import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, icon, active, ...rest }) => (
  <button
    className={classNames(styles.button, { [styles.active]: active })}
    {...rest}
  >
    {children}
    <i className={`fa fa-${icon}`} />
  </button>
);

export default Button;
