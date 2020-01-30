import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import h0 from "./bushkill/house1.jpeg";
import h1 from "./bushkill/house2.JPG";
import h2 from "./bushkill/h2.jpeg";
import h3 from "./bushkill/h3.jpeg";
import h4 from "./bushkill/h4.jpeg";
import h5 from "./bushkill/h5.jpeg";
import h6 from "./bushkill/h6.jpeg";
import h7 from "./bushkill/h7.jpeg";
import h8 from "./bushkill/h8.jpeg";
import h9 from "./bushkill/h9.jpeg";
import h10 from "./bushkill/h10.jpeg";
import h11 from "./bushkill/h11.jpeg";
import h12 from "./bushkill/h12.jpeg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-bootstrap/Fade";

const picArray = [h0, h1, h3, h4, h12, h5, h6, h8, h9, h10, h11, h2, h7];

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
