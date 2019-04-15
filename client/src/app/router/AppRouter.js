import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects/Projects";
import { Header } from "../components/Header";

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/projects" component={Projects} />
        {/*
        To add more routes you can repeat the pattern as above. For example..
        <Route path="/footer" component={Footer} />
        */}
      </Switch>
    </div>
  </BrowserRouter>
);
