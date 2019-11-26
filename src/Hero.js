import React from "react";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import PropertyImages from "./PropertyImages";
import PropertyTable from "./PropertyTable";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: 'Oswald', sans-serif;
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
