import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Property from "./Property";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import { Container } from "react-bootstrap";
import "./app.css";


const MasterWrapper = styled.div`
  background-color: white;
`;

const conSty = {
  backgroundColor: "white"
}

const App = () => {
  return (
    <MasterWrapper>
      <NavBar />
      <Container style={conSty} >
        <Hero />
        <About />
        <Property />
        <Contact />
      </Container>
      <Footer />
    </MasterWrapper>
  );
};

export default App;
