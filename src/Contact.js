import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./app.css";

const ContactHeader = styled.h4`
  margin-top: 15px;
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
  font-size: 1.45em;
`;
const Contact = () => {
  return (
    <Row>
      <Col>
        <a name="contact">
          <ContactHeader>Contact:</ContactHeader>
        </a>
        <p>For any inquires, contact Amy Bloom:</p>
        <p>
          <a href="amy@spundesign.com">amy@spundesign.com</a>
        </p>
        <p>
          <a href="tel:908-329-5619">484-951-2600</a>
        </p>
      </Col>
    </Row>
  );
};

export default Contact;
