import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({});
const Pricelist = () => {
  return (
    <div className=" pb-[200px] ">
      <div className="mx-auto p-1 w-[1305px] max-[1395px]:w-[89%]  ">
        <div className="flex flex-col min-[1425px]:flex-row gap-[50px] max-[1012px]:flex-col-reverse  ">
          <div className=" w-[67%] max-[770px]:w-[100%] h-[980px] max-[1012px]:h-auto bg-contain bg-no-repeat bg-center bg-[url(https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/happy-black-female-listening-music-with-digital-ta-2023-03-23-03-44-16-utcEDT-1.png)] flex items-end max-[1012px]:items-start flex-row max-[1012px]:flex-col gap-[30px]">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay=""
              className="w-[31%] max-[1012px]:w-[100%] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm"
            >
              <div className=" p-[30px]">
                <h1
                  className=" text-xl max-sm:text-lg leading-16 font-bold font-para uppercase text-center"
                  style={{ color: "#D5E8EB" }}
                >
                  Standard
                </h1>
                <p
                  className=" text-lg md:text-base  font-para md:leading-6 max-sm:text-center mb-[25px] text-center"
                  style={{ color: "#D5E8EB" }}
                >
                  A small river named Duden flows by their place and supplies
                </p>
                <div className=" text-8xl font-black font-heading text-white flex uppercase items-center  py-[8px] mb-[30px] flex-col max-[1012px]:flex-row max-[1012px]:justify-center">
                  <span className="mx-auto max-[1012px]:mx-0">$</span>
                  <span className="text-center"> 5.99</span>
                </div>
                <div className="mb-[50px]  ">
                  <ul className="">
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="max-[1040px]:w-[50px] max-[1012px]:w-auto text-center">
                        Basic Script
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center "
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="max-[1040px]:w-[50px] max-[1012px]:w-auto text-center">
                        Basic Editing
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FACE36"
                        className="w-7 h-7 pr-[10px] max-[1387px]:pr-[0px] pb-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      <div className=" max-[1387px]:w-[120px] text-center max-[1012px]:w-auto">
                        Professional Director
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7 flex mb-[3px] justify-center "
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FACE36"
                        className="w-7 h-7 pr-[10px] max-[1387px]:pr-[0px] pb-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      <div className=" max-[1387px]:w-[120px] text-center max-[1012px]:w-auto">
                        Professional Gear
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className=" rounded-full font-semibold text-sm font-para  px-[41px] py-[11px]  max-[1248px]:px-[50px] max-[1248px]:rounded-3xl btnBlue flex mx-auto max-[1200px]:px-[40px] max-[1100px]:px-[34px] max-[1012px]:py-[14px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="w-[31%] max-[1012px]:w-[100%] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm"
            >
              <div className=" p-[30px]">
                <h1
                  className=" text-xl max-sm:text-lg leading-16 font-bold font-para uppercase text-center"
                  style={{ color: "#D5E8EB" }}
                >
                  business
                </h1>
                <p
                  className=" text-lg md:text-base  font-para md:leading-6 max-sm:text-center mb-[25px] text-center"
                  style={{ color: "#D5E8EB" }}
                >
                  A small river named Duden flows by their place and supplies
                </p>
                <div className=" text-8xl font-black font-heading text-white flex uppercase  items-center py-[8px] mb-[30px] flex-col max-[1012px]:flex-row max-[1012px]:justify-center ">
                  <span className="mx-auto max-[1012px]:mx-0">$</span>
                  <span className="text-center"> 5.99</span>
                </div>
                <div className="mb-[50px]  ">
                  <ul className="">
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px]  pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Basic Script
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center "
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="max-[1240px]:w-[80px] text-center max-[1012px]:w-auto">
                        Medium Editing
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px] pb-2 max-[1387px]:pr-[0px] "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className=" max-[1387px]:w-[120px] text-center max-[1012px]:w-auto">
                        Professional Director
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7 flex mb-[3px] justify-center "
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FACE36"
                        className="w-7 h-7 pr-[10px] max-[1387px]:pr-[0px] pb-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      <div className=" max-[1387px]:w-[120px] text-center max-[1012px]:w-auto">
                        Professional Gear
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className=" rounded-full font-semibold text-sm font-para  px-[41px] py-[11px]  max-[1248px]:px-[50px] max-[1248px]:rounded-3xl btnBlue flex mx-auto max-[1200px]:px-[40px] max-[1100px]:px-[34px]  max-[1012px]:py-[14px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="w-[31%] max-[1012px]:w-[100%] overflow-hidden  border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm"
            >
              <div className=" p-[30px]">
                <h1
                  className=" text-xl max-sm:text-lg leading-16 font-bold font-para uppercase text-center "
                  style={{ color: "#D5E8EB" }}
                >
                  professional
                </h1>
                <p
                  className=" text-lg md:text-base  font-para md:leading-6 max-sm:text-center mb-[25px] text-center"
                  style={{ color: "#D5E8EB" }}
                >
                  A small river named Duden flows by their place and supplies
                </p>
                <div className="h-auto text-8xl font-black font-heading text-white flex uppercase  py-[8px] mb-[30px] flex-col  items-center max-[1012px]:flex-row max-[1012px]:justify-center">
                  <span className="mx-auto max-[1012px]:mx-0">$</span>
                  <span className="text-center"> 5.99</span>
                </div>
                <div className="mb-[50px]">
                  <ul className=" leading-7">
                    <li
                      className="text-lg md:text-base   font-para md:leading-6 max-sm:text-center mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className=" max-[1200px]:w-[80px] text-center max-[1012px]:w-auto">
                        Detailed Script
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7 mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px] max-[1210px]:pr-[0px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="max-[1310px]:w-[90px] text-center max-[1012px]:w-auto">
                        Excellent Editing
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px]  max-[1387px]:pr-[0px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className=" max-[1387px]:w-[120px] text-center max-[1012px]:w-auto">
                        Professional Director
                      </div>
                    </li>
                    <li
                      className="text-lg md:text-base  font-para leading-7  mb-[6px] flex justify-center"
                      style={{ color: "#D5E8EB" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#62def5"
                        className="w-7 h-7 pr-[10px]  max-[1387px]:pr-[0px] pb-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className=" max-[1387px]:w-[120px] text-center max-[1012px]:w-auto">
                        Professional Gear
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className=" rounded-full  font-semibold text-sm font-para  px-[41px] py-[11px] max-[1248px]:px-[50px] max-[1248px]:rounded-3xl btnBlue flex mx-auto max-[1200px]:px-[40px] max-[1100px]:px-[34px]  max-[1012px]:py-[14px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className=" w-[31%] max-[1395px]:w-[60%]  max-[1012px]:w-[100%]"
          >
            <div className=" flex flex-col gap-[15px]  ">
              <div className="mt-[300px] max-[1420px]:mt-[0px]">
                <h1 className="w-[60%]  text-6xl font-bold tracking-wide font-heading text-white flex uppercase max-[1395px]:w-[100%] max-[1012px]:text-5xl max-[770px]:text-4xl">
                  PRICELIST PRODUCE CATEGORY
                </h1>
              </div>
              <p
                className=" text-lg md:text-base  max-[770px]:text-base font-para max-[770px]:leading-6  mb-[25px] max-[1012px]:mb-0 max-[1400px]:w-[70%] max-[1012px]:w-[100%]"
                style={{ color: "#D5E8EB" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className=" rounded-full font-semibold text-sm font-para  px-[24px] py-[12px] btnBlue  w-[150px] ">
                See All Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
