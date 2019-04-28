import React from "react";
import "./options.css";
const classNames = require("classnames");

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: this.props.isActive };
  }

  componentDidMount() {
    const { isDefault, name, checkMax } = this.props;
    if (isDefault === name) {
      this.setState({ isActive: true });
      checkMax(1, name);
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
    const { name, checkMax, isMax } = this.props;
    const { isActive } = this.state;

    if (this.state.isActive) {
      this.setState({ isActive: false });
      checkMax(-1, this.props.name);
    } else if (!isActive && isMax !== true) {
      this.setState({ isActive: !isActive });
      checkMax(1, name);
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
