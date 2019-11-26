import React from "react";
import {Carousel, Image } from "react-bootstrap";
import styled from "styled-components";
import house1 from "./HousePics/house.jpg";
import house2 from "./HousePics/house2.jpg";
import house3 from "./HousePics/house3.jpeg";
import house4 from "./HousePics/house4.jpg";

const PropertyImages = () => {
    return (
        
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house3}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house4}
                    alt="Third slide"
                />
{/* 
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default PropertyImages;