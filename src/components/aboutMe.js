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
          Hello! My name is David Herring and I am a Full-Stack Web-developer
          based out of Middle Tennessee! I am currently enrolled in Vanderbilt's
          coding boot-camp and I am currently seeking a career in the web
          development field! On this application you can find projects I have worked
          on in the portfolio section, you can view my skills and download my resume in 
          the resume section, and you can contact me in the contact section. 
        </p>
      </div>
    </div>
  );
}

export default Section;
