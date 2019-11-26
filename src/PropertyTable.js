import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const PropertyTable = () => {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Date Available</td>
          <td>Mark</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>Cooling</td>
          <td>Sue</td>
        </tr>
        <tr>
          <td>Heating</td>
          <td>Sue</td>
        </tr>
        <tr>
          <td>Pets</td>
          <td>Sue</td>
        </tr>
        <tr>
          <td>Parking</td>
          <td>Sue</td>
        </tr>
      </tbody>
    </Table>
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