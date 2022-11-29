// components/dark_carousel.js

import Carousel from 'react-bootstrap/Carousel';
import PlaceholderImg from '../public/Placeholder.png';
import Image from 'next/image'

export default function DarkCarousel() {
  return (
    <Carousel variant="dark" height="100%" controls={false}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={PlaceholderImg}
          alt="First slide"
          width="100vw"
          style={{objectFit:"contain"}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={PlaceholderImg}
          alt="Second slide"
          width="100vw"
          style={{objectFit:"contain"}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={PlaceholderImg}
          alt="Third slide"
          width="100vw"
          style={{objectFit:"contain"}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
