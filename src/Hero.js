import React from "react";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: 'Comfortaa', cursive;
  line-height: 100px;
  font-weight: bold;
`;

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>Spun Properties</Title>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
