import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
import AccordianPart from "./AccordianPart";
AOS.init();

const AboutAccordian = () => {
  return (
    <div className=" flex w-full  ">
      <div className=" flex mx-0 lg:mx-[5px] w-full mb-[200px]">
        <div className=" w-full lg:w-[91%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" p-[5px] flex flex-col lg:flex-row gap-[30px] ">
              <div className=" flex mb-[50px] flex-col md:flex-row gap-[30px] w-full lg:w-[57%] bg-no-repeat bg-center bg-[70%_auto]  bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/a-videographer-onstage-at-a-concert-filming-a-band-2022-11-01-04-36-10-utc-EDT-1.png')] ">
                <div className=" w-full flex items-center md:w-[57%] ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className=" p-[30px]  rounded-[5px] w-full  mx-auto border  border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm  "
                  >
                    <div className=" font-heading font-[900] text-[#E9FCFF] text-[33.18px] ">
                      <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col w-full md:w-[43%]  2xl:flex-col justify-between p-[5px] gap-[20px] ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className=" flex flex-col justify-between w-full p-[30px]  2xl:w-[70%] bg-cover  border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm  "
                  >
                    <div className=" text-white mb-[32px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[40px] h-[40px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </div>
                    <div className=" font-para font-[600] text-[23px] text-white ">
                      <h2>PROVIDE THE BEST QUALITY</h2>
                    </div>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                    className=" rounded-[5px] p-[30px] bg-cover w-full 2xl:w-full 2xl:self-endborder  border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm   "
                  >
                    <div className=" text-white mb-[32px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[40px] h-[40px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    <div className=" overflow-hidden  font-para font-[600] text-[23px] text-white ">
                      <h2>OUR GOAL IS TO REACH THE INTERNATIONAL</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full lg:w-[43%] lg:flex lg:items-center ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  className=" rounded-[5px] p-[5px] bg-cover   w-full border  border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm   flex flex-col gap-[10px] "
                >
                  <AccordianPart title={"What is a cinematic video?"} />
                  <AccordianPart title={"How can I use your services?"} />
                  <AccordianPart title={"What a 360° Visual Video?"} />
                  <AccordianPart
                    title={"How to get Collaboration with Disyuting?"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAccordian;
