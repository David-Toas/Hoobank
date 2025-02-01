import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import React from "react";

function Home() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <Features />
        <Testimonial />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default Home;
