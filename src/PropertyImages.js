import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import house1 from "./HousePics/house.jpg";
import house3 from "./HousePics/house3.jpeg";
import house4 from "./HousePics/house4.jpg";

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
          <img className="d-block w-100" src={house3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={house4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};

export default PropertyImages;
