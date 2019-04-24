import React, { Component } from "react";
import Button from "../Button/Button";
import classNames from "classnames";
import styles from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    areOptionsShown: false,
    selectedOptions: []
  };

  containerRef = React.createRef();

  componentWillUnmount() {
    this.removeEventListener();
  }

  removeEventListener = () => {
    document.body.removeEventListener(
      "click",
      this.detectClickOutside.bind(this)
    );
  };

  detectClickOutside = event => {
    if (
      this.state.areOptionsShown &&
      !this.containerRef.current.contains(event.target)
    ) {
      this.hideOptions();
    }
  };

  isSelected = option => {
    return this.state.selectedOptions.includes(option);
  };

  toggleShowOptions = () => {
    if (this.state.areOptionsShown) {
      this.hideOptions();
    } else {
      this.showOptions();
    }
  };

  hideOptions = () => {
    this.setState({
      areOptionsShown: false
    });
    this.removeEventListener();
  };

  showOptions = () => {
    this.setState({
      areOptionsShown: true
    });
    document.body.addEventListener("click", this.detectClickOutside.bind(this));
  };

  handleChange = newSelectedOption => event => {
    const { multiselect, changeCallback } = this.props;
    const { selectedOptions } = this.state;
    let newOptions = [];

    event.stopPropagation();

    if (this.isSelected(newSelectedOption)) {
      if (multiselect) {
        newOptions = selectedOptions.filter(
          option => newSelectedOption !== option
        );
      } else {
        newOptions = [];
      }
    } else {
      if (multiselect) {
        newOptions = [...selectedOptions, newSelectedOption];
      } else {
        newOptions = [newSelectedOption];
      }
    }

    this.setState(
      () => ({
        selectedOptions: newOptions
      }),
      () => {
        changeCallback(this.state.selectedOptions);
      }
    );
  };

  render() {
    const { text, options, labels, multiselect } = this.props;
    const { areOptionsShown } = this.state;

    return (
      <div className={styles.container} ref={this.containerRef}>
        <Button
          icon="chevron-down"
          onClick={this.toggleShowOptions}
          active={classNames({
            [styles.active]: areOptionsShown
          })}
        >
          {text}
        </Button>

        <form
          className={classNames(styles.options, {
            [styles.show]: areOptionsShown
          })}
        >
          {(labels || options).map((option, index) => (
            <div
              key={index}
              className={classNames(styles.item, {
                [styles.selected]: this.isSelected(options[index])
              })}
              onClickCapture={this.handleChange(options[index])}
            >
              {multiselect && (
                <input
                  type="checkbox"
                  value={option}
                  checked={this.isSelected(options[index])}
                />
              )}
              <label>{option}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default Dropdown;
