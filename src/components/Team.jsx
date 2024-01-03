import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Team = () => {
  return (
    <div className=" flex w-full  ">
      <div className=" flex mx-0 lg:mx-[5px] w-full mb-[200px]">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" w-full flex flex-col gap-[60px] ">
              <div className=" p-[5px] w-full ">
                <div className=" w-full">
                  <div className=" max-w-[405px] md:w-full font-para font-[600] text-[16px] md:text-[19px] text-center md:text-start text-[#CADADD] ">
                    <h5>Our Team</h5>
                  </div>
                  <div className=" block md:flex justify-between w-full ">
                    <div className=" max-w-[405px] md:w-full md:text-start font-heading font-[700] text-center text-white text-[22px] md:text-[33.18px]  ">
                      <h3>FOUNDATION TEAM FROM DISYUTING</h3>
                    </div>

                    <div className=" w-full flex ">
                      <button
                        className=" rounded-[50px] text-[#1E1E37] text-[15px] font-para font-[600] mx-auto md:mr-0 w-[128px] h-[45px] btnBlue "
                        href=""
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block md:flex lg:gap-[30px] justify-between ">
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  className=" p-[5px] "
                >
                  <div className=" p-[5px] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm ">
                    <div className=" flex flex-col gap-[40px] ">
                      <div>
                        <img
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/calm-and-quiet-studio-shot-in-dark-studio-with-ne-2021-08-30-07-44-06-utc-1024x683.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-[14px]">
                        <div className=" font-para text-center ">
                          <h2 className=" font-[600] text-[22px] leading-[1.2] text-white  ">
                            BRANZ BROTHER
                          </h2>
                          <p className=" text-[#CADADD] font-[500] text-[14px] leading-[1.2em] tracking-[0.4px] ">
                            Leader Of Disyuting
                          </p>
                        </div>
                        <div className=" w-full flex ">
                          <div className=" mx-auto">
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-600  rounded-full p-2  ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={10}
                                viewBox="0 0 320 512"
                                className=""
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f5f5f5"
                                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-400 rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={16}
                                viewBox="0 0 512 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#fafafa"
                                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] hover:bg-red-600 rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={12}
                                viewBox="0 0 384 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f7f7f7"
                                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* next  */}
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  data-aos-once="true"
                  className=" p-[5px] "
                >
                  <div className=" p-[5px] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm ">
                    <div className=" flex flex-col gap-[40px] ">
                      <div>
                        <img
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/futuristic-conception-studio-shot-in-dark-studio-2021-08-30-07-44-06-utc-1024x683.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-[14px]">
                        <div className=" font-para text-center ">
                          <h2 className=" font-[600] text-[22px] leading-[1.2] text-white  ">
                            BRANZ BROTHER
                          </h2>
                          <p className=" text-[#CADADD] font-[500] text-[14px] leading-[1.2em] tracking-[0.4px] ">
                            Leader Of Disyuting
                          </p>
                        </div>
                        <div className=" w-full flex">
                          <div className=" mx-auto">
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-600  rounded-full p-2  ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={10}
                                viewBox="0 0 320 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f5f5f5"
                                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-400  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={16}
                                viewBox="0 0 512 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#fafafa"
                                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] hover:bg-red-600  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={12}
                                viewBox="0 0 384 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f7f7f7"
                                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* next  */}
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  data-aos-once="true"
                  className=" p-[5px] "
                >
                  <div className=" p-[5px] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm ">
                    <div className=" flex flex-col gap-[40px] ">
                      <div>
                        <img
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/photo-im-motion-studio-shot-in-dark-studio-with-n-2021-08-30-07-44-07-utc-1024x683.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-[14px]">
                        <div className=" font-para text-center ">
                          <h2 className=" font-[600] text-[22px] leading-[1.2] text-white  ">
                            BRANZ BROTHER
                          </h2>
                          <p className=" text-[#CADADD] font-[500] text-[14px] leading-[1.2em] tracking-[0.4px] ">
                            Leader Of Disyuting
                          </p>
                        </div>
                        <div className=" w-full flex">
                          <div className=" mx-auto">
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-600  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={10}
                                viewBox="0 0 320 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f5f5f5"
                                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-400  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={16}
                                viewBox="0 0 512 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#fafafa"
                                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] hover:bg-red-600  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={12}
                                viewBox="0 0 384 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f7f7f7"
                                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* next  */}
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                  data-aos-once="true"
                  className=" p-[5px] "
                >
                  <div className=" p-[5px] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm">
                    <div className=" flex flex-col gap-[40px] ">
                      <div>
                        <img
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/cute-make-up-studio-shot-in-dark-studio-with-neon-2021-08-30-03-55-16-utc-1024x683.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-[14px]">
                        <div className=" font-para text-center ">
                          <h2 className=" font-[600] text-[22px] leading-[1.2] text-white  ">
                            BRANZ BROTHER
                          </h2>
                          <p className=" text-[#CADADD] font-[500] text-[14px] leading-[1.2em] tracking-[0.4px] ">
                            Leader Of Disyuting
                          </p>
                        </div>
                        <div className=" w-full flex">
                          <div className=" mx-auto">
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-600  rounded-full p-2  ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={10}
                                viewBox="0 0 320 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f5f5f5"
                                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-400  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={16}
                                viewBox="0 0 512 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#fafafa"
                                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] hover:bg-red-600  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={12}
                                viewBox="0 0 384 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f7f7f7"
                                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* next  */}
                <div
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-delay="2000"
                  data-aos-once="true"
                  className=" p-[5px] "
                >
                  <div className=" p-[5px] border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm">
                    <div className=" flex flex-col gap-[40px] ">
                      <div>
                        <img
                          src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/portrait-of-young-man-with-curly-hair-that-is-stan-2023-01-18-07-11-25-utc-1-1024x683.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-[14px]">
                        <div className=" font-para text-center ">
                          <h2 className=" font-[600] text-[22px] leading-[1.2] text-white  ">
                            BRANZ BROTHER
                          </h2>
                          <p className=" text-[#CADADD] font-[500] text-[14px] leading-[1.2em] tracking-[0.4px] ">
                            Leader Of Disyuting
                          </p>
                        </div>
                        <div className=" w-full flex">
                          <div className=" mx-auto">
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-600  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={10}
                                viewBox="0 0 320 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f5f5f5"
                                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] me-[10px] hover:bg-blue-400  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={16}
                                viewBox="0 0 512 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#fafafa"
                                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                              </svg>
                            </button>
                            <button className=" w-[30px] h-[30px] hover:bg-red-600  rounded-full p-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={16}
                                width={12}
                                viewBox="0 0 384 512"
                              >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                                <path
                                  fill="#f7f7f7"
                                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* next  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
