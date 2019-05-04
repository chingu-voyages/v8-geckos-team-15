import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Header } from "../components/Header/Header";
import Form from "../components/CreateProject/Form";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/projects" component={Projects} />
        <Route path="/create-project" component={Form} />
        <Route path="/about-us" component={AboutUs} />
        {/*
        To add more routes you can repeat the pattern as above. For example..
        <Route path="/footer" component={Footer} />
        */}
      </Switch>
    </div>
  </BrowserRouter>
);
