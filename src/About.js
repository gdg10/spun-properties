import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div``;

const About = () => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <h4>About:</h4>
          <p>
            For all inquires, About Eddie Grube:{" "}
            <a href="tel:908-329-5619">908-329-5619</a>
          </p>
        </Col>
        <Col>
          <h4>About:</h4>
          <p>
            For all inquires, About Eddie Grube:{" "}
            <a href="tel:908-329-5619">908-329-5619</a>
          </p>
        </Col>
        <Col>
          <h4>About:</h4>
          <p>
            For all inquires, About Eddie Grube:{" "}
            <a href="tel:908-329-5619">908-329-5619</a>
          </p>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default About;
