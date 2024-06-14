"use client";
import TimeLine from "@/components/timeline";
import Difference from "@/components/difference";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import doodle from "@/public/doodle.jpeg";

import Products from "@/components/products";
import Contact from "@/components/contact";
import MapComponent from "@/components/MapComponent";
import Distributors from "@/components/distributors";
import MarqueeComponent from "@/components/Alerts/hyderabad";
import Duplicate from "@/components/dupProduct";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-2 ">


      <div className="carousel mt-32 h-fit overflow-hidden w-full">
        <div id="slide1" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 1 ? "block" : "hidden"}`}>
          <img src="https://thumbs.dreamstime.com/b/homemade-traditional-indian-sweet-snack-soan-papdi-vegan-diet-snack-soan-papdi-famous-north-indian-sweet-131633504.jpg"
            className="w-full c-size ease-in-out duration-500" />

        </div>
        <div id="slide2" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 2 ? "block" : "hidden"}`}>
          <img src="https://images.mid-day.com/images/images/2023/mar/Gujiya-a_d.jpg" className="w-full c-size ease-in-out duration-500" />

        </div>
        <div id="slide3" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 3 ? "block" : "hidden"}`}>
          <img src="https://c1.wallpaperflare.com/preview/821/873/153/indian-sweets-sweets-indian-culture.jpg" className="w-full c-size ease-in-out duration-500" />

        </div>
        <div id="slide4" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 4 ? "block" : "hidden"}`}>
          <img src="https://t4.ftcdn.net/jpg/05/23/58/63/360_F_523586315_rdEhuvW66FUmhtcsKOckkZhX1puUj4om.jpg" className="w-full c-size ease-in-out duration-500" />

        </div>
      </div>

      <MarqueeComponent />






      <section id="vision">
        <div className="card c-size w-full bg-base-100 shadow-xl image-full overflow-hidden rounded-xl mt-10">
          <figure><Image
            src={doodle}
            alt="Doodle"
            fill
            className="w-full"

          /></figure>

          <div className="card-body items-center justify-center">
            <h2 className="text-6xl playfair_display font-bold">INDIA's 1'st Wholesale Brand in Indian Sweets</h2>

          </div>
        </div>
      </section>
      <Difference />


      <Products />
      {/* <Duplicate /> */}
      {/* <TabsP /> */}
      {/* <PopupTable /> */}



      <Distributors />

      <TimeLine />


      <MapComponent />


      <Contact />






    </main>
  );
}
