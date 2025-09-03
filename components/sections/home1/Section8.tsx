"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const slides = [
  {
    title: "SUSTAINABLE",
    heading: "GROWTH WITH AI",
    text: "We build AI Solutions that can drive sustainable growth by creating innovative solutions, optimizing production processes, and enabling personalized experiences, thereby reducing resource consumption and enhancing efficiency across various sectors.",
    img: "/images/slide1.png",
  },
  {
    title: "INNOVATION",
    heading: "TRANSFORMING INDUSTRIES",
    text: "Our AI-powered innovations are designed to transform industries, improve productivity, and create new opportunities for growth and efficiency.",
    img: "/images/slide2.png",
  },
  {
    title: "EFFICIENCY",
    heading: "SMARTER SOLUTIONS",
    text: "We focus on delivering smarter AI solutions that enhance decision-making, reduce waste, and streamline workflows for organizations worldwide.",
    img: "/images/slide3.png",
  },
];

const Section8 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-sine" });
  }, []);

  return (
    <div
      className="our_slider"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-offset="200"
    >
      <Swiper
        grabCursor={true}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, "-100%", 0], // vertical up
          },
          next: {
            translate: [0, "100%", 0], // vertical down
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCreative, Autoplay, Pagination]}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="text-box">
                <h3>{slide.title}</h3>
                <h2>{slide.heading}</h2>
                <p>{slide.text}</p>
              </div>
              <div className="image-box">
                <img src={slide.img} alt={slide.heading} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section8;
