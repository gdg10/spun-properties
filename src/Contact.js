import React from "react";
import { Row, Col } from "react-bootstrap";
import "./app.css";
import { AccentPoint, SpacerImage } from "./About";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={6}>
        <AccentPoint id="contact">Contact</AccentPoint>
        <SpacerImage>■■■</SpacerImage>
      </Col>
      <Col lg={4} md={4} sm={12}></Col>
      <Col
        lg={1}
        md={1}
        sm={12}
        style={{ textAlign: "center", marginBottom: "12px" }}
      >
        <SocialIcon
          url="tel:484-951-2600"
          style={{ display: "inline-block" }}
        />
        <p style={{ color: "grey", fontFamily: "GeosansLight, sans-serif" }}>Phone </p>
      </Col>
      <Col
        lg={1}
        md={1}
        sm={12}
        style={{ textAlign: "center", marginBottom: "12px" }}
      >
        <SocialIcon
          url="mailto:amy@spundesign.com"
          style={{ display: "inline-block" }}
        />
        <p style={{ color: "grey", fontFamily: "GeosansLight, sans-serif" }}>Email </p>
      </Col>
      <Col
        lg={1}
        md={1}
        sm={12}
        style={{ textAlign: "center", marginBottom: "12px" }}
      >
        <SocialIcon
          url="https://www.instagram.com/spunproperties/"
          style={{ display: "inline-block" }}
        />
        <p style={{ color: "grey", fontFamily: "GeosansLight, sans-serif" }}>Instagram </p>
      </Col>
      <Col
        lg={1}
        md={1}
        sm={12}
        style={{ textAlign: "center", marginBottom: "12px" }}
      >
        <SocialIcon
          url="https://www.facebook.com/lehighvalleyhomestaging/"
          style={{ display: "inline-block" }}
        />
        <p style={{ color: "grey", fontFamily: "GeosansLight, sans-serif"}}>Facebook </p>
      </Col>
      <Col lg={4} md={4} sm={12}></Col>
    </Row>
  );
};

export default Contact;
