import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "./app.css";
import { SocialIcon } from "react-social-icons";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100vw;
  background-color: grey;
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-family: "GeosansLight", sans-serif;
  color: lightgrey;
  font-weight: lighter;
  line-hieght: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 1);
`;

const constHeight = "50px";

const Footer = () => {
  return (
    <Wrapper style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 1)" }}>
      <Container>
        <Row lg={12} md={12} sm={12}>
          <Col style={{ height: constHeight }}></Col>
        </Row>
        <Row>
          <Col style={{ verticalAlign: "middle", textAlign: "left" }}>
            <a
              style={{ color: "white" }}
              href="https://www.spundesign.com"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              Spundesign©
            </a>{" "}<SocialIcon url="https://www.spundesign.com" style={{display: 'inline-block' , width: '25px', height:'25px'}}/>
          </Col>
          <Col style={{ verticalAlign: "middle", textAlign: "right" }}>
            Site by{" "}
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/garrett-grube?trk=people-guest_profile-result-card_result-card_full-click"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              Garrett Grube
            </a>{" "}
            <SocialIcon url="https://www.linkedin.com/in/garrett-grube?trk=people-guest_profile-result-card_result-card_full-click" style={{display: 'inline-block', width: '25px', height:'25px'}}/>
          </Col>
        </Row>
        <Row lg={12} md={12} sm={12}>
          <Col style={{ height: constHeight }}></Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
