import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import displaylettuce from "../../Images/displaylettuce.png";
import dotsbg1 from "../../Images/dotsbg1.png";
import cauliflower from "../../Images/cauliflower.png";
import { ReactComponent as RedArrow } from '../../Images/redcaretdown.svg';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(new Date("2023-06-20"));
    const [selectedTime, setSelectedTime] = useState("12:00");
    const [selectedGuests, setSelectedGuests] = useState("1");
     
  
    const maxGuests = 50;
    const guestOptions = Array.from({ length: maxGuests }, (_, index) =>
      (index + 1).toString()+ " People"
    );
  return (
    <div id='booking' className="mt-[400px] sm:mt-[530px] md:mt-[-20%] lg:mt-[0%] relative flex justify-center items-center max-w-[1400px] mx-8 sm:mx-10 md:mx-10 lg:mx-20 bg-[#FAFAFA] h-screen overflow-hidden ">
         <img
            src={displaylettuce}
            className=" absolute left-[-36%] top-[-50px] sm:left-[-10%] md:top-[-20%] md:left-[-14%] lg:left-[-15%] lg:top-[-120px]  z-10 w-[200px] h-[700px] sm:w-[240px] md:w-[280px] lg:w-[640px] md:h-[900px] "
            alt="lettuce"
          />
          <img
            src={cauliflower}
            className="absolute -right-[30%] sm:right-[-20%] sm:top-[22%] top-[30%] md:top-10 md:right-[-10%] lg:right-[-27%] lg:top-[20%] w-[160px] sm:w-[240px] lg:w-[700px] h-auto md:h-[300px] z-10"
            alt="cauliflower"
          />
          <img
              src={dotsbg1}
              className="hidden md:block absolute top-[27%] left-[8%] lg:top-[80%] lg:left-[12%] z-0 h-auto md:h-[200px] w-[180px] lg:w-[300px]"
              alt="top dot"
            />
            <img
              src={dotsbg1}
              className="hidden md:block absolute top-[6%] right-10 lg:top-[18%] lg:right-[15%] z-0 h-auto md:h-[200px] w-[150px] lg:w-[25%]"
              alt="bottom dot"
            />
      <div className="bg-gray-50 relative flex flex-col justify-center items-center shadow-2xl  h-fit px-16 py-8 sm:px-20 md:py-16 md:px-32 lg:px-56 lg:py-24 md:mt-[-70%] lg:mt-[10%] z-1 ">
      
        {/* title */}
        <div>
          <div className="h-3 ml-12 border-t-8  border-teal-900 w-10 sm:w-14 md:w-20 lg:w-24 sm:ml-12 md:ml-14 lg:ml-20 "></div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center ">advance booking</h1>
        </div>
        {/* input */}
        <div className="relative mt-8 shadow-2xl text-xs sm:text-sm lg:text-sm">
          <input
           list="suggestions"
            className=" bg-transparent shadow-2xl  p-3 sm:py-3 sm:pr-20 md:pr-32 md:py-4 lg:pr-44"
            placeholder="Search restaurant"
          />
           <datalist id="suggestions">
                        <option value="Hyderabad" />
                        <option value="Banglore" />
                        <option value="Mumbai" />
                        </datalist>
          <button className=" absolute top-3 sm:top-2 right-2 px-2 py-1 sm:px-4 sm:py-1 md:px-6 md:py-2 sm:font-semibold lg:px-6 lg:py-2 text-white bg-emerald-800 hover:bg-emerald-950 transition transform hover:scale-110 duration-200">
            GO
          </button>
        </div>
        {/* date, time and guest */}
        <div className="mt-8 sm:mt-8 flex-col sm:flex-row flex items-center justify-between gap-1 sm:gap-4 lg:gap-10">
            <div className="flex gap-1 text-xs  sm:gap-2 lg:gap-8">
                {/* date */}
          <div>
            <div className=" md:text-sm font-bold flex items-center gap-1">
              Date <RedArrow />
            </div>
            <br />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="text-slate-500 text-xs border-b border-gray-300 focus:outline-none focus:border-emerald-800 w-16"
            />
          </div>
          {/*  time*/}
          <div className=" ml-2">
            <div className="md:text-sm font-bold flex items-center gap-1">
              Time <RedArrow />
            </div>
            <br />
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="text-slate-500 text-xs border-b border-gray-300 focus:outline-none focus:border-emerald-800 w-16"
            />
          </div>

            </div>
          
          {/* guest */}
        <div className=" mt-2 sm:mt-0 text-xs">
          <div className="md:text-sm font-bold flex items-center gap-1">
            Guest <RedArrow />
          </div>
          <br />

          <select
            value={selectedGuests}
            onChange={(e) => setSelectedGuests(e.target.value)}
            className="text-slate-500 text-xs border-b border-gray-300 focus:outline-none focus:border-emerald-800 w-20"
          >
            {guestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
         </div>
        </div>
        

      </div>
    </div>
  );
}

export default Booking;
