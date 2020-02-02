import React from "react";
import { Row, Col } from "react-bootstrap";
import heroImg from "./SpunPropertiesHeader.jpg";
import styled from "styled-components";

const HeroPic = styled.img`
  width: 100%;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const Hero = () => {
  return (
    <a href='#about'>
      <Row>
        <Col sm={12}>
          <HeroPic alt="hero" src={heroImg} style={{boxShadow: "0px 3px 15px rgba(0,0,0,0.3)"}}/>
        </Col>
      </Row>
    </a>
  );
};

export default Hero;
