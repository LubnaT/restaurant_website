import React from "react";
import logo from "../../Images/logo.svg";
import user from '../../Images/userpic.png'
import Drop from "./Dropdown";


const Navigation = () => {
    const navitem= [
        {item:'About',id:'#about'},
        {item:'Bookings',id:'#booking'},
        {item:'Services',id:'#services'},
        {item:'Menu',id:'#menu'},
        {item:'Download',id:'#download'},
        {item:'Contact Us',id:'#footer'},

    ];
  return (
    <div className="  mt-2 ml-4 m flex items-center justify-between md:justify-around space-x-4 max-w-[90rem]  mx-auto sm:mr-[20%] md:mr-[-30%] lg:mr-[-50%]">
    <div className=" flex items-center lg:gap-x-4 ">
      <div className="lg:ml-[-10%]">
      <img src={logo} className="h-10 md:h-20  xl:h-24 " alt="" />
      </div>
    
      <div className=" hidden md:inline-flex space-x-2 md:mr-[-40%] md:ml-2 lg:gap-2 lg:py-1">
        {navitem.map((item) => (
          <a
            className=" md:text-[6px] lg:text-xs font-bold text-[#192b64] p-2  hover:underline hover:scale-110 hover:bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 hover:text-gray-900 transition duration-300 hover:shadow-lg rounded-md "
            href={item.id}
            key={item.id}
          >
            {item.item}
          </a>
        ))}
      </div>
      
    </div>
    <div className=" md:hidden space-x-2 hover:border border-solid border-[#051650] rounded-md transition duration-300 transform hover:scale-105">
        <Drop data={navitem} />
      </div>
    <div className=" lg:p-2 hidden md:flex items-center space-x-1.5 rounded-md  text-[#192b64] hover:scale-110 transition duration-300 hover:shadow-xl hover:bg-[#36878a]">
      <img className=" h-10 rounded-full" src={user} />
        <select className=' text-xs font-semibold w-fit bg-transparent text-white'>
            <option className=' text-black'>User</option>
            <option className='text-black'>Logout</option>
            <option className=' text-black'>Profile</option>
        </select>
   
    </div>
  </div>
  )
}

export default Navigation