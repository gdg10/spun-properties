import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Oswald", sans-serif;
  margin-top: 8%;
  font-size: 1em;
`;

const PropertyTable = () => {
  return (
    <Wrapper>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Date Available</td>
            <td>12/1/19</td>
          </tr>
          <tr>
            <td>Heating</td>
            <td>Forced Air</td>
          </tr>
          <tr>
            <td>Cooling</td>
            <td>Forced Air</td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default PropertyTable;

// Date available:
// 12/1
// Type:
// Apartment
// Cooling:
// Other
// Heating:
// Forced air
// Pets:
// Cats, large dogs, small dogs
// Parking:
// No Data
// Laundry:
// Shared
// Deposit & fees:
// $995
// Price/sqft:
// $1
