import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about mx-auto row">
      <h1>About Me</h1>
      <div className="col-6">
        <p className="text">
          I'm a skilled Full Stack software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, MongoDB and Express.js. 
          I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. 
          Let's work together to bring your ideas to life!
        </p>
      </div>
      <div className="pimg col-6"></div>   
    </div>
  );
}

export default About;
