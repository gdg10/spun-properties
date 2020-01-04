import React from "react";
import { Row, Col } from "react-bootstrap";
//import styled from "styled-components";

const Contact = () => {
  return (
    <Row>
      <Col>
        <a name="contact">
          <h4>Contact:</h4>
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
