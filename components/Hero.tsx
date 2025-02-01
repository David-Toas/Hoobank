import Image from "next/image";
import React from "react";

const features = [
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

function Hero() {
  return (
    <>
      <Image
        src="/Ellipse 2333.png"
        alt="square"
        height="1851"
        width="608"
        className="absolute top-[-112px] object-contain left-[-65px] opacity-100 bg-blend-darken"
      />
      <Image
        src="/Ellipse.svg"
        alt="square"
        height="771"
        width="605"
        className="absolute top-0 object-contain right-0 opacity-100 bg-blend-darken "
      />
      <Image
        src="/Vector16.svg"
        alt="square"
        height="780"
        width="880"
        className="absolute top-[-150px] object-contain right-[0px] opacity-100 bg-blend-darken"
      />
      <div className="">
        <div>
          <div className="max-w-4xl relative overflow-hidden px-16">
            <div className="">
              <div className="flex justify-center items-center bg-[#222125] max-w-[330px] h-9 rounded-lg text-white text-sm font-normal mb-9">
                <Image src="/Discount.svg" alt="Icon" height="32" width="32" />
                <div className="flex justify-center items-center gap-1">
                  <span className="text-[#e4e4e4]">20%</span>
                  <p className="text-[#909091]">DISCOUNT FOR</p>
                  <span className="text-[#e4e4e4]">1 MONTH </span>
                  <p className="text-[#909091]">ACCOUNT</p>
                </div>
              </div>
              <div className="font-semibold text-[72px] leading-[100px] tracking-[1%] font-Inter">
                The Next
              </div>
              <div className="font-semibold text-[72px] leading-[100px] tracking-[1%] font-Inter bg-custom-gradient-left bg-clip-text text-transparent">
                Generation
              </div>
              <div className="font-semibold text-[72px] leading-[100px] tracking-[1%] font-Inter mb-10 w-full">
                Payment Method.
              </div>
              <span className="text-[18px] leading-[30.6px] font-normal mt-5 font-poppins text-[#9e9fa4]">
                Our team of experts uses a methodology to identify <br /> the
                credit cards most likely to fit your needs. <br /> We examine
                annual percentage rates, annual fees.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10 text-lg font-semibold text-white mt-28">
            <div className="flex items-center space-x-2">
              <span className="text-[40.8px] leading-[53.16px] font-semibold text-white mr-4">
                3800+
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text text-transparent text-[18px] leading-[30.6px] font-normal font-poppins">
                USER ACTIVE
              </span>
            </div>

            <div className="h-3 w-px bg-gray-500"></div>
            <div className="flex items-center space-x-2">
              <span className="text-[40.8px] leading-[53.16px] font-semibold text-white mr-4">
                230+
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text text-transparent text-[18px] leading-[30.6px] font-normal font-poppins">
                TRUSTED BY COMPANY
              </span>
            </div>
            <div className="h-3 w-px bg-gray-500"></div>
            <div className="flex items-center space-x-10">
              <span className="text-[40.8px] leading-[53.16px] font-semibold text-white mr-4">
                $230M+
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text text-transparent text-[18px] leading-[30.6px] font-normal font-poppins">
                TRANSACTION
              </span>
            </div>
          </div>

          <div className="mt-40 grid grid-cols-2 justify-center items-center gap-14 px-16">
            <div>
              <span className="font-semibold text-[40px] leading-[76.8px] tracking-[1%] font-poppins">
                You do the business, <br /> we’ll handle the money.
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
                  className={`flex justify-center items-center gap-4 my-5 p-4 rounded-lg ${
                    feature.title === "100% Secured" ? "bg-shield" : ""
                  }`}
                >
                  <div className="border border-[#01131a] bg-[#01131a] rounded-full p-3 5">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div>
                    <h2 className="text-[18px] leading-[23px] font-bold font-poppins tracking-[1%]">
                      {feature.title}
                    </h2>
                    <p className="text-[16px] leading-[24px] font-normal mt-3 font-poppins text-[#9e9fa4] break-words w-[366px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section>
          <div className="relative">
            <Image
              src="get.svg"
              alt="Get Started"
              height="120"
              width="120"
              className="absolute top-[-1100px] right-[700px]"
            />
            <Image
              src="Vector.svg"
              alt="sphere"
              height="90"
              width="90"
              className="absolute top-[-1300px] right-[500px]"
            />
            <Image
              src="Vector2.svg"
              alt="sphere"
              height="65"
              width="65"
              className="absolute top-[-1000px] right-[150px]"
            />
            <Image
              src="Vector3.svg"
              alt="sphere"
              height="35"
              width="35"
              className="absolute top-[-940px] right-[500px]"
            />
            <Image
              src="robothand.svg"
              alt="robothand"
              height="444"
              width="669"
              className="absolute top-[-1150px] right-0"
            />
            <Image
              src="card.svg"
              alt="card"
              height="250"
              width="350"
              className="absolute top-[-1275px] right-[190px]"
            />
            <Image
              src="card2.svg"
              alt="card"
              height="250"
              width="450"
              className="absolute top-[-1250px] right-[130px]"
            />
            <Image
              src="card3.svg"
              alt="card"
              height="250"
              width="350"
              className="absolute top-[-1140px] right-[180px]"
            />
          </div>
        </section>

        <div></div>
      </div>
    </>
  );
}

export default Hero;
