import React from "react";
import Aos from "aos";
Aos.init();

const SecSection2 = () => {
  return (
    <div className="w-full flex mb-[200px]">
      <div className="flex mx-0 lg:mx-[5px] w-full">
        <div className="w-full lg:w-[89%] 2xl:max-w-[1620px] mx-auto">
          <div className="w-full px-[30px] lg:px-0 py-[10px] lg:py-[5px]">
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <div className="">
                      <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className=" w-full grid grid-cols-1 md:grid-cols-3 text-center md:text-start gap-4  "
                      >
                        {/* first component */}
                        <div className=" w-full  xl:w-[402.5px] sm:mb-4">
                          <div className="  xl:mb-4">
                            <h2 className=" text-white text-2xl md:text-6xl font-heading font-extrabold select-none sm:mb-2">
                              ABOUT DISYUTING
                            </h2>
                          </div>
                          <div className=" w-full flex md:block justify-center">
                            <div className=" flex gap-3 items-center text-center ">
                              <div className=" group">
                                <a href="https://www.youtube.com/watch?v=MLpWrANjFbI&list=TLGG9m1lwPUk9SEyODEyMjAyMw">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 p-1 pointer-events-none bg-custom-blue rounded-full flex justify-center items-center text-center group-hover:bg-cyan-600"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                                    />
                                  </svg>
                                </a>
                              </div>

                              <div className="">
                                <div className="w-24 ">
                                  <p className="text-slate-300 select-none">
                                    This Story is Packaged in Video Form
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* sec component */}
                        <div className=" xl:w-[402.5px] sm:mb-5">
                          <div className="">
                            <div className=" xl:mb-3">
                              <div className="">
                                <h2 className=" text-slate-100 font-heading text-2xl font-bold select-none sm:text-[18px] sm:mb-2">
                                  Motion and Still Production
                                </h2>
                              </div>
                            </div>

                            <div className="">
                              <div className="">
                                <p className="text-slate-300 select-none leading-relaxed">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* third component */}
                        <div className=" xl:w-[402.5px] sm:mb-5">
                          <div className="">
                            <div className=" xl:mb-3">
                              <div className="">
                                <h2 className="text-slate-100 font-heading text-xl font-bold select-none sm:text-[18px] sm:mb-2">
                                  Comes from Bali Island
                                </h2>
                              </div>
                            </div>

                            <div className="">
                              <div className="">
                                <p className="text-slate-300 select-none leading-relaxed">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
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

export default SecSection2;
