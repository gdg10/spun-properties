import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Comfortaa", cursive;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#hero">Spun Properties</Navbar.Brand>
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
