import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
    hieght: 40px;
    width: 100vw;
    background-color: grey;
    text-align: center;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>Spun Properties</Col>
                    <Col></Col>
                    <Col>built by black shirt code</Col>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Footer;