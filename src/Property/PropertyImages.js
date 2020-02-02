import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import buskillImages from "../Property/bushkill"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-bootstrap/Fade";

const picArray = buskillImages;

const Wrapper = styled.div`
  margin-bottom: 10px;
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
    <Spinner animation="grow" variant="light" style={spinnerStyle} />
  </SpinnerWrapper>
);

const PropertyImages = () => {
  const [loadCounter, setLoadCounter] = React.useState(1);
  return (
    <Wrapper>
      {loadCounter < picArray.length && Loading}
      <Fade in={loadCounter >= picArray.length}>
        <Carousel dynamicHeight={true}>
          {picArray.map((picSrc, i) => (
            <div key={i + "_l"}>
              <img
                onLoad={() => {
                  setLoadCounter(loadCounter + 1);
                }}
                src={picSrc}
                key={i + "_q"}
                alt="slide"
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          ))}
        </Carousel>
      </Fade>
    </Wrapper>
  );
};

export default PropertyImages;
