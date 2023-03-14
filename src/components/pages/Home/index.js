import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="bg ">
      <div className="home mx-auto text-center">
        <div className=""><h1>Welcome to my Portfolio!</h1></div>
        <p>My name is Heil Park!</p>
        <button><a href="about">View my portfolio!</a></button>
        <div><strong>OR</strong></div>
        <button>
          <a href="../../CV.pdf" download="CV.pdf">Download my CV!</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
