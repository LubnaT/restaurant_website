import React from "react";
import wonton from "../../Images/wonton.png";
import firewater from "../../Images/firewater.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EastIcon from "@mui/icons-material/East";
import { ReactComponent as CardArrow } from "../../Images/cardarrow.svg";
import dotsbg1 from "../../Images/dotsbg1.png";

function About() {
  return (
    <div id='about' className="mt-32 sm:mt-[350px] sm:mx-[110px] md:mt-16 lg:mt-16 md:mx-[40px]  flex flex-col h-screen ">
      <div className="mx-8 md:ml-10 md:mr-16">
      {/* about details */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:mt-10 lg:mx-14">
        {/* 1div */}
        <div className="flex items-center text-sm md:text-xl lg:text-3xl md:w-[350%] lg:w-[250%]   ">
          <div className="p-2 h-10 lg:h-24 bg-teal-900"></div>
          <div
            className="max-w-max font-bold  ml-6 text-left "
            style={{ letterSpacing: "-0.2px", lineHeight: "0.9" }}
          >
            <span>some top restaurant for</span>
            <br />
            <span>dining out or in!</span>
          </div>
        </div>
        {/* 2 div  */}
        <div className="md:mx-8 md:mt-4 md:w-[310%] ">
          <p
            className="font-medium text-zinc-500 text-left text-xs md:text-sm lg:text-lg lg:mr-20"
            style={{ lineHeight: "1.1" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* cards */}

      <div className="relative mt-10 grid grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-24">
        {/* dot image 1*/}
        <div className="hidden md:block absolute left-0 right-0 top-[-40px] bottom-0 z-0">
          <img src={dotsbg1} className="w-[180px] h-[250px]" />
        </div>
        {/* dot image 2*/}
        <div className="hidden md:block absolute right-0 top-10 bottom-0 z-0 left-[50.5%] ">
          <img src={dotsbg1} className="w-[200px] h-[370px]" />
        </div>
        {/* First Card */}
        <div className="bg-white rounded-lg shadow-md w-full md:w-auto overflow-hidden transform transition duration-300 hover:scale-105 ">
          <div className="relative">
            <div
              className="h-[380px] bg-cover bg-center"
              style={{ backgroundImage: `url(${firewater})` }}
            ></div>
            {/* Light background color for card content */}
            <div className="text-left absolute bottom-0 left-0 right-0 p-4 bg-teal-900 bg-opacity-70 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-2">Fire Water</h2>
              <p
                className=" text-white text-[10px]"
                style={{ lineHeight: "1.1" }}
              >
                we are all about we are all about to the fullest and all content
                dining out or in dining out or in!
              </p>
              <div className="flex justify-between mt-2">
                <div className="mt-4 text-[10px] ">
                  <LocationOnIcon sx={{ fontSize: "1rem" }} />
                  <span className="pl-[2px]">Mumbai City</span>
                </div>
                <div>
                  <button
                    id="button"
                    className="md:w-24 md:text-[10px] hover:bg-gradient-to-br from-orange-400 to-pink-500 transition transform hover:scale-105 duration-300 mt-2 text-teal-900 text-xs font-bold bg-white px-2 py-2 rounded-br-lg "
                  >
                    Book Now
                    <span className="pl-[4px]">
                      <EastIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className=" bg-white rounded-lg shadow-md w-full md:w-auto overflow-hidden transform transition duration-300 hover:scale-105 ">
          <div className="relative">
            <div
              className="h-[380px] bg-cover bg-center"
              style={{ backgroundImage: `url(${wonton})` }}
            ></div>
            {/* Light background color for card content */}
            <div className="text-left absolute bottom-0 left-0 right-0 p-4 bg-teal-900 bg-opacity-70 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-2">The Wonton</h2>
              <p
                className=" text-white text-[10px]"
                style={{ lineHeight: "1.1" }}
              >
                we are all about we are all about to the fullest and all content
                dining out or in dining out or in!
              </p>
              <div className="flex justify-between mt-2">
                <div className="mt-4 text-[10px] ">
                  <LocationOnIcon sx={{ fontSize: "1rem" }} />
                  <span className="pl-[4px]">Indore City</span>
                </div>
                <div>
                  <button className=" md:w-24 md:text-[10px] hover:bg-gradient-to-br from-orange-400 to-pink-500 transition transform hover:scale-75 duration-300 mt-2 text-teal-900 text-xs font-bold bg-white px-2 py-2 rounded-br-lg">
                    Book Now
                    <span className="pl-[4px]">
                      <EastIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third Card */}
        <div className="w-[200px] sm:ml-14 sm:mb-4  md:ml-44  md:mt-4 lg:ml-12 relative  rounded-lg overflow-hidden flex flex-col lg:justify-center col-span-full lg:col-span-1 ">
          <div className="pl-20 hover: transition transform hover:scale-105 duration-300">
            <CardArrow style={{ width: "60px", height: "60px" }} />
          </div>
          <div className="mt-[-20px] md:ml-20 md:w-16 sm:text-xs lg:text-xl font-semibold text-teal-800">
            see more
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
