import React from "react";
import "../styles/container.css";
import "../styles/portfolio.css";
import Jokes from "../assets/DadJokes.jpeg";
import Password from "../assets/password.jpeg";
import Planner from "../assets/planner.jpeg";
import Quiz from "../assets/quiz.jpeg";
import E from "../assets/e-commerce.jpeg";
import Weather from "../assets/weather.jpeg";
import Aura from '../assets/weather.jpeg';

function Portfolio() {
  return (
    <div className="boxContainer" id="ImgContainer">
      <h2 id="header">MY PORTFOLIO</h2>

      <section>
      <a href="https://dadjokesgalore.herokuapp.com/" target='blank'>
          <img src={Jokes} alt="Dad Jokes app"></img>
        </a>
        <a href="" target='blank'>
          <img src={Aura} alt="Dad Jokes app"></img>
        </a>

        <a href="https://davidherring1998.github.io/Weather-Dashboard/" target='blank'>
          <img src={Weather} alt="Weather app"></img>
        </a>

        <a href="https://github.com/davidherring1998/E-commerce" target='blank'>
          <img src={E} alt="E-Commerce app"></img>
        </a>

        <a href="https://davidherring1998.github.io/Javascript-Quiz/" target='blank'>
          <img src={Quiz} alt="Javascript Quiz app"></img>
        </a>

        <a href="https://davidherring1998.github.io/Daily-Planner/" target='blank'>
          <img src={Planner} alt="Daily Planner app"></img>
        </a>

        <a href="https://davidherring1998.github.io/passwordgenerator/" target='blank'>
          <img src={Password} alt="Password Generator app"></img>
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
