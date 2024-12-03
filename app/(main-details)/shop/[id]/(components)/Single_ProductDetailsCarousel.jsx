"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Single_ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] px-4   mx-auto ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={50}
        className="productCarousel"
      >
        {images?.images?.map((item, id) => (
          <img src={item} className="  object-fill" />
        ))}
      </Carousel>
    </div>
  );
};

export default Single_ProductDetailsCarousel;

{
  /* <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={50}
        className="productCarousel"
      >
        <img src="/2.jpg" className="h-[400px] object-contain" />
        <img src="/2.jpg" className="h-[400px] object-contain" />
        <img src="/2.jpg" className="h-[400px] object-contain" />

        <img src="/2.jpg" className="h-[400px] object-contain" />
      </Carousel> */
}

/// custom

{
  /* <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={50}
        className="productCarousel"
      >
        {images?.map((item) => (
          <img
            src={item?.attributes?.url}
            className="h-[400px] object-contain"
          />
        ))}
      </Carousel> */
}
