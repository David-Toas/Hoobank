import Image from "next/image";
import React from "react";

function Features() {
  return (
    <>
     <Image
            src="/purple.svg"
            alt="square"
            height="514"
            width="645"
            className="absolute top-[1300px] object-contain left-[0px] opacity-100 bg-blend-darken"
          />
     <Image
            src="/Ellipse 2358.png"
            alt="square"
            height="471"
            width="605"
            className="absolute top-[800px] object-contain left-[0px] opacity-100 bg-blend-darken"
          />
      <div className="relative">
        <section className="flex flex-col md:flex-row items-center justify-between px-16 py-16  text-white mt-28">
          {/* Left Content */}
          <div className="relative flex flex-col items-center space-y-6 mt-12 md:mt-0">
            <div className="relative w-full h-full">
              <div className="border border-[#201c28] bg-shield rounded-lg absolute top-[-90px] left-[185px] px-4 z-20">
                <div className="mt-5 flex justify-center items-center gap-3">
                  <div className="border bg-white rounded-full px-2 w-12 h-12 flex items-center justify-center ">
                    <Image
                      src="/paypal.svg"
                      alt="paypal logo"
                      height="39"
                      width="36"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-[24px] leading-[38px] tracking-[1%] font-poppins">
                      Paypal
                    </span>
                    <p className="font-normal text-[12px] leading-[19.2px] tracking-[1%] font-poppins text-[#86848a]">
                      Checkout
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-10 mt-5">
                  <div>
                    <p className="font-normal text-[12px] leading-[16px] tracking-[1%] font-poppins text-[#86848a]">
                      Total
                    </p>
                    <span className="font-medium text-[18px] leading-[23px] tracking-[1%] font-poppins ">
                      $210
                    </span>
                  </div>
                  <div className="border border-cyan-400 rounded-lg flex justify-center items-center w-16 h-8">
                    <p className="font-normal text-[12px] leading-[19px] tracking-[1%] font-poppins text-[#86848a]">
                      Change
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center my-4">
                  <button className="border border-[#59dee4] bg-[#59dee4] h-8px-6 rounded-lg text-[12px] leading-[19px] font-medium font-poppins text-[#00040e] w-40">
                    Make Payment
                  </button>
                </div>
              </div>

              <Image
                src="/Lasttran.svg"
                alt="Last Transaction"
                height="335"
                width="280"
                className="relative top-[45px] left-[0px]"
              />

              <div className="border bg-white text-black absolute bottom-[-67px] left-[160px] rounded-lg w-60 h-10 flex justify-center items-center gap-1">
                <Image src="✅.svg" alt="✅" height="16" width="16" />
                <span className="text-medium text-[12px] leading-[22px] tracking-[1%] font-poppins">
                  Great! Your Payment is succesfully.
                </span>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="max-w-lg space-y-6">
            <h1 className="text-[48px] font-semibold leading-[77px] break-words w-[470px] font-poppins">
              Easily control your billing & invoicing.
            </h1>
            <p className="text-gray-400 break-words w-[430px] text-[18px] font-normal leading-[29px] tracking-[1%]">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div className="flex items-center gap-8">
              <Image src="/appstore.svg" alt="store" height="42" width="129" />
              <Image src="/Gplay.svg" alt="store" height="43" width="144" />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between px-16 py-16  text-white mt-28">
          {/* Left Content */}
          <div className="max-w-lg space-y-6">
            <h1 className="text-[48px] font-semibold leading-[77px] break-words w-[570px] font-poppins">
              Find a better card deal <br /> in few easy steps.
            </h1>
            <p className="text-gray-400 break-words w-[370px]">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
            </p>
            <button className="border border-[#59dee4] bg-custom-gradient h-14 px-6 rounded-lg text-[18px] leading-[27px] font-medium mt-10 font-poppins text-[#00040e]">
              Get started
            </button>
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col items-center space-y-6 mt-12 md:mt-0">
            {/* Background Circular Image */}
            <div className="absolute inset-0 flex items-center justify-center left-[-300px] w-74">
              <div className="w-80 h-80 rounded-full border-[9px] border-[#2f4a52] absolute"></div>
              <div className="w-60 h-60 rounded-full border-[6px] border-[#133f4b] absolute"></div>
              <div className="w-36 h-36 rounded-full border-[3px] border-[#133f4b] absolute"></div>
            </div>

            {/* Cards Positioned on Top */}
            <div className="relative w-full h-full">
              <Image
                src="/Scan.svg"
                alt="Scan Credit Cards"
                height={138}
                width={161}
                className="absolute top-[-15px] left-[-280px]"
              />
              <Image
                src="/Analysis.svg"
                alt="Online Analysis"
                height={200}
                width={206}
                className="relative top-[-40px] left-[-40px]"
              />
              <Image
                src="/Method.svg"
                alt="Pay Method"
                height={120}
                width={232}
                className="absolute bottom-[-97px] left-[-150px]"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Features;
