import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Property from "./Property";
import Hero from "./Hero";

const ViewPortPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightgrey;
  font-family: 'Oswald', sans-serif;
`;

const HalfHero = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: lightgrey;
  font-family: 'Comfortaa', cursive;
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
        <br />
      </ViewPortPage>

      <ViewPortPage></ViewPortPage>

      <Footer />
    </React.Fragment>
  );
};

export default App;
