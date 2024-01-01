import React from "react";

const Footer = () => {
  return (
    <div className=" flex w-full bg-[#1e1e37]">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto pt-[50px]">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className="flex flex-row max-lg:flex-col gap-[20px] max-lg:mb-[30px] ">
              <div className="flex flex-row max-md:flex-col gap-[20px] w-[40%] max-lg:w-full  ">
                <div className="flex flex-col  gap-[30px] p-[5px] w-full max-md:w-[25%] max-sm:w-full max-md:mx-auto max-lg:text-center h-full">
                  <div className="font-para text-[#cadadd] font-bold">
                    <h1>Info</h1>
                  </div>
                  <div className="max-lg:text-center ">
                    <ul className=" ">
                      <li
                        className="font-para text-[#cadadd] text-sm pb-[5px] flex hover:text-[#62DEF5] 
                       justify-start max-md:justify-center  "
                      >
                        <span className=" ">Home</span>
                      </li>
                      <li className="font-para text-[#cadadd] text-sm pb-[5px] mt-[5px] hover:text-[#62DEF5] max-md:justify-center flex">
                        <span className="text-start">About</span>
                      </li>
                      <li className="font-para text-[#cadadd] text-sm mt-[5px] hover:text-[#62DEF5] flex max-md:justify-center">
                        <span className="text-start">Our project</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] p-[5px] w-full max-md:w-[25%] max-md:mx-auto max-sm:w-full max-md:text-center h-full">
                  <div className="font-para text-[#cadadd] font-bold">
                    <h1>Help</h1>
                  </div>
                  <div>
                    <ul className="">
                      <li className="font-para max-md:justify-center text-[#cadadd] text-sm pb-[5px] flex hover:text-[#62DEF5]">
                        <span className="text-start">FAQs</span>
                      </li>
                      <li className="font-para max-md:justify-center text-[#cadadd] text-sm pb-[5px] mt-[5px]  flex hover:text-[#62DEF5]">
                        <span className="text-start">Contact Us</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] p-[5px] w-full max-md:w-[25%] max-md:mx-auto max-md:text-center max-sm:w-full h-full">
                  <div className="font-para text-[#cadadd] font-bold">
                    <h1>Menu</h1>
                  </div>
                  <div>
                    <ul>
                      <li className="font-para text-[#cadadd] text-sm max-md:justify-center pb-[5px] flex hover:text-[#62DEF5]">
                        <span className="text-start">Our Pricing</span>
                      </li>

                      <li className="font-para text-[#cadadd] text-sm max-md:justify-center mt-[5px] flex hover:text-[#62DEF5]">
                        <span className="text-start">Our Service</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] p-[5px] w-full  max-md:mx-auto max-sm:w-full max-md:text-center h-full">
                  <div className="font-para text-[#cadadd] font-bold justify-start">
                    <h1>Company</h1>
                  </div>
                  <div className="">
                    <ul>
                      <li className="font-para text-[#cadadd] text-sm hover:text-[#62DEF5] flex max-md:justify-center">
                        <span className="text-start">Our Team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col max-md:mt-[50px] gap-[10px] p-[5px] w-[60%] max-lg:w-full h-full">
                <div className=" flex justify-end max-lg:justify-center">
                  <img
                    className=" max-w-[110px] max-md:w-[80px] "
                    src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Template_Kit_Logo-removebg-preview-e1700624955333.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-end max-lg:justify-center">
                  <p className=" font-heading font-[900] text-[23.04px] 2xl:text-3xl max-md:text-xl tracking-[0.5px] text-text leading-[1em] ">
                    DISYUTING
                  </p>
                </div>
                <div className="flex justify-end max-md:justify-center">
                  <button className=" w-[30px] h-[30px]  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      viewBox="0 0 512 512"
                      className="fill-white hover:fill-[#62DEF5]"
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </button>

                  <button className=" w-[30px] h-[30px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      viewBox="0 0 576 512"
                      className="fill-white hover:fill-[#62DEF5]"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </button>

                  <button className=" w-[30px] h-[30px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 448 512"
                      className="fill-white hover:fill-[#62DEF5]"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </button>

                  <button className=" w-[30px] h-[30px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 448 512"
                      className="fill-white hover:fill-[#62DEF5]"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-[#d5e8ebd2]  opacity-15 p-[5px]">
              <hr />
            </div>

            <div className="p-[5px] flex justify-between">
              <div>
                <p className="font-para text-[#cadadd] text-sm pb-[5px] ">
                  Admin@Casloop.Net
                </p>
              </div>
              <div>
                <p className="font-para text-[#cadadd] text-sm pb-[5px] ">
                  Copyright ©2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
