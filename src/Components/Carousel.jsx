import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Car1 from './art of redemption.webp'
import './Carousel.css'
import Dance from "./convict dance.jpg";
import Thorns from './Thorns.webp'
import Free from './Freedom.jpg'
import Break from './break chain.webp'
import Frea from './free.jpg'
import Fly from './birdy.jpg'

function Parousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{height:"90vh", width:"1400px"}} src={Car1} alt="dancing" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"90vh", width:"1400px"}} src={Free} alt="dance" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"90vh", width:"1400px"}} src={Fly} alt="dance" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Parousel;
