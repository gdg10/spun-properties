import React from "react";
import { Row, Col } from "react-bootstrap";
import "./app.css";
import { AccentPoint, SpacerImage, InfoPoint } from "./About";

const Contact = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <AccentPoint id="contact">Contact</AccentPoint>
        <SpacerImage>■■■</SpacerImage>
        <InfoPoint
          style={{
            textAlign: "center",
            fontFamily: "GeosansLight, sans-serif"
          }}
        >
          For all inquires, contact Amy Bloom
        </InfoPoint>
        <InfoPoint
          style={{
            textAlign: "center",
            fontFamily: "GeosansLight, sans-serif"
          }}
        >
          <a href="amy@spundesign.com">amy@spundesign.com</a> |{" "}
          <a href="tel:484-951-2600">484-951-2600</a>
        </InfoPoint>
      </Col>
    </Row>
  );
};

export default Contact;
