import React from "react";

function Services() {
  return (
    <div className="border-[#434e5d] bg-gradient-to-tr from-[#100f1c] to-[#404046] mx-auto max-w-6xl h-[240px] rounded-2xl my-20">
      <div className="flex justify-center items-center gap-40">
        <div className="mt-14">
          <span className="font-poppins text-[48px] leading-[67px] font-semibold">
            Let’s try our service now!
          </span>

          <p className="font-normal text-[18px] leading-[29px] tracking-[1%] font-poppins text-[#9e9fa4] mt-5">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>
        <button className="border border-[#59dee4] bg-custom-gradient h-14 px-6 rounded-lg text-[18px] leading-[27px] font-medium mt-10 font-poppins text-[#00040e]">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Services;
