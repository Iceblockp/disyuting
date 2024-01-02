import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
AOS.init();

const ProjectHeader = () => {
  return (
    <div className=" flex w-full ">
      <div className=" flex mx-0 lg:mx-[5px] mb-[75px] w-full">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" w-full flex flex-col justify-between gap-[15px] ">
              <div className="">
                <div className=" text-center ">
                  <h4 className=" text-[#CADADD] font-para font-[600] text-[16px] lg:text-[19.2px] 2xl:text-[22px] ">
                    Disyuting Woorked
                  </h4>
                  <h2 className=" text-[#E9FCFF] font-heading font-[900] text-[22px] lg:text-[33.18px] 2xl:text-[64px] ">
                    VISUAL PRODUCTS THAT HAVE BEEN CREATED
                  </h2>
                </div>
              </div>
              <div className=" p-[5px] w-full ">
                <div className=" w-full bg-contain bg-center bg-no-repeat grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-2 gap-[15px] bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/metaverse-digital-cyber-world-technology-man-with-2022-11-18-18-39-06-utc-EDT.png')] lg:h-[500px] lg:gap-[75px]">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className=" w-full items-center"
                  >
                    <div className=" p-[5px] w-full  bg-gradient-to-tr from-[#88939498] to-[#98c0dfce] hover:from-[#a5b3b5ae] hover:to-[#98c0dfe7]  rounded-[5px]  shadow-inner hover:shadow-2xl hover:shadow-[rgba(98,223,245,0.64)] shadow-[rgba(98,223,245,0.5)]  ">
                      <div className=" p-[23px] w-full">
                        <div className=" p-[5px] flex justify-between font-para font-[400] text-[14px] text-text ">
                          <div>360º VR VIDEO</div>
                          <div>30 Min</div>
                        </div>
                        <div className=" p-[5px] mb-[20px] ">
                          <h5 className=" text-[#E9FCFF] font-para font-[600] text-[20px] xl:text-[27.65px] 2xl:text-[52px] leading-[0.87em] ">
                            MODERN CYBER CONDITION
                          </h5>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-[50px] h-[46px] text-[#E9FCFF] "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                    className=" w-full flex items-end"
                  >
                    <div className=" overflow-hidden p-[5px] w-full  rounded-[5px]  btnBlue transparentCart ">
                      <div className=" p-[23px]  w-full">
                        <div className=" p-[5px] flex justify-between font-para font-[400] text-[14px] text-text ">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-[40px] h-[40px] text-[#1E1E37]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className=" p-[5px] flex flex-col gap-[15px] ">
                          <h5 className=" text-[#1E1E37] font-heading font-[900] text-[90px] leading-[0.87em] ">
                            <CountUp end={12000} duration={7} />
                          </h5>
                          <p className=" text-[#1E1E37] text-[15px] font-[400] font-para capitalize">
                            VIEWED
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
  );
};

export default ProjectHeader;
