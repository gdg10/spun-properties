import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import spacer from "./heroPic.JPG";

const InfoPoint = styled.p`
  margin: 0px;
  color: dimgray;
  text-align: justify;
  padding: 0px 5px 40px 5px;
`;

const AccentPoint = styled.h3`
  margin: 0px;
  text-align: center;
  padding: 20px 0px 0px 0px;
`;

const SpacerImage = styled.p`
  text-align: center;
  margin: 10px 0px 10px 0px;
  padding: 0px;
`;

const About = () => {
  return (
    <a name="about">
      <Row>
        <Col lg={4} md={6} sm={12}>
          <AccentPoint>Fast Sales</AccentPoint>
          <SpacerImage>■</SpacerImage>
          <InfoPoint>
            We work with real estate agents & home owners to make houses ready
            for quick sale. Our spun team can paint, change fixtures, faucets,
            flooring or any quick remodeling needed then home stage it for a
            quick high value sell.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <AccentPoint>Free Marketing</AccentPoint>
          <SpacerImage>■</SpacerImage>
          <InfoPoint>
            When an agent uses spundesign to make the house sell ready, we put
            pictures and the link to the agent on spunproperties for free. Extra
            marketing!
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <AccentPoint>Dependable Name</AccentPoint>
          <SpacerImage>■</SpacerImage>
          <InfoPoint>
            You’ll know a spun Property when you see our signature sign next the
            Real Estate lawn sign. When buyers drive by, they know the house
            will be beautiful inside.
          </InfoPoint>
        </Col>
      </Row>
    </a>
  );
};

export default About;
