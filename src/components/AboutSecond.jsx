import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
AOS.init();

const AboutSecond = () => {
  return (
    <div className=" flex w-full  ">
      <div className=" flex mx-0 lg:mx-[5px] w-full mb-[200px]">
        <div className=" w-full lg:w-[91%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" p-[5px] flex flex-col lg:flex-row gap-[30px] ">
              <div className=" flex mb-[50px] flex-col 2xl:flex-row-reverse gap-[30px] w-full lg:w-[62%] bg-no-repeat bg-contain bg-center  bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/young-woman-with-braids-holding-clapper-board-clos-2022-02-08-02-44-23-utcEDTG-1.png')] ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  className=" p-[30px]  rounded-[5px] w-full md:w-[62%]  mx-auto bg-gradient-to-tr from-[#E9FCFF0F] to-[#98C0DFB5] border border-[#62DEF5] shadow-[0px_0px_20px_-20px] hover:shadow-[0px_0px_20px_-5px] shadow-[rgba(98,222,245)] hover:shadow-[rgba(98,222,245)] "
                >
                  <div className=" flex flex-col text-start  ">
                    <div className=" text-[90px] font-bold text-[#E9FCFF] ">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-[56px] h-[56px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                      <div className=" font-heading ">
                        <CountUp end={30928} duration={5} />
                      </div>
                      <p className="  font-para text-accent text-[14px] ">CLIENT TRUSTED</p>
                    </div>

                    <div className=" mt-[15px] flex justify-between items-center text-accent text-[16px] font-para font-[600] ">
                        <div>
                          <p>All Client Happy</p>
                        </div>
                        <div className="w-[133.19px] text-end">
                          <p>And Continues to Increase</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col md:flex-row 2xl:flex-col justify-between p-[5px] gap-[20px] ">
                  <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                   className=" flex flex-col justify-between w-full p-[30px]  md:w-[65%] rounded-[5px] 2xl:w-full  h-[146.71px] bg-cover bg-gradient-to-tr from-[#E9FCFF0F] to-[#98C0DFB5] border border-[#62DEF5] shadow-[0px_0px_20px_-20px] hover:shadow-[0px_0px_20px_-5px] shadow-[rgba(98,222,245)] hover:shadow-[rgba(98,222,245)]  ">
                    <div className=" flex gap-[15px] font-para FONT-[600] text-accent text-[16px] ">
                      <div>Disyuting</div>
                      <div className=" w-[40%] text-end ">Since 2023</div>
                    </div>
                    <div className=" font-heading font-[700] text-[27.65px] text-white ">
                      <h2>PERFORMANCE THAT ALWAYS REMEMBERS</h2>
                    </div>
                  </div>

                  <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                   className=" rounded-[5px] p-[30px]  h-[161.67px] bg-cover w-full md:w-[35%] 2xl:w-[60%] 2xl:self-end bg-gradient-to-tr from-[#E9FCFF0F] to-[#98C0DFB5] border border-[#62DEF5] shadow-[0px_0px_20px_-20px] hover:shadow-[0px_0px_20px_-5px] shadow-[rgba(98,222,245)] hover:shadow-[rgba(98,222,245)] flex justify-center items-center  ">
                    <div className=" max-w-[218px] ">
                    <img src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/logoipsum-286.png" alt="" className=" w-full  " />
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1500"
                className=" p-[5px] lg:p-0 w-full lg:w-[38%] "
              >
                <div className="flex flex-col gap-[30px] items-center justify-center lg:items-start h-full ">
                  <div className="">
                    <div className="w-full text-center text-text font-heading font-[900] text-[47.78px] 2xl:text-[57.33px] md:text-start leading-[1em] tracking-[0.5px] ">
                      CAN WE START COOPERATION?
                    </div>
                  </div>
                  <div className="">
                    <div className=" max-w-[399px] mx-auto font-para font-[400] text-[#D5E8EB] text-[16px] xl:text-[22px] text-center lg:text-start ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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

export default AboutSecond;
