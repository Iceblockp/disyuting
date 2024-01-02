import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
AOS.init();

const AboutJourney = () => {
  return (
    <div className=" flex w-full  ">
      <div className=" flex mx-0 lg:mx-[5px] w-full mb-[200px]">
        <div className=" w-full lg:w-[91%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            {/* start  */}
            <div className=" flex flex-col 2xl:flex-row gap-[30px]">
              {/* First  */}
              <div data-aos="fade-up"
              data-aos-duration="1000"
               className=" p-[5px] flex flex-col gap-[15px] w-full 2xl:w-[30%] ">
                <div className=" p-[5px]">
                  <div className=" text-center lg:text-start ">
                    <h3 className=" mb-[15px] text-[#CADADD] text-[19.2px] font-para font-[600] 2xl:text-[22px] ">
                      About
                    </h3>
                    <h2 className=" text-[#E9FCFF] font-heading font-[900] text-[27.65px] 2xl:text-[52px] leading-[1em] tracking-[0.5px] ">
                      JOURNEY INTO FILMMAKING EXCELLENCE
                    </h2>
                  </div>
                </div>

                <div className=" w-full flex flex-col md:flex-row 2xl:flex-col gap-[15px] ">
                  <div className=" text-center p-[5px] lg:text-start ">
                    <h3 className=" mb-[15px] text-[#CADADD] font-heading font-[700] text-[23.04px] 2xl:text-[33px] ">
                      MOTION AND STILL PRODUCTION
                    </h3>
                    <p className=" text-[#D5E8EB] font-para font-[400] text-[16px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className=" text-center p-[5px] lg:text-start ">
                    <h3 className=" mb-[15px] text-[#CADADD] font-heading font-[700] text-[23.04px] 2xl:text-[33px] ">
                      COME FROM BALI ISLAND
                    </h3>
                    <p className=" text-[#D5E8EB] font-para font-[400] text-[16px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* second  */}

              <div className=" w-full 2xl:w-[70%] p-[5px] flex flex-col gap-[30px] ">
                <div className=" w-full flex flex-col md:flex-row gap-[30px] ">
                  {/* image  */}

                  <div                    
                  data-aos="fade-left"
                  data-aos-duration="1000" className=" formShadow bg-cover bg-center rounded-[5px] h-[238.33px] 2xl:h-[282px] w-full md:w-[60%] p-[5px] bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/behind-the-scenes-of-video-production-in-studio-wh-2022-11-16-18-06-36-utc-800x283.jpg')] "></div>
                  {/* letter  */}
                  <div 
                    data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                    className=" w-full md:w-[40%] p-[30px] rounded-[5px] full border  border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm  ">


                  
                   
                    <div className=" flex justify-center items-center ">
                      <div className=" text-center">
                        <h2 className=" font-sans font-[900] text-white text-[90px] ">
                          <CountUp end={20} duration={5} />+
                        </h2>
                        <p className=" font-para font-[400] text-[#CADADD] text-[15px] ">
                          Years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full flex flex-col md:flex-row gap-[30px] ">
                  {/* letter  */}

                  <div data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="1000" className=" w-full md:w-[40%] p-[30px] rounded-[5px] full border  border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm ">

                  <div 
                  
                   
                    <div className=" mb-[16px]">
                      <img
                        className=" w-[94.73px] h-[94.73px] "
                        src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Holo_Effect_02.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className=" mt-[8px] mb-[5px] text-[19.2px] text-[#E9FCFF] font-para font-[600] ">
                        Best Team Creative
                      </h5>
                      <p className=" font-para font-[400] text-[#D5E8EB] text-[16px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  {/* image  */}
                  <div 
                   data-aos="fade-left"
                   data-aos-duration="1000"
                   data-aos-delay="1500" className=" rounded-[5px] h-[238.33px] 2xl:h-[282px] formShadow bg-cover bg-center w-full md:w-[60%] p-[5px] bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/edit-video-production-control-panel-in-studio-edi-2022-09-28-21-45-01-utc-e1700727111716.jpg')] "></div>

                   
                    
                </div>
              </div>
            </div>
            {/* end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;
