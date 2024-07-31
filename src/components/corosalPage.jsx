import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselExample() {
  return (
    <>
    <h2 style={{ textAlign : "center"}}> Latest Scheems .... </h2>
    <Carousel fade={false} interval={null} style={{ height : "300px"}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='zpScheem1.jpeg'
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='zpScheem2.jpeg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='zpScheem3.jpeg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselExample;
