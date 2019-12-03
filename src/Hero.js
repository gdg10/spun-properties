import React from "react";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import checker from "./checkerboard-cross.png";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: "Comfortaa", cursive;
  line-height: 100px;
  font-weight: bold;
`;

const HalfHero = styled.div`
  font-family: "Comfortaa", cursive;
  background-image: url(${checker});
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Hero = () => {
  return (
    <HalfHero>
      <Row>
        <Col>
          <Title>Spun Properties</Title>
        </Col>
      </Row>
    </HalfHero>
  );
};

export default Hero;
