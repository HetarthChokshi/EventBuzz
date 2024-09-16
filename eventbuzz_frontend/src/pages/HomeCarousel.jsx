import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <>
      <Carousel controls={false} interval={5000} pause={false}>
        <Carousel.Item>
          <img loading="lazy"
            className="d-block w-100"
            src= "/images/movie_img/deadpool-and-wolverine/banner.avif"
            alt="First slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img loading="lazy"
            className="d-block w-100"
            src="/images/sports_img/mi-vs-rr/banner.avif"
            alt="Second slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img loading="lazy"
            className="d-block w-100"
            src="/images/carousel_img/banner3.webp"
            alt="Third slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img loading="lazy"
            className="d-block w-100"
            src="/images/carousel_img/sorudeofme.avif"
            alt="Fourth slide"
            height="300px"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeCarousel;
