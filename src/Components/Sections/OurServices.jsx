import React from "react";
import dotsbg3 from '../../Images/dotsbg3.png'
import { ReactComponent as Table } from '../../Images/advancedtablebooking.svg';
import { ReactComponent as FoodForFree } from '../../Images/foodforfree.svg';
import { ReactComponent as LeftArrow } from '../../Images/bigleftarrow.svg';
import { ReactComponent as FreeHomeDelivery } from '../../Images/freehomedeliveryatyourdoorsteps.svg';
import './Ourservices.css'

function OurServices() {
  return (
    <div id="services" className="mx-8 sm:mx-16 sm:mt-10 md:mt-[0%] lg:mt-[15%] mt-4 h-screen flex flex-col">
      {/* div 1 content */}
      <div></div>
      <div className="lg:mx-40 grid grid-rows-2 lg:grid-cols-7">
         {/* services */}
         <div className="mt-6 sm:mt-0 md:mt-[10%] lg:mt-[5%] md:mx-10 flex flex-col md:flex-row lg:col-span-6 lg:gap-x-44 ht-10 md:h-[20%] items-center">
                <div className="flex gap-4  items-center">
                    <div className='p-2 h-12 lg:h-24 bg-teal-900'></div>
                    <div
                        className=" font-bold text-[#051650] text-lg sm:text-xl md:text-3xl lg:text-5xl text-left"
                        style={{ letterSpacing: "-0.2px", lineHeight: "0.9" }}
                    >
                        <span>Our</span>
                        <br />
                        <span>Services</span>
                    </div>
                </div>
                <div className=" mt-4 mx-8 sm:mx-20 md:mx-10 md:mt-0  lg:mx-0 lg: lg:col-span-4">
                    <p
                    className="font-medium text-zinc-500 text-left text-[10px] md:text-xs lg:text-lg"
                    style={{ lineHeight: "1.1" }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
        </div>
      </div>
      {/* div 2 delivery */}
      <div className="mt-[-30%] sm:mt-[-20%] md:mt-[2%] lg:mt-[-10%] lg:mx-20 h-screen overflow-hidden" style={{ backgroundImage: `url(${dotsbg3})` }} >
        {/* grid */}
        <div className="grid grid-rows-2 lg:grid-cols-2">
            {/* 1st col */}
            <div className="sm:mx-24 md:mx-20 lg:mx-10 lg:mt-10 lg:ml-20 grid grid-rows-2">
                {/* 1st row */}
              <div className="relative md:gap-x-4 lg:gap-x-10 grid grid-cols-2">
                   {/* arrow svg */}
              <div className=" absolute left-[40%] lg:left-[38%] lg:top-[40%] right-0 top-14 bottom-0 z-0 max-w-max max-h-max">
                <LeftArrow  className="w-[50px] h-[20px] md:w-[70px] lg:w-[90px]"/>
              </div>
              <div className="m-4 p-2 lg:mb-12 bg-gray-100">
                  <Table className='md:ml-[-2%] mt-4 sm:mt-2 lg:mt-8 lg:ml-[-8%] w-[120px] h-[80px] md:w-[180px] md:h-[100px] lg:w-[200px] lg:h-[110px]' />
                </div>
                <div className="text-start m-4 lg:mb-12" style={{ lineHeight: "1.1" }}>
                  <h1
                    className="font-bold text-base md:text-lg lg:text-2xl lg:mt-8 "
                    style={{ lineHeight: "1.1", letterSpacing: "-0.2px" }}
                  >
                    advanced table <br />
                    booking
                    <span className="inline-block border border-solid border-t-[1px] border-teal-800 w-10 ml-2 mb-1"></span>
                    <span className="inline-block border border-solid border-t-[1px] border-teal-800 w-2 ml-2 mb-1"></span>
                  </h1>
                  <p className="text-zinc-600 text-xs lg:text-sm font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>
                </div>
              </div>
                {/* 2nd row */}
              <div className=" relative md:gap-x-4 lg:gap-x-10 grid grid-cols-2">
                <div className="absolute left-[45%] right-0 top-14 lg:left-[43%] lg:top-[30%] bottom-0 z-0 max-w-max max-h-max transform rotate-180">
                    <LeftArrow className=' w-[45px] h-[15px] md:w-[70px] md:h-[40px] lg:w-[90px]'  />
                </div>

                <div className="m-4 lg:mb-12 text-start" style={{ lineHeight: "1.1" }}>
                  <h1
                    className=" font-bold text-bases lg:text-2xl lg:mt-8"
                    style={{ lineHeight: "1.1", letterSpacing: "-0.2px" }}
                  >
                    Food for free <br />
                    <span className="inline-block border border-solid border-t-[1px] border-teal-800 w-12  mb-1"></span>
                    <span className="inline-block border border-solid border-t-[1px] border-teal-800 w-2 ml-1 mr-2 mb-1"></span>
                    24/7
                  </h1>
                  <p className="text-zinc-600 text-xs lg:text-sm font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>
                </div>
                <div className="m-4 sm:p-2 lg:mb-12 bg-gray-100">
                  <FoodForFree className='mt-4 sm:mt-2 lg:mt-6 lg:ml-[-20%] w-[120px] h-[80px] md:w-[180px] md:h-[100px]  lg:w-[250px] lg:h-[130px]' />
                </div>

              </div>
            </div>
            {/* 2nd col */}
            <div className="mt-[0%] sm:mt-[0%] md:mt-[8%] mx-2 sm:mx-8  sm:p-4 md:mx-10  bg-gray-100 flex gap-4  lg:flex-col items-center">
             <div className='mt-[-30%] md:mt-[5%]'>
                <FreeHomeDelivery  className="animated-svg w-[130px] h-[130px] sm:w-[120px] sm:h-[90px] md:w-[150%] md:h-[80%] lg:w-[100%] lg:h-[80%]"/>
              </div>
              <div className='md:mx-20 sm:mt-[-30%] md:mt-[0%] lg:mx-32'style={{ lineHeight: '1.1' }}>
                <h1 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#0A2472]' style={{ lineHeight: '1.1' , letterSpacing: '-0.2px'}} >
                free home delivery at your door steps
                </h1>
                <p className='text-zinc-600 p-3 font-medium text-xs md:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <span className='inline-block border border-solid border-t-[2px] border-teal-800 w-32  mb-1'></span>
                <span className='inline-block border border-solid border-t-[2px] border-teal-800 w-4 ml-2 mb-1'></span>
              </div>
        </div>
         
        </div>
       
      </div>
      {/* end delivery */}
    </div>
  );
}

export default OurServices;
