import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Property from "./Property";
import Hero from "./Hero";
import Contact from "./Contact";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";

const ViewPortPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Hero />
        <Property />
        <Contact />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
