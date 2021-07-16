import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, NavItem, Container, Nav } from "react-bootstrap";
import logo from "../photos/logo.png";

const NavBar = () => {
  return (
    // <div className="navbar">
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} style={{ height: "50px" }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavItem>
            {" "}
            <Link to="/" className="nav-link">
              Homepage
            </Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link to="/Completed" className="nav-link">
              Completed Tasks
            </Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link to="/About" className="nav-link">
              About Us
            </Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link to="/ContactUs" className="nav-link">
              Contact Us
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    // </div>
  );
};
export default NavBar;
