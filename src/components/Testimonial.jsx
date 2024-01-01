import React, { useState } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
AOS.init();


const Testimonial = () => {
  const [percent, setPercent] = useState(0);

  const handle = (no) => {
    setPercent(no);
  };

  return (
    <div className=" flex w-full ">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className="">
              <div className=" p-[5px] flex mb-[50px] ">
                <div className=" mx-auto w-[93%] flex flex-col  gap-[15px] ">
                  <div className=" text-center font-para font-[600] text-accent text-[16px] 2xl:text-[19.2px] ">
                    <h4>Our Testimonial</h4>
                  </div>
                  <div className=" text-center font-heading font-[900] text-[#E9FCFF] text-[22px] md:text-[33.18px] 2xl:text-[64px] leading-[1em] tracking-[0.5px] ">
                    <h2>THERE STATEMENTS REGARDING DISYUTING</h2>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up"
              data-aos-duration="1000"
               className=" mb-[200px] p-[30px] overflow-hidden bg-[#5f505018] hover:bg-gradient-to-tr from-[#E9FCFF0F] to-[#98C0DFB5] border border-[#E9FCFF0F] rounded-[5px] hover:shadow-[0px_0px_15px_-5px] hover:shadow-[#7ce6f7] ">
                <div
                  className={` h-[297.29px] w-[400%] lg:w-full flex duration-300 `}
                  style={{ transform: `translateX(-${percent}%)` }}
                >
                  {/* one  */}
                  <div className=" p-[30px] h-full flex flex-col justify-between ">
                    <div className="  "></div>
                    <div className=" mb-[30px] ">
                      <h5 className=" font-para font-[400] text-[16px] text-[#D5E8EB] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </h5>
                    </div>
                    <div className="flex">
                      <div className=" mr-[15px] ">
                        <img
                          className=" w-[70px] h-[70px] rounded-[35px] "
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/people-with-pet-2022-11-14-07-04-59-utc-e1700646457679-1024x1024.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex items-center">
                        <div>
                          <h2 className=" text-[#E9FCFF] font-para font-[600] text-[18px] ">
                            Alicerie
                          </h2>
                          <p className=" text-accent text-[14px] font-para font-[500] ">
                            Entrepreneur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* one  */}
                  <div className=" p-[30px] h-full flex flex-col justify-between ">
                    <div className="  "></div>
                    <div className=" mb-[30px] ">
                      <h5 className=" font-para font-[400] text-[16px] text-[#D5E8EB] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </h5>
                    </div>
                    <div className="flex">
                      <div className=" mr-[15px] ">
                        <img
                          className=" w-[70px] h-[70px] rounded-[35px] "
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/people-2022-11-15-17-19-27-utc-e1700646429577-1536x1536.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex items-center">
                        <div>
                          <h2 className=" text-[#E9FCFF] font-para font-[600] text-[18px] ">
                            Alicerie
                          </h2>
                          <p className=" text-accent text-[14px] font-para font-[500] ">
                            Entrepreneur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* one  */}
                  <div className=" p-[30px] h-full flex flex-col justify-between ">
                    <div className="  "></div>
                    <div className=" mb-[30px] ">
                      <h5 className=" font-para font-[400] text-[16px] text-[#D5E8EB] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </h5>
                    </div>
                    <div className="flex">
                      <div className=" mr-[15px] ">
                        <img
                          className=" w-[70px] h-[70px] rounded-[35px] "
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/attractive-smiling-mixed-race-girl-portrait-outdoo-2022-10-17-01-16-28-utc-e1700646331311-1536x1536.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex items-center">
                        <div>
                          <h2 className=" text-[#E9FCFF] font-para font-[600] text-[18px] ">
                            Alicerie
                          </h2>
                          <p className=" text-accent text-[14px] font-para font-[500] ">
                            Entrepreneur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* one  */}
                  <div className=" p-[30px] h-full flex flex-col justify-between ">
                    <div className="  "></div>
                    <div className=" mb-[30px] ">
                      <h5 className=" font-para font-[400] text-[16px] text-[#D5E8EB] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </h5>
                    </div>
                    <div className="flex">
                      <div className=" mr-[15px] ">
                        <img
                          className=" w-[70px] h-[70px] rounded-[35px] "
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/people-2022-11-10-07-55-06-utc-e1700646360352-1536x1536.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex items-center">
                        <div>
                          <h2 className=" text-[#E9FCFF] font-para font-[600] text-[18px] ">
                            Alicerie
                          </h2>
                          <p className=" text-accent text-[14px] font-para font-[500] ">
                            Entrepreneur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className=" flex gap-[20px] items-center ">
                    <button
                      onClick={() => {
                        handle(0);
                      }}
                      className={`bg-accent ${
                        percent === 0 ? "w-3 h-3" : "w-2 h-2"
                      } rounded-full `}
                    ></button>
                    <button
                      onClick={() => {
                        handle(25);
                      }}
                      className={`bg-accent ${
                        percent === 25 ? "w-3 h-3" : "w-2 h-2"
                      } rounded-full `}
                    ></button>
                    <button
                      onClick={() => {
                        handle(50);
                      }}
                      className={`bg-accent ${
                        percent === 50 ? "w-3 h-3" : "w-2 h-2"
                      } rounded-full `}
                    ></button>
                    <button
                      onClick={() => {
                        handle(75);
                      }}
                      className={`bg-accent ${
                        percent === 75 ? "w-3 h-3" : "w-2 h-2"
                      } rounded-full `}
                    ></button>
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

export default Testimonial;
