// // import { Carousel } from '@trendyol-js/react-carousel';
// // import Carousel from 'better-react-carousel'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ShowCarousel({episodes}) {

  const settings = {
    dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: episodes.length > 3 ? 4 : 1,
      slidesToScroll: 4
  }

  return (
    <Slider {...settings}>
      {episodes}
    </Slider>
    
  )
}