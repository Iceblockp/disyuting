import React from "react";
import Aos from "aos";
Aos.init();
const InputFormSection = () => {
  return (
    <div className="w-full flex mb-[200px]">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] 2xl:max-w-[1620px] mx-auto">
          <div className=" w-full px-[30px] lg:px-0 py-[10px] lg:py-[5px]">
            <div className=" lg:flex justify-between items-center text-center w-full ">
              <div
                className=" flex flex-col justify-start w-full lg:w-6/12"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="">
                  <h1 className=" max-w-[403px] xl:max-w-[567px] text-center lg:text-start font-heading font-bold text-slate-200 text-[22px] lg:text-[30px] xl:text-[64px] leading-[1em] tracking-[0.5px]">
                    READY TO COLLABORATE WITH THE BEST VISUAL PRODUCTION HOUSE?
                  </h1>
                </div>
                <div className=" mt-5">
                  <p className="text-center lg:text-start text-slate-300 max-w-[403px] xl:max-w-[508px] lg:tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>

              <div className="  w-full lg:w-6/12 flex lg:items-center lg:justify-center xs:mt-10">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="border-[#e9fcff0f] formShadow border-l border-b py-16 px-10 rounded-lg w-full   bg-slate-200 bg-opacity-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="">
                      <input
                        type="text"
                        placeholder="First Name"
                        className=" bg-slate-200 bg-opacity-20 w-full mb-4 px-6 py-4 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className=" bg-slate-200 bg-opacity-20 w-full mb-4 px-6 py-4 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Add Email"
                        className=" bg-slate-200 bg-opacity-20 w-full mb-4 px-6 py-4 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Subject"
                        className=" bg-slate-200 bg-opacity-20 w-full mb-4 px-6 py-4 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="+(602) 448 763 22"
                        className=" bg-slate-200 bg-opacity-20 w-full mb-4 px-6 py-4 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="https://example.com"
                        className=" bg-slate-200 bg-opacity-20 w-full mb-4 px-6 py-4 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Add text"
                      id="message"
                      name="message"
                      rows="8"
                      className=" px-6 py-4 w-full bg-white bg-opacity-10 rounded-md placeholder:text-slate-300 text-sm focus:border-white hover:border-[#62DEF5] border border-transparent caret-white"
                      required
                    ></textarea>
                  </div>

                  <div className="text-start">
                    <button
                      type="submit"
                      className="  font-para px-10 py-3 btnBlue rounded-3xl font-bold"
                    >
                      Send Message
                    </button>
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

export default InputFormSection;
