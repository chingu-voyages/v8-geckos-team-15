import React from "react";
import "./options.css";
const classNames = require("classnames");

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: this.props.isActive };
  }

  componentDidMount() {
    if (this.props.isDefault === this.props.name) {
      this.setState({ isActive: true });
      this.props.checkMax(1, this.props.name);
    }
  }

  componentWillUpdate(props) {
    if (props.reset !== this.props.reset) {
      if (this.props.reset) {
        this.setState({ isActive: false });
      }
    }
  }

  handleClick() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
      this.props.checkMax(-1, this.props.name);
    } else if (!this.state.isActive && this.props.isMax !== true) {
      this.setState({ isActive: !this.state.isActive });
      this.props.checkMax(1, this.props.name);
    }
    this.props.onUpdateSelection(this.props.name);
  }

  render() {
    const { isActive } = this.state;
    return (
      <div
        onClick={() => this.handleClick()}
        className={classNames({
          customButton: true,
          customButtonActive: isActive
        })}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Option;
