import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../app.css";
import { AccentPoint, SpacerImage } from "../About";
import { SpunProperties, SpunProperty } from "../Property";
import { Link } from "react-router-dom";
import { Loading } from "./PropertyImages";
import Fade from "react-bootstrap/Fade";

const renderCard = (
  curProp: SpunProperty,
  loadCounter: number,
  setLoadCounter: React.Dispatch<React.SetStateAction<number>>
) => {
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
          marginBottom: "2rem",
          boxShadow: "0px 3px 15px rgba(0,0,0,0.1)",
          borderRadius: "20px"
        }}
      >
        {loadCounter < SpunProperties.length && Loading}
        <Fade in={loadCounter >= 4}>
          <Card.Img
            variant="top"
            src={curProp.cardImage}
            onLoad={() => {
              setLoadCounter(loadCounter + 1);
            }}
          />
        </Fade>
        <Card.Body>
          <Card.Title>{curProp.address}</Card.Title>
          <Card.Text>{curProp.price + " | " + curProp.details}</Card.Text>
          <Link to={"/" + curProp.route}>
            {" "}
            <Button
              variant="primary"
              style={{ backgroundColor: "indigo", borderColor: "indigo", boxShadow: "0px 3px 15px rgba(0,0,0,0.1)" }} 
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
  const [loadCounter, setLoadCounter] = React.useState(1);
  return (
    <Row style={{ textAlign: "center" }}>
      {sectionTitle}
      {SpunProperties.map(spunProp => {
        return renderCard(spunProp, loadCounter, setLoadCounter);
      })}
    </Row>
  );
};

export default Active;
