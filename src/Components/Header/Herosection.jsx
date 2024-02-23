import React from "react";
import Navigation from './Navigation'
import lettuce from "../../Images/displaylettuce.png";
import plate from "../../Images/displayfood1.png";
import dots from "../../Images/dots-bg.svg";
import food from "../../Images/food.svg";
import location from "../../Images/1place-holder.svg";
import rightarrow from "../../Images/right-arrow.svg";
import leftarrow from "../../Images/left-arrow.svg";
import './Herosection.css'



function Herosection() {
    return (
      <main>
        <div className=" h-screen container mx-auto bg-[#3d7475] ">
          <div className=" md:w-4/6 bg-white h-screen relative">
            <Navigation/>
            <div className="hidden lg:flex gap-6 absolute bottom-10 right-[-50%]">
                  <img src={leftarrow} className="lg:w-[30%] h-[20%] transition duration-300 transform hover:scale-105 ease-in-out "/>
                  <img src={rightarrow}  className="lg:w-[30%] h-[20%] transition duration-300 transform hover:scale-105 ease-in-out "/>
            </div>
  
            <div className=" relative flex  px-4 md:px-8 lg:px-12 xl:px-24 md:py-8 lg:py-24 xl:pt-48 md:h-full ">
              <div className="mt-4 md:mt-0 lg:mt-[-20%] flex-1 space-y-12 md:space-y-8 justify-between  flex flex-col z-20">
                <div className="lg:ml-20">
                  <img className="md:mt-20 h-12 sm:h-20 md:h-24 xl:h-32 z-30" src={food} />
  
                  <div className=" space-y-3  sm:space-y-6 md:space-y-4">
                    <p className=" text-[#192b64] text-left text-2xl font-bold sm:text-3xl  md:text-4xl lg:text-5xl">
                      Discover Restraunt<br /> 
                      & Delicious Food
                    </p>
                    <div className=" w-[300px] md:h-10 lg:w-[380px] lg:h-14 border rounded-md flex max-w-xl shadow-md ">
                      <input type='text' list="suggestions" placeholder='search restaurant food' className="appearance-none pl-2 text-xs sm:w-[300px] lg:text-sm lg:w-[380px] " />
                        <datalist id="suggestions">
                        <option value="Pizza" />
                        <option value="Burger" />
                        <option value="Salad" />
                        <option value="Apple pie" />
                        </datalist>
                      <button className="bg-[#3d7475] text-xl sm:text-2xl  text-white px-10 md:px-12 py-3 md:py-1 rounded-md rounded-tl-full  transition duration-300 transform hover:scale-105 ease-in-out ">
                        Go
                      </button>
                    </div>
                  </div>
                </div>
  
                <div className="bg-[#3d7475] flex p-2 text-xl  md:p-2 md:text-xl lg:text-2xl lg:p-4 items-center text-white space-x-2 rounded-r-full max-w-max pr-6 ease-in-out rounded-md transition duration-300 transform hover:scale-105">
                  <img className=' h-6 lg:h-8' src={location} />
                  <h1>Indore</h1>
                </div>
                
                <img className=" pt-10 animation-container  w-[400px] h-[400px]  md:ml-20 lg:hidden" src={plate} />
              </div>
            </div>
  
            <img src={dots} className="hidden lg:block absolute left-[10%] bottom-[-8%] h-[50%] sm:h-[92%] sm:w-[250px] md:h-[40%] lg:h-[75%] sm:bottom-[-80%] sm:left-0 md:bottom-[-5%] md:left-[20%] lg:left-[80%] lg:top-[15%]" />
            <img src={lettuce} className=" hidden lg:block absolute left-[30%] bottom-[10%] h-[40%] sm:w-[50%] md:w-[60%] lg:w-[40%] sm:bottom-[-18%] sm:left-[20%] md:bottom-[4%] md:left-[30%] lg:top-[10%] lg:left-[88%]" />
            <div className=" hidden  lg:block md:absolute w-[500px] h-[400px] right-[-10%] translate-x-1/2 top-1/2 -translate-y-1/2 ">
              <div className="animation-container ">
                <img className=" " src={plate} />
              </div>
            </div>
            
           
          </div>
        </div>
      </main>
    );
  }
  
  export default Herosection;