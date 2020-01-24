import React from "react";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import PropertyImages from "./PropertyImages";
import PropertyTable from "./PropertyTable";
import styled from "styled-components";

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

const Property = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} xs={12} md={9} lg={9}>
          <a name="bushkill">
            <PropertyImages />
          </a>
        </Col>
        <Col Col sm={12} xs={12} md={3} lg={3}>
          <Price>$250,000</Price>
          <Details>3 bd | 1.5ba | 1,734 sqft</Details>
          <Details>1508 Bushkill St, Easton, PA 18042</Details>
          {/* <DetailSmall>Listed by: Brendan Grube</DetailSmall> */}
          <DetailSmall>House for Sale</DetailSmall>
          <ButtonToolbar>
            <Button variant="primary">Contact Agent</Button>
          </ButtonToolbar>
          <PropertyTable />
        </Col>
        <Col Col sm={12} xs={12} md={12} lg={12}>
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
