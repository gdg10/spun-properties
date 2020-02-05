import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import "./app.css";
import CouchIcon from "./CouchIcon.png";

const Wrapper = styled.div`
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 25px;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Navbar
        bg="light"
        expand="lg"
        min-height="0"
        style={{ boxShadow: "0px 3px 15px rgba(0,0,0,0.1)" }}
      >
        <Navbar.Brand style={{ fontSize: "1.5em" }} href="/">
          <img
            alt=""
            src={CouchIcon}
            width="67"
            height="26"
            className="d-inline-block align-middle"
          />{" "}
          Spunproperties
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#properties">Featured</Nav.Link>
            <Nav.Link href="/#active">Active</Nav.Link>
            <Nav.Link href="/#archived">Archived</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
};

export default NavBar;
