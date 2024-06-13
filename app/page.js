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
          <img src="https://images.unsplash.com/photo-1590671909091-43ff144014fe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full c-size ease-in-out duration-500" />

        </div>
        <div id="slide2" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 2 ? "block" : "hidden"}`}>
          <img src="https://as2.ftcdn.net/v2/jpg/03/19/41/49/1000_F_319414948_uvA83zUdiwk4KAd019zHGbSW3YzyAPBu.jpg" className="w-full c-size ease-in-out duration-500" />

        </div>
        <div id="slide3" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 3 ? "block" : "hidden"}`}>
          <img src="https://c1.wallpaperflare.com/preview/821/873/153/indian-sweets-sweets-indian-culture.jpg" className="w-full c-size ease-in-out duration-500" />

        </div>
        <div id="slide4" className={`carousel-item relative w-full ease-in-out duration-500 ${currentSlide === 4 ? "block" : "hidden"}`}>
          <img src="https://as1.ftcdn.net/v2/jpg/04/84/94/58/1000_F_484945880_yqcmUlx4PR22FnuLWEknDRji2RLiM8Nh.jpg" className="w-full c-size ease-in-out duration-500" />

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
            <h2 className="text-6xl playfair_display font-bold">INDIA's first Wholesale Brand in Indian Sweets</h2>

          </div>
        </div>
      </section>
      <Difference />


      <Products />
      {/* <TabsP /> */}
      {/* <PopupTable /> */}



      <Distributors />

      <TimeLine />


      <MapComponent />


      <Contact />






    </main>
  );
}
