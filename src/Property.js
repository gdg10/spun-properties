import React from "react";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import PropertyImages from "./PropertyImages";
import PropertyTable from "./PropertyTable";
import styled from "styled-components";
import heroImg from "./heroPic.JPG";

const Wrapper = styled.div`
  text-align: center;
`;

const Price = styled.h3`
  text-align: left;
`;

const Details = styled.p`
  text-align: left;
  font-family: "Oswald", sans-serif;
`;

const DetailSmall = styled.p`
  text-align: left;
  font-family: "Oswald", sans-serif;
  color: grey;
`;

const Description = styled.p`
  margin-top: 10px;
  text-align: left;
`;

const HeroPic = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const Property = () => {
  return (
    <Wrapper>
      <Row>
        <Col sm={12}>
          <HeroPic alt='hero' src={heroImg} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} xs={12} md={9} lg={9}>
          <PropertyImages />
        </Col>
        <Col Col sm={12} xs={12} md={3} lg={3}>
          <Price>$250,000</Price>
          <Details>3 bd | 2ba | 1,734 sqft </Details>
          <Details>1508 Bushkill St, Easton, PA 18042</Details>
          <DetailSmall>House for Sale</DetailSmall>
          <ButtonToolbar>
            <Button variant="primary">Apply Now</Button>
          </ButtonToolbar>
          <PropertyTable />
        </Col>
      </Row>
      <Row>
        <Col>
          <Description>
            Beautiful 1st Floor Unit of a duplex, ready to MOVE-IN in a
            desirable Northeast Philadelphia (Philadelphia Mills neighborhood).
            Minutes drive from major arteries (Route 1 anf 95). First Floor Unit
            features Living Room, Dining Area, Kitchen (all working appliances),
            2 Bedrooms, Full Bathroom. Carpeted flooring and all New Windows
            installed. Basement has Large Laundry Area (washer+dryer included).
            New Gas heater and A/C will be installed within days. 1 parking
            space in the back of the unit. Owner pays 1/2 water.
          </Description>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Property;
