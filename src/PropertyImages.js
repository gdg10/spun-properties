import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import h2 from "src/bushkill/h2.jpeg";
import h3 from "src/bushkill/h3.jpeg";
import h4 from "src/bushkill/h4.jpeg";
import h5 from "src/bushkill/h5.jpeg";
import h6 from "src/bushkill/h6.jpeg";
import h7 from "src/bushkill/h7.jpeg";
import h8 from "src/bushkill/h8.jpeg";
import h9 from "src/bushkill/h9.jpeg";
import h10 from "src/bushkill/h10.jpeg";
import h11 from "src/bushkill/h11.jpeg";
import h12 from "src/bushkill/h12.jpeg";

const picArray = { h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12 };

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const PropertyImages = () => {
  return (
    <Wrapper>
      <Carousel>
        {picArray.map(picSrc => (
          <Carousel.Item>
            <img className="d-block w-100" src={picSrc} alt="slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default PropertyImages;
