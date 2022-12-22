import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/container.css"

const styles = {
  name: {
    fontSize: ".4rem",
    color: "#d9534f",
  },
  tab: {
    paddingLeft: "5%",
  },
  bar: {
    height: '65px'
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="header">David Herring's Portfolio</div>




      <Navbar bg="dark" variant="dark" sticky="top" style={styles.bar}>
        <Container>
          <Navbar.Brand href="#" style={styles.name}>
            {/* {"David Herring"} */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              style={styles.tab}
              href="#Home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavTabs;
