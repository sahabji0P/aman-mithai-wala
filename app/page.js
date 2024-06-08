"use client";
import TimeLine from "@/components/timeline";
import Difference from "@/components/difference";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import doodle from "@/public/doodle.jpeg";
import reach from "@/public/reach.jpeg";
import Products from "@/components/products";
import Card from "@/components/card";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-5">


      <div className="carousel mt-32 w-full">
        <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"}`}>
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full transition-opacity duration-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"}`}>
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full transition-opacity duration-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"}`}>
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full transition-opacity duration-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? "block" : "hidden"}`}>
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full transition-opacity duration-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>




      <div className="card h-64 w-full bg-base-100 shadow-xl image-full overflow-hidden rounded-none">
        <figure><Image
          src={doodle}
          alt="Doodle"
          fill
          className="w-full"

        /></figure>

        <div className="card-body items-center mt-12">
          <h2 className="text-5xl">Authentic Traditional Indian Sweets!</h2>

          {/* <p className="">If a man chews ladoos, whose ladoos does he choose?</p> */}
        </div>
      </div>





      <section id="vision">
        <Difference />
      </section>





      <Card />

      <section id="reach">
        <Image
          src={reach}
          alt="Doodle"
          className="w-full"
        />
      </section>

      <section id="about-us"><TimeLine /></section>





    </main>
  );
}
