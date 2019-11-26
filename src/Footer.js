import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
    hieght: 50px;
    width: 100vw;
    background-color: grey;
    text-align: center;
    font-family: "Oswald", sans-serif;
    color: lightgrey;
    font-weight: lighter;
    line-hieght: 50px;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>Spun Properties ©</Col>
                    <Col></Col>
                    <Col>Website by <a href="https://www.linkedin.com/in/garrett-grube?trk=people-guest_profile-result-card_result-card_full-click" target="_blank">Garrett Grube</a></Col>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Footer;