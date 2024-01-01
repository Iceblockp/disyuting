import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({});
const Awards = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="  pb-[200px] ">
      <div className="mx-auto p-1 lg:w-[89%] 2xl:max-w-[1620px] ">
        <div className="flex flex-col min-[1425px]:flex-row gap-[30px]  ">
          {/* img */}
          <div className=" w-[40%] max-[1425px]:w-[100%] max-[1425px]:h-[475px]  2xl:mr-[30px] relative overflow-hidden">
            <img
              className={` rounded-md h-[960px]  object-cover  transition-opacity duration-[3s] absolute  ${
                isHovered ? "opacity-0" : "opacity-100"
              } 
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}`}
              src={
                "https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/film-industry-2022-11-01-02-07-45-utc.jpg"
              }
              alt=""
            />

            <img
              src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/film-production-crew-2022-11-01-02-07-54-utc.jpg"
              alt=""
              className={` rounded-md  object-cover  h-[960px] transition-opacity duration-[3s] absolute  ${
                isHovered ? "opacity-100" : "opacity-0"
              } `}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>

          <div className=" w-[60%] max-[1425px]:w-[100%] flex flex-col gap-[30px] max-[1425px]:gap-[12px] p-1">
            {/* awards title */}
            <p
              className=" text-xl max-md:text-lg leading-16 font-bold font-para "
              style={{ color: "#D5E8EB" }}
            >
              Disyuting Awards
            </p>
            <div className="h-auto text-6xl font-bold tracking-wide font-heading text-white flex uppercase w-[96%] max-[1395px]:text-3xl max-md:text-2xl">
              <h1>
                WE HAVE WON SEVERAL AWARDS DURING OUR 20 YEARS OF BUSINESS.
              </h1>
            </div>

            {/* awards grid */}
            <div className="flex flex-row max-md:flex-col gap-[30px] pt-[30px]">
              <div className="  flex flex-col max-[1395px]:flex-row max-md:flex-col gap-[30px]">
                <div className="w-full border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm">
                  <div className="p-[30px] md:p-[15px]">
                    <div className="pb-4">
                      <img
                        className=" w-[116px] h-[116px] lg:w-[82px] lg:h-[82px]  md:h-[50px] md:w-[50px] max-md:w-[255px] max-md:h-[255px] max-md:mx-auto mb-4"
                        src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Holo_Effect_02.png"
                        alt=""
                      />
                      <h1
                        className="mb-1 mt-2 md:m-0 text-xl leading-16 md:leading-6 font-bold font-para  max-md:text-center max-md:text-base"
                        style={{ color: "#E9FCFF" }}
                      >
                        Best Direction
                      </h1>
                      <p
                        className="mb-1 mt-2 text-lg md:text-base  font-para md:leading-6 max-md:text-center max-md:text-base"
                        style={{ color: "#D5E8EB" }}
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-md">
                  <div className="p-[30px] md:p-[15px]">
                    <div className="">
                      <img
                        className=" w-[116px] h-[116px] lg:w-[82px] lg:h-[82px]  md:h-[50px] md:w-[50px] max-md:w-[255px] max-md:h-[255px] max-md:mx-auto mb-4"
                        src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Holo_Effect_02.png"
                        alt=""
                      />
                      <h1
                        className="mb-1 mt-2 text-xl leading-16 md:leading-6 font-bold font-para max-md:text-center max-md:text-base"
                        style={{ color: "#E9FCFF" }}
                      >
                        Best Visualitation
                      </h1>
                      <p
                        className="mb-1 mt-2 md:m-0 text-lg md:text-base  font-para md:leading-6 max-md:text-center max-md:text-base"
                        style={{ color: "#D5E8EB" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col max-[1395px]:flex-row  max-md:flex-col gap-8">
                <div className="w-full border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-md">
                  <div className="p-[30px] md:p-[15px]">
                    <div className="">
                      <img
                        className=" w-[116px] h-[116px] lg:w-[82px] lg:h-[82px]  md:h-[50px] md:w-[50px] max-md:w-[255px] max-md:h-[255px] max-md:mx-auto mb-4"
                        src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Holo_Effect_02.png"
                        alt=""
                      />
                      <h1
                        className="mb-1 mt-2 text-xl leading-16 font-bold font-para md:leading-6 max-md:text-center max-md:text-base"
                        style={{ color: "#E9FCFF" }}
                      >
                        Best Script Film
                      </h1>
                      <p
                        className="mb-1 mt-2 md:m-0 text-lg md:text-base  font-para md:leading-6 max-md:text-center max-md:text-base"
                        style={{ color: "#D5E8EB" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full border rounded-md border-l-[#e9fcff0f] border-b-[#e9fcff0f] 
                
                  border-t-transparent border-r-transparent transparentCart backdrop-blur-md"
                >
                  <div className="p-[30px] md:p-[15px] ">
                    <div className="pb-4">
                      <img
                        className=" w-[116px] h-[116px] lg:w-[82px] lg:h-[82px]  md:h-[50px] md:w-[50px] max-md:w-[255px] max-md:h-[255px] max-md:mx-auto mb-4"
                        src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Holo_Effect_02.png"
                        alt=""
                      />
                      <h1
                        className="mb-[5px] mt-2 text-xl leading-16 md:leading-6 font-bold font-para max-md:text-center max-md:text-base"
                        style={{ color: "#E9FCFF" }}
                      >
                        Best Team Work
                      </h1>
                      <p
                        className="mb-1 mt-2 md:m-0 text-lg md:text-base font-para max-md:leading-6 max-md:text-center max-md:text-base"
                        style={{ color: "#D5E8EB" }}
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
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
  );
};

export default Awards;
