import React from "react";
import "../styles/resume.css";
// import birds from '../assets/birds.jpg'
import { BsCloudDownload } from "react-icons/bs";
import {TiHtml5} from "react-icons/ti"
import {IoLogoCss3} from "react-icons/io"
import {IoLogoJavascript} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
import {SiNodedotjs} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import{SiMongodb} from 'react-icons/si'
import {BsServer} from 'react-icons/bs'

function Resume() {
  return (
    <div className="boxContainer" id="newContainer">
      <h2 className="typed-out">My Resume</h2>
      <section>
        <div className="ContainerOne">
        <h3>Front-End: </h3>
        <ul>
          <li>HTML <TiHtml5/></li>
          <li>CSS <IoLogoCss3/></li>
          <li>JavaScript <IoLogoJavascript/></li>
          <li>React <DiReact/> </li>
        </ul>

        </div>
        <div className="containerTwo">
        <h3>Back-End: </h3>
        <ul>
          <li>Express <BsServer/> </li>
          <li>Node <SiNodedotjs/></li>
          <li>MySQL <SiMysql/></li>
          <li>MongoDB <SiMongodb/> </li>
        </ul>

        {/* <img src={birds} alt="bird" className="birds" /> */}
        <h4 className="download"> 
          Resume
          <a
            href="https://drive.google.com/file/d/1P9RGQVR6l1TyJ6Pl7qbxMaLsQIABwpMy/view?usp=sharing"
            target="blank"
          >
            <BsCloudDownload />
          </a>
        </h4>
        </div>
      </section>

    </div>
  );
}

export default Resume;
