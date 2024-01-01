import React, { useState } from 'react'

const AccordianPart = ({title}) => {
    const [arrow,setArrow] = useState(true);
    const press = () => {
        setArrow(!arrow)
    }
    
  return (
    <div className=" overflow-hidden border-s border-[#62DEF5]  ">
                  <div onClick={press} className=" px-[30px] py-[14px] bg-gradient-to-tr from-[#E9FCFF0F] to-[#98C0DFB5] flex justify-between relative z-20  ">
                    <div className="  pointer-events-none font-para font-[600] text-[16px] text-white " >{title}</div>
                    <div className={`${!arrow && 'rotate-180'}`}> <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg></div>
                  </div>

                  <div className={`${arrow ? ' hidden ':''} relative z-0 px-[65px] py-[30px] duration-200 text-[#E9FCFF] font-para font-[400] text-[16px]  `}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                   
                  </div>
                </div>
  )
}

export default AccordianPart