import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
AOS.init();

const AboutTop = ({header,title}) => {
  return (
    <div className=" flex w-full  ">
      <div className=" flex mx-0 lg:mx-[5px] w-full my-[100px]">
        <div className=" w-full lg:w-[91%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" py-[30px] ">
              <div className=" px-[5px] ">
                <div className=" py-[5px] flex flex-col gap-[30px] ">
                  <div className=" flex justify-center w-full font-para font-[600] text-accent text-[16px] ">
                    <p>{header}</p>
                  </div>

                  <div 
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  
                   className=" text-center flex justify-center w-full text-white font-heading font-[900] text-[36.49px] md:text-[47.78px] ">
                    <h2 className=" text-center">{title}</h2>

                  </div>
                  <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                   className=" flex justify-center w-full font-para font-[600] text-accent text-[16px] ">
                    <p className=" max-w-[399px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                  <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="2000"
                   className=" flex justify-center w-full text-white ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-[50px] h-[50px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                        />
                      </svg>
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

export default AboutTop;
