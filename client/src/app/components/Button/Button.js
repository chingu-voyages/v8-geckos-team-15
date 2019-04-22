import React from "react";
import "./buttons.css";
const classNames = require("classnames");

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countActive: 0, isMax: false };
  }

  checkMax(num) {
    this.setState(
      prevState => ({ countActive: prevState.countActive + num }),
      () => {
        if (this.state.countActive === this.props.maxAllowed) {
          this.setState({ isMax: true });
        } else {
          this.setState({ isMax: false });
        }
      }
    );
  }

  render() {
    return (
      <div className="buttons-container">
        {this.props.buttons.map((button, index) => (
          <Button
            key={index}
            name={button}
            checkMax={num => this.checkMax(num)}
            isMax={this.state.isMax}
            maxAllowed={this.props.maxAllowed}
            isActive={this.state.isActive}
            resetOtherButtons={() => this.resetOtherButtons()}
          />
        ))}
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleClick() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
      this.props.checkMax(-1);
    } else if (!this.state.isActive && this.props.isMax !== true) {
      this.setState({ isActive: !this.state.isActive });
      this.props.checkMax(1);
    }
  }

  render() {
    return (
      <div
        onClick={() => this.handleClick(this.handleClick)}
        className={classNames({
          customButton: true,
          customButtonActive: this.state.isActive
        })}
      >
        {this.props.name}
      </div>
    );
  }
}

export default ButtonContainer;
