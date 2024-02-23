import React from 'react'
import appscreen from "../../Images/appscreen.png";
import dotsbg1 from "../../Images/dotsbg1.png";
import cauliflower from "../../Images/cauliflower.png";
import appstore from "../../Images/appstore.png";
import googleplay from "../../Images/googleplay.png";
import "./Download.css";

function Download() {
  return (
    <div id='download' className='mx-6 mt-[290%] sm:mt-[70%] md:mt-[-48%] lg:mt-[5%] md:mx-10 md:mb-[60%] mb-36 bg-[#FAFAFA] grid grid-rows-2 gap-4 lg:grid-cols-2 gap-x-10 h-screen '>
        {/* 1st grid */}
        <div className='flex flex-col md:mt-32 lg:mt-44'>
            {/* download details div1*/}
           <div className="flex mt-8 sm:mx-20 md:mx-28 lg:mr-0 lg:ml-48">
              <div className=' p-2 bg-teal-900'></div>
              <div className="pl-6 text-left">
                <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#051650]" style={{ lineHeight: '1', letterSpacing: '-0.9px' }}>
                  Download app for Exciting Deals</h1>
              </div>
            </div>
            {/* div2 */}
            <div className="mx-14 mt-3 sm:mx-28 md:mx-36 lg:mr-8 lg:ml-64">
             <p className=" text-sm text-left font-medium text-gray-500 " style={{ lineHeight: '1.1', letterSpacing: '-0.6px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
              {/* div3 */}
              <div className="flex mt-6 mx-6 sm:mx-40 md:mx-52 lg:mr-8 lg:ml-64">
                <img src={googleplay} className="h-[50px] w-[135px] transition transform hover:scale-110 duration-200" alt="Google Play" />
                <img src={appstore} className="h-[34px] mt-2 ml-2 transition transform hover:scale-110 duration-200" alt="App Store" />
              </div>
        </div>

        {/* grid 2 mobile phone */}
        <div className='relative '>
        <div className='absolute top-[20%] left-[7%] sm:left-[28%] sm:top-[38%] md:left-[20%] md:top-[30%] lg:top-[70%] h-[80px] w-[160px] md:h-[150px] md:w-[250px] lg:w-[380px]  z-2' >
            <img src={cauliflower} className="inset-10 shadow-inner" alt="lettuce"   />
          </div>
          <div className="ml-10 sm:ml-44 md:ml-36 w-[150px] sm:w-[180px] md:w-[300px] lg:w-[400px] absolute top-0 left-[40px] z-10">
            <img src={appscreen} alt="food1" className="animate-left-right"/>
          </div>
          <div className="w-[100px] h-[40px] md:w-[160px] lg:w-[220px] lg:h-[120px] z-0 absolute top-[10%] left-[20%] sm:left-[35%] sm:top-[20%] md:left-[27%] lg:top-[55%] lg:left-[32%]" >
            <img src={dotsbg1} alt="food1"/>
          </div>
        </div>
    </div>
  )
}

export default Download