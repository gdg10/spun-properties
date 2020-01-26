import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./app.css";
import { AccentPoint, SpacerImage, InfoPoint } from "./About";

const centeredParagraph = styled.p``;

const Contact = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <AccentPoint id="contact">Contact</AccentPoint>
        <SpacerImage>■■■</SpacerImage>
        <InfoPoint style={{ textAlign: "center", fontFamily: "GeosansLight, sans-serif" }}>
        For all inquires, contact Amy Bloom
          <p>
            <a href="amy@spundesign.com">amy@spundesign.com</a>{" "}|{" "}
            <a href="tel:484-951-2600">484-951-2600</a>
          </p>
        </InfoPoint>
      </Col>
    </Row>
  );
};

export default Contact;
