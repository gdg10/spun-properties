import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./app.css";

const ContactHeader = styled.h4`
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
  font-size: 1.25em;
`;
const Contact = () => {
  return (
    <Row>
      <Col>
        <a name="contact">
          <ContactHeader>Contact:</ContactHeader>
        </a>
        <p>
          For all inquires, contact Eddie Grube:{" "}
          <a href="tel:908-329-5619">908-329-5619</a>
        </p>
      </Col>
    </Row>
  );
};

export default Contact;
