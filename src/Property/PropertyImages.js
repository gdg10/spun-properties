import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-bootstrap/Fade";

const Wrapper = styled.div`
  margin-bottom: 10px;
  min-hieght: 100px;
`;

const SpinnerWrapper = styled.div``;

const spinnerStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)"
};

const Loading = (
  <SpinnerWrapper>
    <Spinner animation="grow" variant="dark" style={spinnerStyle} />
  </SpinnerWrapper>
);

const PropertyImages = props => {
  const [loadCounter, setLoadCounter] = React.useState(1);
  return (
    <Wrapper style={{boxShadow: "0px 3px 15px rgba(0,0,0,0.1)"}}>
      {loadCounter < props.propImages.length && Loading}
      <Fade in={loadCounter >= props.propImages.length}>
        <Carousel dynamicHeight={true}>
          {props.propImages.map((picSrc, i) => (
            <div key={i + "_l"}>
              <img
                onLoad={() => {
                  setLoadCounter(loadCounter + 1);
                }}
                src={picSrc}
                key={i + "_q"}
                alt="slide"
              />
            </div>
          ))}
        </Carousel>
      </Fade>
    </Wrapper>
  );
};

export default PropertyImages;
