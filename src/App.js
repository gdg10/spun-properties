import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Property from "./Property";
import Hero from "./Hero";
import checker from "./checkerboard-cross.png";

const ViewPortPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const HalfHero = styled.div`
  margin: 1vw;
  height: 100px;
  width: 98vw;
  background-color: lightgrey;
  font-family: "Comfortaa", cursive;
  background-image: url(${checker});
`;

const App = () => {
  return (
    <React.Fragment>
      <NavBar />

      <HalfHero>
          <Hero />
      </HalfHero>

      <ViewPortPage>
        <Property />
      </ViewPortPage>

      <ViewPortPage />

      <Footer />
    </React.Fragment>
  );
};

export default App;
