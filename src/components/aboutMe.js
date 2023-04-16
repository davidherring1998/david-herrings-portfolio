import React from "react";
import Me from "../assets/profilePicture.JPG";
import "../styles/aboutMe.css";
import "../styles/container.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Section() {
  return (
    <div>
      <div className="boxContainer">
        <h2>ABOUT ME</h2>
        <img src={Me} alt="Me"></img>
        <p>
          Hello! My name is David Herring and I discovered my passion for
          information technology early on through many years in the music
          production industry. After operating a recording studio through my
          early 20s, I have found that I thrive in goal-driven,
          problem-solving-oriented work. This realization led me down an
          information technology path consisting of front-end and back-end web
          development along with  many customer service skills. I recently graduated
          from a Vanderbilt coding boot camp and am now currently in the process
          of enrolling in a college for computer science.
        </p>
      </div>
    </div>
  );
}

export default Section;
