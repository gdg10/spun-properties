import React from "react";
import { Row, Col } from "react-bootstrap";
import heroImg from "./SpunPropertiesHeader.jpg";
import styled from "styled-components";
import Fade from "react-bootstrap/Fade";

const HeroPic = styled.img`
  width: 100%;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const Hero = () => {
  const [didMount, setDidMount] = React.useState(false);
  React.useEffect(() => {
    setDidMount(true);
  });
  return (
    <a href="#about">
      <Row>
        <Col sm={12}>
          <Fade in={didMount}>
            <HeroPic
              alt="hero"
              src={heroImg}
              style={{
                borderRadius: "20px",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.3)"
              }}
            />
          </Fade>
        </Col>
      </Row>
    </a>
  );
};

export default Hero;
