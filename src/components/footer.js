import React from "react";
// import { icons } from "react-icons";
import { AiOutlineGithub} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { GiHearts } from 'react-icons/gi';
import {AiFillTwitterCircle} from 'react-icons/ai'
const styles = {
  footer: {
    // position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#292b2c",
    color: "white",
    textAlign: "center",
    height: "65px",
    padding: "0px",
  },
  icon: {
    paddingRight: '20px',
    paddingLeft: '20px',
    },
  name: {
    color: '#d9534f',
    fontSize: '12px',
  }
};

function Footer() {
  return <footer style={styles.footer}>
    <a style={styles.icon} href="https://github.com/davidherring1998" target='blank'><AiOutlineGithub/></a>
    <a style={styles.icon} href="https://www.linkedin.com/in/david-herring-051bba241/" target='blank'><AiFillLinkedin/></a>
    <a style={styles.icon} href="https://stackoverflow.com/users/19333004/david-herring" target='blank'><BsStackOverflow/></a>
    <a style={styles.icon} href="https://twitter.com/DavidHe95802361" target='blank'><AiFillTwitterCircle/></a>
    <p style={styles.name}> &copy; Made with love...  <GiHearts/></p>
  </footer>;
}

export default Footer;
