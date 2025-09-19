'use client'
import CircleText from '@/components/elements/CircleText'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import Image from 'next/image'
// import React, { useEffect } from "react";







import img1 from "@/public/assets/imgs/template/cth.png";
import img2 from "@/public/assets/imgs/template/goodf.png";

import img3 from "@/public/assets/imgs/template/uppww.png";
import img4 from "@/public/assets/imgs/template/fivr.png";
import img5 from "@/public/assets/imgs/template/link.png";
import img6 from "@/public/assets/imgs/template/goodf.png";

import img8 from "@/public/assets/imgs/template/cth.png";
import img9 from "@/public/assets/imgs/template/uppww.png";






// const slides = [
//   {
//     title: "SUSTAINABLE",
//     heading: "GROWTH WITH AI",
//     text: "We build AI Solutions that can drive sustainable growth by creating innovative solutions, optimizing production processes, and enabling personalized experiences, thereby reducing resource consumption and enhancing efficiency across various sectors.",
//     img: "https://via.placeholder.com/400x280.png?text=Slide+1",
//   },
//   {
//     title: "INNOVATION",
//     heading: "TRANSFORMING INDUSTRIES",
//     text: "Our AI-powered innovations are designed to transform industries, improve productivity, and create new opportunities for growth and efficiency.",
//     img: "https://via.placeholder.com/400x280.png?text=Slide+2",
//   },
//   {
//     title: "EFFICIENCY",
//     heading: "SMARTER SOLUTIONS",
//     text: "We focus on delivering smarter AI solutions that enhance decision-making, reduce waste, and streamline workflows for organizations worldwide.",
//     img: "https://via.placeholder.com/400x280.png?text=Slide+3",
//   },
// ];

const logos = [img1,img2,img3,img4,img5,img6,img8,img9];

function Row({ prefix = "A" }) {
  return (
    <div className="row-container">
      {logos.map((src, i) => (
        <div key={`${prefix}-${i}`} className="logo-wrapper">
          <Image
            src={src}
            alt={`Logo ${i + 1}`}
            width={80}
            height={92}
            className="logo-image"
          />
        </div>
      ))}
    </div>
  );
}


export default function Section2() {
	const [isOpen, setOpen] = useState(false)
  // const [currentSlide, setCurrentSlide] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length);
  //     }, 5000); // 5 sec
  
  //     return () => clearInterval(interval);
  //   }, []);
  
  //   const slide = slides[currentSlide];
	return (
		<>


 <section className="services-section">
    <div className="text-center">
							<p className="title-line-both " data-aos="fade-up">Trusted By</p>
							
              </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          <Row prefix="A" />
          <Row prefix="B" />
        </div>
      </div>

{/* 
      {/* Who we are */}

				{/* <div className="section"> */}
      {/* Left content */}
      {/* <div className="content">
        <h3>{slide.title}</h3>
        <h2>{slide.heading}</h2>
        <p>{slide.text}</p>
      </div> */}

      {/* Right Image */}
      {/* <div className="image-box">
        <img src={slide.img} alt={slide.heading} />
      </div> */}

      {/* Rotating Circle */}
      {/* <div className="rotating-circle"></div> */}

      {/* Navigation dots */}
      {/* <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div> */}
        {/* ))} */}
      {/* </div>
    </div> */} 
    </section>
		</>
	)
}
