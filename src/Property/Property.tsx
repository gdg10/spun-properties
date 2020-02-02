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
  price: number;
  details: String;
  address: String;
  listingAgent: String;
  description: String;
}

const Property: React.FC<PropertyProps> = props => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} xs={12} md={9} lg={9}>
          <PropertyImages />
        </Col>
        <Col sm={12} xs={12} md={3} lg={3}>
          <Price>$250,000</Price>
          <Details>3 bd | 1.5 ba | 1,734 sqft | Active</Details>
          <Details>Listing Agent: Brendan Grube</Details>
          <Details2>1508 Bushkill St, Easton, PA 18042</Details2>
          <a href="tel:484-951-2600">
            <ButtonToolbar>
              <Button block={true} variant="primary" style={{backgroundColor: 'indigo', borderColor: 'indigo'}}>
                Contact Agent
              </Button>
            </ButtonToolbar>
          </a>
          <Description>
            Move-in ready, this newly renovated and updated classic colonial is
            located on a highly desirable, tree-lined side street. Some of the
            outstanding finishes include a totally new kitchen, updated
            bathrooms, refinished hardwood floors, new central air system,
            furnace and water heater. Large bedrooms, brick fireplace, first
            floor laundry room, den and a freshly painted basement makes this an
            attractive home. The property has off-street parking, a covered
            patio and a large back yard for pets or gardening. Owner may help
            with closing costs.
          </Description>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Property;
