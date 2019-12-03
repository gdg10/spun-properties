import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: "Comfortaa", cursive;
  line-height: 100px;
  font-weight: bold;
`;

const Contact = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
