import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Property from "./Property";
import Hero from "./Hero";
import Contact from "./Contact";
import {
  Container
} from "react-bootstrap";

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
