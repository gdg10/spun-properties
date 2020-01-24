import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import "./app.css";

const Wrapper = styled.div`
  font-family: 'GeosansLight', sans-serif;
  font-weight:bold;
  font-size: 1.25em;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{fontSize: "1.5em"}}href="#hero">Spunproperties</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#bushkill">Properties</Nav.Link>
            <Nav.Link href="#bushkill">Agents</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
};

export default NavBar;
