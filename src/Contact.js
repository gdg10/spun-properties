import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div``;

const Contact = () => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <h4>Contact:</h4>
          <p>
            For all inquires, contact Eddie Grube:{" "}
            <a href="tel:908-329-5619">908-329-5619</a>
          </p>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Contact;
