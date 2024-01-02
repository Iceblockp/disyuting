import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const PhotoInput = () => {
  return (
    <div className="w-full flex mb-[200px]">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] 2xl:max-w-[1620px] mx-auto">
          <div className=" w-full px-[30px] lg:px-0 py-[10px] lg:py-[5px]">
            <div className="flex w-full">
              <div className="flex mx-0 sm:p-10 md:px-5 lg:mx-[5px] w-full">
                <div className="w-full mx-auto h-full">
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-10  xl:gap-x-[100px] py-8">
                    <div className="md:w-full col-span-1 md:col-span-2 lg:col-span-4 flex">
                      <div className=" lg:w-[810px] mx-auto flex justify-center items-center text-center">
                        <div className="lg:text-start mt-auto  text-center">
                          <h3 className="md:p-5 lg:p-0 uppercase xl:text-[64px] text-[30px] tracking-[0.5px] leading-[1em] font-bold font-heading text-white">
                            we created high quality visuals with the services
                            provided
                          </h3>
                          <p className=" font-para text-white xl:text-[20px] ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Odio quisquam ex sapiente consequuntur?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-duration="2500"
                      className="md:w-full col-span-1 md:col-span-2 lg:col-span-6 "
                    >
                      <div className=" bg-cover bg-center rounded-lg relative z-50 xl:h-[650px] h-[163px] bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/side-view-of-cyberpunk-girl-in-black-leather-cloth-2022-02-03-00-22-06-utc.jpg')] ">
                        <div className="relative">
                          <div>
                            <p className=" text-[16px] font-para font-bold mt-5 p-5 text-white ">
                              Discover more of our visual results
                            </p>
                            <div className="p-5 lg:mt-[480px] relative">
                              <input
                                placeholder="Search..."
                                className="shadow-[0_0px_20px_0px] backdrop-blur-md hover:shadow-[#62DEF5] bg-slate-200 bg-opacity-10 p-3 w-full caret-slate-200 rounded-3xl"
                                type="search"
                              />
                              <button className="flex justify-center items-center btnBlue rounded-3xl top-[23%] right-5 w-[64px] h-[49px] absolute">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos-duration="2500"
                    data-aos-once="true"
                    data-aos="fade-up"
                  >

                    <div className=" grid grid-cols-1 md:grid-cols-7 text-center border-t-transparent border-r-transparent transparentCart backdrop-blur-sm">
                      <div className=" grid grid-cols-6 col-span-1 md:col-span-6 xl:p-16">
         <div className=" backdrop-blur-lg grid grid-cols-1 md:grid-cols-7 text-center border border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart  rounded-lg">
                      <div className=" grid grid-cols-6 col-span-1 md:col-span-6 p-7">

                        <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 py-4 px-4">
                          <div className=" mx-auto text-start">
                            <h4 className=" text text-white xl:text-[23px] font-bold mb-2 ">
                              Short Movie
                            </h4>
                            <p className=" text-white">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 py-4 px-4">
                          <div className=" mx-auto text-start">
                            <h4 className=" text text-white xl:text-[23px] font-bold mb-2 ">
                              Documenter
                            </h4>
                            <p className=" text-white">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 py-4 px-4">
                          <div className=" mx-auto text-start">
                            <h4 className=" text text-white xl:text-[23px] font-bold mb-2 ">
                              Advertising
                            </h4>
                            <p className=" text-white">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 py-4 px-4">
                          <div className=" mx-auto text-start">
                            <h4 className=" text text-white xl:text-[23px] font-bold mb-2  ">
                              Photography
                            </h4>
                            <p className=" text-white">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 py-4 px-4">
                          <div className=" mx-auto text-start">
                            <h4 className=" text text-white xl:text-[23px] font-bold mb-2 ">
                              Broadcasting
                            </h4>
                            <p className=" text-white">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 py-4 px-4">
                          <div className=" mx-auto text-start">
                            <h4 className=" text text-white xl:text-[23px] font-bold mb-2 ">
                              360º Visual
                            </h4>
                            <p className=" text-white">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex col-span-1 items-center btnBlue">
                        <div className="mx-auto lg:w-[203px]">
                          <div className=" mx-auto">
                            <div className=" py-5">
                              <div className=" mx-auto">
                                <div className=" flex justify-center items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10 bg-black rounded-3xl text-white "
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                                    />
                                  </svg>
                                </div>
                                <p className="justify-center items-center text-center text-black font-para text-[25px]">
                                  Explore
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoInput;
