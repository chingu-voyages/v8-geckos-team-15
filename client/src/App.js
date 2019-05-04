import React, { Component } from "react";
import { AppRouter } from "./app/router/AppRouter";
import "./App.css";
import "./global-style.css";

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
