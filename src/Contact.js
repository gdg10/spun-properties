import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: "Comfortaa", cursive;
  line-height: 100px;
  font-weight: bold;
`;

const Wrapper = styled.div`
`;

const Contact = () => {
  return (
    <Wrapper>
      <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group  as={Col} controlId="formGridAddress2">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Message</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;
