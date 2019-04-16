import React, { Component } from "react";
import { AppRouter } from "./app/router/AppRouter";
import "./App.css";
import "./global-style.css";

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
    return <AppRouter />;
  }
}

export default App;
