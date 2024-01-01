import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
AOS.init();

const Header = () => {
  return (
    <div className=" flex w-full ">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" w-full flex flex-col md:flex-row justify-between gap-[15px] ">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
                data-aos-delay="2000"
                className="  p-[30px] ps-0 w-full md:w-[35%] lg:w-[30%] "
              >
                <div className=" text-[#E9FCFF] capitalize font-heading font-[900] text-[36.49px] md:text-[47.78px] ">
                  CREATIVE PRODUCTION HOUSE
                </div>
              </div>
              <div className=" p-[5px] w-full md:w-[60%]  ">
                <div className=" w-full bg-contain bg-center bg-no-repeat grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-2 gap-[15px] bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/metaverse-digital-cyber-world-technology-man-with-2022-11-18-18-39-06-utc-EDT.png')] 3xl:h-[700px] ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className=" w-full items-center"
                  >
                    <div className=" p-[5px] w-full  bg-gradient-to-tr from-[#88939498] to-[#98c0dfce] hover:from-[#a5b3b5ae] hover:to-[#98c0dfe7]  rounded-[5px]  shadow-inner hover:shadow-2xl hover:shadow-[rgba(98,223,245,0.64)] shadow-[rgba(98,223,245,0.5)]  ">
                      <div className=" p-[23px] w-full">
                        <div className=" p-[5px] flex justify-between font-para font-[400] text-[14px] text-text ">
                          <div>Disyuting</div>
                          <div>The Best Service</div>
                        </div>
                        <div className=" p-[5px] ">
                          <h5 className=" text-[#E9FCFF] font-heading font-[900] text-[90px] leading-[0.87em] ">
                            360º VR VIDEO
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                    className=" w-full flex items-center"
                  >
                    <div className=" overflow-hidden p-[5px] w-full bg-gradient-to-tr from-secondary to-primary hover:from-secondary hover:to-[#4a91c4]  rounded-[5px]  shadow-inner hover:shadow-2xl hover:shadow-[rgba(98,223,245,0.64)] shadow-[rgba(98,223,245,0.5)] ">
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
                            <CountUp end={7892} duration={7} />
                          </h5>
                          <p className=" text-[#1E1E37] text-[15px] font-[400] font-para capitalize">
                            CLIENT TRUSTED
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

    // shadow  0px 12px 26px 5px rgba 98 222 245 0.4
  );
};

export default Header;
