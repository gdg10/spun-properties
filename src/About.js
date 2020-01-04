import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div``;

const InfoPoint = styled.p`
  margin-top: 5px;
`;

const About = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
        <a name="about">
          <h4>About:</h4>
        </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <InfoPoint>
            We work with Real Estate agents & home owners to make houses ready
            for quick sale. It’s free.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <InfoPoint>
            When an agent uses spundesign to make the house sell ready, we put
            pictures and the link to the agent on spunproperties for free. Extra
            marketing.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <InfoPoint>
            Our spun team can paint, change fixtures, faucets, flooring or any
            quick remodeling needed then home stage it for a quick high value
            sell.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <InfoPoint>
            You’ll know a spun Property when you see our signature sign next the
            Real Estate lawn sign.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <InfoPoint>
            When buyers drive by, they know the house will be beautiful inside.
          </InfoPoint>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default About;
