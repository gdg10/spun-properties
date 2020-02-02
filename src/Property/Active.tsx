import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../app.css";
import { AccentPoint, SpacerImage } from "../About";
import { SpunProperties, SpunProperty } from "../Property";
import { Link } from "react-router-dom";

const renderCard = (curProp: SpunProperty) => {
  if (curProp.active === false) {
    return null;
  }

  return (
    <Col lg={4} md={6} sm={12}>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          textAlign: "left",
          marginBottom: "2rem"
        }}
      >
        <Card.Img variant="top" src={curProp.cardImage} />
        <Card.Body>
          <Card.Title>{curProp.address}</Card.Title>
          <Card.Text>{ curProp.price + " | " + curProp.details}</Card.Text>
          <Link to={"/" + curProp.route}>
            {" "}
            <Button
              variant="primary"
              style={{ backgroundColor: "indigo", borderColor: "indigo" }}
            >
              Learn More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

const sectionTitle = (
  <Col lg={12} md={12} sm={12}>
    <AccentPoint id="active">Active Listings</AccentPoint>
    <SpacerImage>■■■</SpacerImage>
  </Col>
);

const Active: React.FC = () => {
  return (
    <Row style={{ textAlign: "center" }}>
      {sectionTitle}
      {SpunProperties.map(spunProp => {
        return renderCard(spunProp);
      })}
    </Row>
  );
};

export default Active;
