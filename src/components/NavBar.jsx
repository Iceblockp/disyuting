import React, { useState } from "react";

const NavBar = () => {

  const [draw,setDraw] = useState(true);

  const toggleDraw = () => {
    setDraw(!draw);
  }
  


  return (
    <div className=" flex w-full ">
      <div className=" flex mx-0 lg:mx-[5px] w-full">
        <div className=" w-full lg:w-[89%] mx-auto 2xl:max-w-[1620px] 2xl:mx-auto ">
          <div className="  px-[30px] lg:px-0 py-[10px] lg:py-[5px] w-full ">
            <div className=" w-full flex justify-between items-center ">
              <div className=" p-[5px] flex gap-3 items-center">
                <div>
                  <img
                    src="https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Template_Kit_Logo-removebg-preview-e1700624955333.png"
                    alt=""
                    className=" w-[24px] h-[27px] lg:w-[30px] lg:h-[34px] "
                  />
                </div>
                <div className="hidden md:block">
                  <p className=" font-heading font-[900] text-[23.04px] tracking-[0.5px] text-text leading-[1em] ">
                    DISYUTING
                  </p>
                </div>
              </div>

              {/* //middle menu */}
              <div className="hidden lg:block">
                <ul className="flex text-[#E9FCFF] font-para font-[600] ">
                  <li className=" px-[15px] text-[15px] hover:text-secondary">
                    <a href="">Home</a>
                  </li>
                  <li className=" px-[15px] text-[15px] hover:text-secondary">
                    <a href="">About</a>
                  </li>
                  <li className=" px-[15px] text-[15px] hover:text-secondary">
                    <a href="">
                      Our Project{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={10}
                          viewBox="0 0 320 512"
                          className=" inline-block"
                        >
                          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                          <path fill="#E9FCFF" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className=" px-[15px] text-[15px] hover:text-secondary">
                    <a href="">
                      pages{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={10}
                          viewBox="0 0 320 512"
                          className=" inline-block"
                        >
                          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                          <path
                            fill="#E9FCFF"
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className=" px-[15px] text-[15px] hover:text-secondary">
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="block lg:hidden ">
                  <button onClick={toggleDraw} className=" w-[63px] h-[32px] flex justify-center items-center text-black hover:text-white bg-secondary rounded-[16px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 pointer-events-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:block p-[5px]">
                  <div className=" px-[25px] py-[15px] bg-gradient-to-r from-secondary  flex items-center to-primary hover:from-secondary hover:to-secondary rounded-[50px]">
                    <button  className=" font-para font-[600] text-[15px]  ">
                      Hire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer  */}
            <div className={` z-20 fixed ${draw ? '-translate-x-full ':'translate-x-0 delay-500'}  duration-300 ease-in  w-[350px] h-screen top-0 left-0 bg-[#1E1E37] `}>
              <div className=" w-full h-[62.39px] px-[25px] py-[10px] flex justify-between ">
                <div></div>
                <div onClick={toggleDraw} className=" w-[34px] h-[19px] bg-gradient-to-r flex items-center justify-center rounded-[15px] from-secondary to-primary hover:from-secondary hover:to-secondary font-heading font-[700] text-[1rem] text-[#1E1E37] hover:text-accent ">
                  <button  className=" select-none p-[3px]">X</button>
                </div>
              </div>
              
              <div className=" w-full font-para font-[600] text-accent text-[12px]  ">
                <div className=" px-[25px] py-[15px] ">
                  <a href="">Home</a>
                </div>
                <div className=" px-[25px] py-[15px] ">
                  <a href="">About</a>
                </div>
                <div className=" px-[25px] py-[15px] flex justify-between ">
                  <div><a href="">Our Project</a></div>
                  <div><button className=" px-[15px] py-[2px] flex items-center border border-accent rounded-[15px] ">
                  <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={10}
                          viewBox="0 0 320 512"
                          className=" inline-block"
                        >
                          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                          <path fill="#E9FCFF" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg></button></div>
                </div>
                <div className=" px-[25px] py-[15px] flex justify-between ">
                  <div><a href="">Pages</a></div>
                  <div><button className=" px-[15px] py-[2px] flex items-center border border-accent rounded-[15px]">
                  <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={16}
                          width={10}
                          viewBox="0 0 320 512"
                          className=" inline-block"
                        >
                          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                          <path fill="#E9FCFF" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg></button></div>
                </div>
                <div className=" px-[25px] py-[15px] ">
                  <a href="">Contact Us</a>
                </div>
              </div>

            </div>
            <div onClick={toggleDraw} className={`z-10 fixed ${draw ? '-translate-x-full delay-500':'translate-x-0'} duration-300 ease-in w-screen h-screen top-0 left-0 bg-[rgba(51,51,51,.5)]`}></div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
