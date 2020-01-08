import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import house1 from "./house1.jpeg";
import house2 from "./house2.JPG";

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const PropertyImages = () => {
  return (
    <Wrapper>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={house1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={house2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};

export default PropertyImages;
