import React from "react";
import OptionsContainer from "./Options/OptionsContainer";
import "./styles.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      stack: ["React"],
      level: "Beginner",
      requiredTeamSize: "1",
      reset: false
    };
  }

  onUpdateSelection(buttonTitle, type) {
    if (type === "stack") {
      this.setState(prevState => ({
        stack: [...prevState.stack, buttonTitle]
      }));
    } else if (type === "level") {
      this.setState({ level: buttonTitle });
    } else if (type === "requiredTeamSize") {
      this.setState({ requiredTeamSize: buttonTitle });
    }
  }

  onChangeInput({ target: { name, value } }) {
    name === "project-title"
      ? this.setState({ name: value })
      : this.setState({ description: value });
  }

  onSubmit(e) {
    e.preventDefault();

    fetch("/api/projects/createProject", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(jsonRes => {
        if (jsonRes.success) {
          alert("Project created successfuly!");
        } else {
          throw Error(jsonRes.error);
        }
      })
      .catch(error => {
        console.log(error.message);
      });

    this.setState(
      () => ({
        description: "",
        name: "",
        stack: [],
        level: "",
        requiredTeamSize: 0,
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
              value={this.state.name}
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
              defaultSelection={this.state.stack[0]}
              reset={this.state.reset}
              onUpdateSelection={buttonTitle => this.onUpdateSelection(buttonTitle, "stack")}
            />
          </div>
          <div className="complexity-input-wrapper form-item">
            <div className="title">
              Complexity <span> How hard will your project be?</span>
            </div>
            <OptionsContainer
              maxAllowed={1}
              options={["Beginner", "Intermediate", "Advanced"]}
              defaultSelection={this.state.level}
              reset={this.state.reset}
              onUpdateSelection={buttonTitle => this.onUpdateSelection(buttonTitle, "level")}
            />
          </div>
          <div className="members-input-wrapper form-item">
            <div className="title">
              Members <span> How many people do you think the project will need?</span>
            </div>
            <OptionsContainer
              maxAllowed={1}
              options={["1", "2", "3", "4", "5"]}
              defaultSelection={this.state.requiredTeamSize}
              reset={this.state.reset}
              onUpdateSelection={buttonTitle =>
                this.onUpdateSelection(buttonTitle, "requiredTeamSize")
              }
            />
          </div>
          <div className="create-button">
            <button onClick={e => this.onSubmit(e)} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
