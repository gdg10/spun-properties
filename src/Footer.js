import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  margin-top: 20px;
  hieght: 60px;
  width: 100vw;
  background-color: grey;
  text-align: center;
  font-family: "Oswald", sans-serif;
  color: lightgrey;
  font-weight: lighter;
  line-hieght: 60px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col style={{ textAlign: "left" }}>
            <a
              style={{ color: "white" }}
              href="https://www.spundesign.com"
              target="_blank"
            >
              Spundesign ©
            </a>
          </Col>
          <Col style={{ textAlign: "right" }}>
            Website by{" "}
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/garrett-grube?trk=people-guest_profile-result-card_result-card_full-click"
              target="_blank"
            >
              Garrett Grube
            </a>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
