import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("/projects")
      .then(data => {
        if (data.status === 200) {
          return data.json();
        } else {
          throw Error(data.statusText);
        }
      })
      .then(data => {
        // TODO: Use this data
        console.log(data);
      })
      .catch(error => {
        console.warn("Error while getting the projects:", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
