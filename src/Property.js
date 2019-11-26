import React from "react";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import PropertyImages from "./PropertyImages";
import PropertyTable from "./PropertyTable";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Price = styled.h3`
  text-align: left;
`;

const Details = styled.p`
  text-align: left;
`;

const Property = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm={9}>
            <PropertyImages />
          </Col>
          <Col>
            <Price>$2,325/mo</Price>
            <Details>1 bd | 1ba | 387 sqft </Details>
            <Details>72 E 7th St # 3RW, New York, NY 10003</Details>
            <Details>House for Sale</Details>
            <ButtonToolbar>
              <Button variant="primary">Apply Now</Button>
              <Button variant="outline-secondary">Request a Tour</Button>
            </ButtonToolbar>
            <Details>
              Beautiful 1st Floor Unit of a duplex, ready to MOVE-IN in a
              desirable Northeast Philadelphia (Philadelphia Mills
              neighborhood). Minutes drive from major arteries (Route 1 anf 95).
              First Floor Unit features Living Room, Dining Area, Kitchen (all
              working appliances), 2 Bedrooms, Full Bathroom. Carpeted flooring
              and all New Windows installed. Basement has Large Laundry Area
              (washer+dryer included). New Gas heater and A/C will be installed
              within days. 1 parking space in the back of the unit. Owner pays
              1/2 water
            </Details>
            <PropertyTable />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Property;
