import React from "react";
import Option from "./Option";

class OptionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countActive: 0, isMax: false };
  }

  componentWillUpdate({ reset }) {
    if (reset !== this.props.reset) {
      if (!this.props.reset) {
        this.setState(() => ({ isMax: false, countActive: 0 }));
      }
    }
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
    const { options, onUpdateSelection, defaultSelection, reset } = this.props;
    const { isMax } = this.state;
    return (
      <div className="buttons-container">
        {options.map((button, index) => (
          <Option
            key={index}
            name={button}
            checkMax={num => this.checkMax(num)}
            isMax={isMax}
            onUpdateSelection={onUpdateSelection}
            defaultSelection={defaultSelection || ""}
            reset={reset}
          />
        ))}
      </div>
    );
  }
}

export default OptionsContainer;
