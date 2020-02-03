import React from "react";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import PropertyImages from "./PropertyImages";
import styled from "styled-components";
import "../app.css";

const Price = styled.h3`
  text-align: left;
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
`;

const Details = styled.p`
  text-align: left;
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
  margin-bottom: 8px;
  padding-bottom: 0;
`;

const Details2 = styled.p`
  text-align: left;
  // font-family: 'GeosansLight', sans-serif;
  //font-weight: bold;
`;

const DetailSmall = styled.p`
  text-align: center;
  // font-family: 'GeosansLight', sans-serif;
  color: grey;
`;

const Description = styled.p`
  margin-top: 16px;
  text-align: justify;
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
`;

interface PropertyProps {
  price: string;
  details: string;
  address: string;
  listingAgent: string;
  description: string;
  propImages: string[];
  listingAgentsPhone: string;
}

const Property: React.FC<PropertyProps> = props => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} xs={12} md={12} lg={9}>
          <PropertyImages propImages={props.propImages}/>
        </Col>
        <Col sm={12} xs={12} md={12} lg={3}>
          <Price>{props.price}</Price>
          <Details>{props.details}</Details>
          <Details>Listing Agent: {props.listingAgent}</Details>
          <Details2>{props.address}</Details2>
          <a href={"tel:" + props.listingAgentsPhone}>
            <ButtonToolbar>
              <Button block={true} variant="primary" style={{backgroundColor: 'indigo', boxShadow: "0px 3px 15px rgba(0,0,0,0.1)"}}>
                Call Agent
              </Button>
            </ButtonToolbar>
          </a>
          <Description>
            {props.description}
          </Description>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Property;
