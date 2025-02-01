"use client";

import Image from "next/image";
import React, { useState } from "react";

const Testimonials = [
  {
    icon: "/icon2.png",
    alt: "icon",
    name: "Herman Jensen",
    title: "Founder & Leader",
    image: "/Herman.svg",
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    icon: "/icon2.png",
    alt: "icon",
    name: "Steve Mark",
    title: "Founder & Leader",
    image: "/Steve.svg",
    description:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
  },
  {
    icon: "/icon2.png",
    alt: "icon",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    image: "/Kenn.svg",
    description:
      "It is usually people in the money business, finance, and international trade that are really rich.",
  },
];
function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Image
        src="/Rectangle 14397.png"
        alt="square"
        height="1851"
        width="608"
        className="absolute top-[2200px] object-contain right-[2px] opacity-100 bg-blend-darken"
      />
      <div className="lg:px-16 px-24 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-16 mt-24 mb-10">
          <span className="lg:font-semibold font-bold lg:text-[40px] text-[30px] lg:leading-[80px] font-poppins">
            What people are <br /> saying about us
          </span>
          <p className="font-normal text-[18px] leading-[32px] tracking-[1%] font-poppins text-[#9e9fa4]">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6">
          {Testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`p-8 cursor-pointer rounded-lg w-[290px] h-[305px] ${
                activeIndex === index
                  ? "bg-shield text-white"
                  : "bg-transparent" 
              }`}
            >
              <div className="mb-5">
                <Image
                  src={activeIndex === index ? "/icon.png" : testimonial.icon} // Switch icon when active
                  alt="icon"
                  height={43}
                  width={43}
                />
              </div>
              <div>
                <p className="my-5">{testimonial.description}</p>
                <div>
                  <div className="flex gap-3">
                    <Image
                      src={testimonial.image}
                      alt=""
                      height="48"
                      width="48"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <h4 className="text-sm text-gray-600">
                        {testimonial.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-center lg:mt-20 mt-16 lg:px-10 px-14 gap-10">
          <Image src="/airbnb.svg" alt="airbnb" height="60" width="192" />
          <Image src="/Binance.svg" alt="airbnb" height="60" width="192" />
          <Image src="/coinbase.svg" alt="airbnb" height="60" width="192" />
          <Image src="/Dropbox.svg" alt="airbnb" height="60" width="192" />
        </div>
      </div>
    </>
  );
}

export default Testimonial;
