import React from "react";
import OptionsContainer from "./Options/OptionsContainer";
import "./styles.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleValue: "",
      descriptionValue: "",
      languages: [],
      complexity: "",
      members: 0,
      reset: false
    };
  }

  onUpdateSelection(buttonTitle, type) {
    if (type === "language") {
      this.setState(prevState => ({
        languages: [...prevState.languages, buttonTitle]
      }));
    } else if (type === "complexity") {
      this.setState({ complexity: buttonTitle });
    } else if (type === "members") {
      this.setState({ members: buttonTitle });
    }
  }

  onChangeInput({ target }) {
    target.name === "project-title"
      ? this.setState({ titleValue: target.value })
      : this.setState({ descriptionValue: target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState(
      () => ({
        title: "",
        description: "",
        languages: [],
        complexity: "",
        members: 0,
        reset: true
      }),
      () => {
        this.setState({ reset: false });
      }
    );
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2>Create a Project</h2>
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "#eee"
          }}
        />
        <form>
          <div className="title-input-wrapper form-item">
            <div className="title">
              Project Title
              <span> What's your project going to be called?</span>
            </div>
            <input
              value={this.state.title}
              onChange={e => this.onChangeInput(e)}
              type="text"
              name="project-title"
            />
          </div>
          <div className="description-input-wrapper form-item">
            <div className="title">
              Project Description <span> What's your project all about?</span>
            </div>
            <textarea
              name="project-description"
              value={this.state.description}
              onChange={e => this.onChangeInput(e)}
              maxLength={1000}
            />
          </div>
          <div className="languages-input-wrapper form-item">
            <div className="title">
              Languages <span> Pick up to 5</span>
            </div>
            <OptionsContainer
              options={[
                "React",
                "React Native",
                "Angular",
                "NodeJS",
                "MongoDB",
                "VueJS",
                "HTML5",
                "CSS3",
                "Sass"
              ]}
              maxAllowed={5}
              isDefault="React"
              reset={this.state.reset}
              onUpdateSelection={buttonTitle =>
                this.onUpdateSelection(buttonTitle, "language")
              }
            />
          </div>
          <div className="complexity-input-wrapper form-item">
            <div className="title">
              Complexity <span> How hard will your project be?</span>
            </div>
            <OptionsContainer
              maxAllowed={1}
              options={["Beginner", "Intermediate", "Advance"]}
              isDefault="Beginner"
              reset={this.state.reset}
              onUpdateSelection={buttonTitle =>
                this.onUpdateSelection(buttonTitle, "complexity")
              }
            />
          </div>
          <div className="members-input-wrapper form-item">
            <div className="title">
              Members{" "}
              <span> How many people do you think the project will need?</span>
            </div>
            <OptionsContainer
              maxAllowed={1}
              options={["1", "2", "3", "4", "5"]}
              isDefault="1"
              reset={this.state.reset}
              onUpdateSelection={buttonTitle =>
                this.onUpdateSelection(buttonTitle, "members")
              }
            />
          </div>
          <button onClick={e => this.onSubmit(e)} type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
