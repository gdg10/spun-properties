import React from "react";
import { Row, Col } from "react-bootstrap";
import "../app.css";
import { AccentPoint, SpacerImage } from "../About";

const Archived = () => {
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <AccentPoint id="Archived">Archived Listings</AccentPoint>
          <SpacerImage>■■■</SpacerImage>
        </Col>
      </Row>
    );
  };

  export default Archived;