import React from "react";

function Services() {
  return (
    <div className="px-16">
      <div className="border-[#434e5d] bg-gradient-to-tr from-[#100f1c] to-[#404046] mx-auto max-w-6xl lg:h-[240px] rounded-2xl my-20">
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-40 gap-5 px-10 pb-9">
          <div className="mt-14">
            <span className="font-poppins lg:text-[48px] text-[50px]  leading-[67px] font-semibold">
              Let’s try our service now!
            </span>

            <p className="font-normal text-[18px] leading-[29px] break-words lg:w-[400px] w-[300px] tracking-[1%] font-poppins text-[#9e9fa4] mt-5">
              Everything you need to accept card payments and grow your
              business anywhere on the planet.
            </p>
          </div>
          <button className="border border-[#59dee4] bg-custom-gradient h-14 px-6 rounded-lg text-[18px] leading-[27px] font-medium mt-10 font-poppins text-[#00040e]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
