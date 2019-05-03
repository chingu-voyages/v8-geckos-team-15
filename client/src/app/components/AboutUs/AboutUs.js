import React from "react";
import "./about-us.css";

const AboutUs = () => (
  <div className="about-us">
    <div className="aboutBackground" />
    <div className="content">
      <h1 className="header1">We're here to help you code better</h1>
      <div className="header2">
        Welcome! <br /> We're a small group of developers who teamed up to create something we
        thought was needed: <br />
        <span>A place for developers find others to code with!</span>
        <br /> This started as our Chingu project in 2019 and we are proud to have made it happen!
      </div>
    </div>
    <div className="bottomContent">
      <h3>Join us today and start coding with others!</h3>
      <button className="create-project">Create a Project</button>
    </div>
  </div>
);

export default AboutUs;
