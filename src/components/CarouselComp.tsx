"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Carousel
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <img src="/images/banner/1.png" />
          </div>

          <div>
            <img src="/images/banner/3.png" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
