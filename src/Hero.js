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
    <a name="hero">
      <Row>
        <Col sm={12}>
          <HeroPic alt="hero" src={heroImg} />
        </Col>
      </Row>
    </a>
  );
};

export default Hero;
