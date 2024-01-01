import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
AOS.init();

const Production = () => {
  return (
    <div className=" flex w-full  ">
      <div className=" flex mx-0 lg:mx-[5px] w-full mb-[200px]">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" p-[5px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 md:gap-[40px] ">
              <div className=" flex mb-[50px] flex-col gap-[30px] col-span-1 xl:col-span-5 bg-no-repeat bg-contain bg-[70%] bg-[url(https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/director-chair-and-clapper-board-and-megaphone-in-2023-03-28-21-06-41-utc-EDITED.png)] ">
                <div data-aos="fade-up"
                data-aos-duration="1000" className=" p-[30px] h-[193px] rounded-[5px] md:mt-[30px] w-full md:max-w-[214.74px] md:h-[272px] mx-auto bg-gradient-to-tr from-[#E9FCFF0F] to-[#98C0DFB5] border border-[#62DEF5] shadow-[0px 12px 26px 5px] bg-[rgba(98,222,245,0.4)] ">
                  <div className=" flex flex-col gap-[15px] text-center  ">
                    <div className="  leading-[1.1em] text-[90px] font-para font-bold text-[#E9FCFF] ">
                      <CountUp end={20} duration={5} />+
                    </div>
                    <h4 className=" font-para font-[400] text-[15px] text-[#CADADD] ">
                      Years Experience
                    </h4>
                  </div>
                </div>
                <div className=" -mb-[50px] md:max-w-[299.96px] rounded-[5px]  h-[160px] bg-cover w-full bg-[url(https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/film-camera-crew-consulting-newly-taken-footage-2022-12-16-11-42-27-utc.jpeg)] "></div>
              </div>

              <div
              data-aos="fade-left"
              data-aos-duration="1000"
               className=" p-[5px] md:max-w-[365.99px] xl:max-w-[465px] col-span-1 xl:col-span-7 ">
                <div className="">
                  <div className=" max-w-[405px] text-center text-[#CADADD] font-para font-[600] text-[16px] xl:text-[22px] md:text-start ">
                    Project Production
                  </div>
                </div>
                <div className="">
                  <div className=" max-w-[405px] xl:max-w-full text-center text-text font-heading font-[900] text-[23px] xl:text-[64px] md:text-start leading-[1em] tracking-[0.5px] ">
                    HAS EXPERIENCE WITH VARIOUS FIELD CONDITIONS
                  </div>
                </div>
                <div className="">
                  <div className=" font-para font-[400] text-[#D5E8EB] text-[16px] xl:text-[22px] text-center md:text-start ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

export default Production;
