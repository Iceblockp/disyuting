import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ContactUs = () => {
  return (
    <div className=" flex w-full ">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className=" px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            
            <section className="flex flex-col-reverse lg:flex-row gap-[120px]">
              <div  data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000" className="  bg-contain bg-no-repeat bg-right-bottom w-full lg:w-[60%] flex-grow bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/happy-black-female-listening-music-with-digital-ta-2023-03-23-03-44-16-utcEDT-1.png')] lg:w-[671px]">
                <div className=" flex flex-col h-full">
                  <div className=" justify-center text-center lg:items-end lg:justify-end lg:text-end">
                    <h1 className=" text-[64px] font-heading text-white font-bold tracking-wide">
                      GET IN TOUCH
                    </h1>
                  </div>
                  <div className="mt-auto mb-[75px]">
                    <div className=" border rounded-md hover:border-[#62DEF5] border-l-[#e9fcff0f] border-b-[#e9fcff0f] border-t-transparent border-r-transparent transparentCart backdrop-blur-sm lg:w-[400px] p-8 ">
                      <div className=" text-white text-[22px] font-bold my-2">
                        <p>24/7</p>
                        <p>Fast Respond for You</p>
                      </div>
                      <div className="text-white text-[22px] font-bold my-2">
                        <p>Call</p>
                        <p>+00 123 987 02</p>
                      </div>
                      <div className="text-white text-[22px] font-bold my-2">
                        <p>Office</p>
                        <p>Canggu Village, Badung, Bali Province, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" className=" w-full lg:w-[45%] flex lg:items-center lg:justify-center xs:mt-10 ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="border-slate-300 hover:border-[#62DEF5] border-l border-b py-16 px-10 rounded-lg shadow-[0_0px_20px_0px] w-full  hover:shadow-[#62DEF5] bg-slate-200 bg-opacity-10"
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
                      className="  font-para px-10 py-3 btnBlue rounded-3xl"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
