// components/dark_carousel.js

import Carousel from 'react-bootstrap/Carousel';
import PlaceholderImg from '../public/Placeholder.png';
import Image from 'next/image'

export default function DarkCarousel(props) {
  return (
    <Carousel variant="dark" controls={false} indicators={false} style={{overflow:"hidden"}}>

      {props.slides.map((slide) => {
        return <Carousel.Item className="position-relative h-100" key={slide.id} style={{overflow:"hidden",height:"min-content"}}>
          <Image
            src={slide.image}
            alt={slide.caption}
            style={{objectFit:"contain",height:"100%",minWidth:"50vw"}}
          />
        </Carousel.Item>
      })}

    </Carousel>
  );
}
