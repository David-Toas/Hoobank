/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { animate, stagger } from "motion";

// Add correct types for features
interface Feature {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/Star.svg",
    alt: "Star",
    title: "Rewards",
    description:
      "The best credit cards offer some tantalizing combinations of promotions and prizes.",
  },
  {
    icon: "/Shield Done.svg",
    alt: "Shield",
    title: "100% Secured",
    description:
      "We take proactive steps to make sure your information and transactions are secure.",
  },
  {
    icon: "/Send.svg",
    alt: "Send",
    title: "Balance Transfer",
    description:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  style: {
    top: string;
    right: string;
  };
}

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".animated-image");

    animate(
      elements,
      {
        y: ["-100vh", "0vh"],
        opacity: [0, 1],
      },
      {
        duration: 1,
        delay: stagger(0.2),
        easing: "ease-out",
      }
    );
  }, []);

  const images: ImageItem[] = [
    {
      src: "/robothand.svg",
      alt: "robothand",
      width: 644,
      height: 669,
      style: { top: "-950px", right: "0" },
    },
    {
      src: "/Vector3.svg",
      alt: "Sphere",
      width: 30,
      height: 30,
      style: { top: "-750px", right: "500px" },
    },
    {
      src: "/Vector2.svg",
      alt: "Sphere",
      width: 50,
      height: 50,
      style: { top: "-830px", right: "150px" },
    },
    {
      src: "/card3.svg",
      alt: "Card 3",
      width: 350,
      height: 250,
      style: { top: "-1000px", right: "180px" },
    },
    {
      src: "/card2.svg",
      alt: "Card 2",
      width: 450,
      height: 250,
      style: { top: "-1100px", right: "130px" },
    },
    {
      src: "/card.svg",
      alt: "Card",
      width: 350,
      height: 250,
      style: { top: "-1135px", right: "190px" },
    },
    {
      src: "/get.svg",
      alt: "Get Started",
      width: 120,
      height: 120,
      style: { top: "-1000px", right: "740px" },
    },
    {
      src: "/Vector.svg",
      alt: "Sphere",
      width: 80,
      height: 80,
      style: { top: "-1200px", right: "500px" },
    },
  ];

  return (
    <>
      <Image
        src="/Ellipse 2333.png"
        alt="square"
        height={1851}
        width={608}
        className="absolute top-[-112px] object-contain left-[-65px] opacity-100 bg-blend-darken"
      />
      <Image
        src="/Ellipse.svg"
        alt="square"
        height={771}
        width={605}
        className="absolute top-0 object-contain right-0 opacity-100 bg-blend-darken"
      />
      <Image
        src="/Vector16.svg"
        alt="square"
        height={780}
        width={880}
        className="absolute top-[-150px] object-contain right-[0px] opacity-100 bg-blend-darken"
      />
      <div>
        <div>
          <div className="max-w-4xl relative overflow-hidden lg:px-16 px-10 lg:mt-28 mt-10">
            <div>
              <div className="flex justify-center items-center bg-[#222125] max-w-[330px] h-9 rounded-lg text-white text-sm font-normal mb-9">
                <Image src="/Discount.svg" alt="Icon" height={32} width={32} />
                <div className="flex justify-center items-center gap-1">
                  <span className="text-[#e4e4e4]">20%</span>
                  <p className="text-[#909091]">DISCOUNT FOR</p>
                  <span className="text-[#e4e4e4]">1 MONTH </span>
                  <p className="text-[#909091]">ACCOUNT</p>
                </div>
              </div>
              {/* Hero text content */}
              <div className="font-semibold lg:text-[72px] text-[65px] leading-[100px] tracking-[1%] font-poppins">
                The Next
              </div>
              <div className="font-semibold lg:text-[72px] text-[65px] leading-[100px] tracking-[1%] font-poppins bg-custom-gradient-left bg-clip-text text-transparent">
                Generation
              </div>
              <div className="font-semibold lg:text-[72px] text-[65px] leading-[100px] tracking-[1%] font-poppins mb-10 w-full">
                Payment Method.
              </div>
              <span className="text-[18px] leading-[30.6px] font-normal mt-5 font-poppins text-[#9e9fa4]">
                Our team of experts uses a methodology to identify <br /> the
                credit cards most likely to fit your needs. <br /> We examine
                annual percentage rates, annual fees.
              </span>
            </div>
          </div>

          {/* Features section */}
          <div className="lg:mt-40 mt-20 grid lg:grid-cols-2 grid-cols-1justify-center items-center gap-14 lg:px-16 px-10">
            <div>
              <span className="font-semibold text-[40px] leading-[76.8px] tracking-[1%] font-poppins">
                You do the business, <br /> we'll handle the money.
              </span>
              <p className="text-[18px] leading-[30.6px] font-normal mt-5 font-poppins text-[#9e9fa4]">
                With the right credit card, you can improve your financial life{" "}
                <br /> by building credit, earning rewards and saving money. But{" "}
                <br /> with hundreds of credit cards on the market.
              </p>
              <button className="border border-[#59dee4] bg-custom-gradient h-14 px-6 rounded-lg text-[18px] leading-[27px] font-medium mt-10 font-poppins text-[#00040e]">
                Get started
              </button>
            </div>
            <div className="max-w-2xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center gap-4 my-5 lg:px-4 px- rounded-lg ${
                    feature.title === "100% Secured" ? "bg-shield" : ""
                  }`}
                >
                  <div className="border border-[#01131a] bg-[#01131a] rounded-full lg:p-2 p-6">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={30}
                      height={30}
                      // className="lg:w-8 lg:h-8"
                    />
                  </div>
                  <div>
                    <h2 className="lg:text-[18px] mt-4 leading-[23px] font-bold font-poppins tracking-[1%]">
                      {feature.title}
                    </h2>
                    <p className="text-[16px] leading-[24px] font-normal mt-3 font-poppins text-[#9e9fa4] break-words lg:w-[366px] w-[250px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated images */}
        <section className="lg:block hidden">
          <div className="relative" ref={containerRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className="animated-image"
                style={{
                  position: "absolute",
                  ...image.style,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index < 8}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
