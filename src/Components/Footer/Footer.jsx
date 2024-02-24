import React, { useState } from "react";
import { ReactComponent as ArrowButton } from "../../Images/arrow.svg";
import { ReactComponent as Fb } from "../../Images/fb.svg";
import { ReactComponent as Insta } from "../../Images/insta.svg";
import { ReactComponent as Linkdeln } from "../../Images/lin.svg";
import footerleaf from "../../Images/footerleaf.png";
import "./Footer.css";

const navitem = [
  { item: "About", id: "#about" },
  { item: "Bookings", id: "#bookings" },
  { item: "Services", id: "#services" },
  { item: "Menu", id: "#menu" },
  { item: "Download", id: "#download" },
  { item: "ContactUs", id: "#footer" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.validity.valid);
  };

  return (
    <div
      id="footer"
      className="mx-6 mt-[-35%] sm:mx-20 sm:mt-[-10%] md:mt-[-55%] md:mx-10 lg:mt-[-60%] relative h-screen flex flex-col items-center justify-center bg-slate-50  overflow-hidden"
    >
      <img
        className="hidden sm:block absolute left-[-5%] top-14 md:top-0 lg:left-[14%] lg:top-[20%] bottom-0 z-1 w-[120px] h-[460px] md:h-[530px] md:w-[210px] lg:w-[300px] lg:h-[490px] leaf-animation"
        src={footerleaf}
      />
      <div className="mt-[-20%] sm:mt-32 md:mt-[-70%] lg:mt-[15%]">
        <h1 className="text-lg md:text-2xl font-semibold text-[#051650]">
          Get notified
          <br /> about new amazing products
        </h1>
      </div>
      <div className="text-[10px] md:text-xs text-zinc-500 mt-6 mx-10 sm:mx-28 md:mx-44 lg:mx-[460px]">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It has been the industry's standard dummy text aver since.
        </p>
      </div>

      <div className="relative mt-8 max-w-xs">
        <input
          className="text-[10px] py-2 pl-6 pr-14 md:py-3 md:pr-24 text-left rounded-full border border-gray-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="absolute left-[50%] md:left-[45%] lg:left-[40%] right-0 top-[-10px] bottom-0 z-1 transition transform hover:scale-110 duration-200">
          <ArrowButton className="w-[170px] h-[60px] md:w-[220px] md:h-[70px]" />
        </button>
        {!isValidEmail && (
          <p className="text-red-500 text-xs mt-2">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className="flex gap-x-4 text-[6px] sm:text-[8px] p-8 text-zinc-500 mt-12">
        {navitem.map((item) => (
          <a
            className="font-bold p-1.5 hover:underline hover:scale-110 hover:text-gray-950 transition duration-300 hover:shadow-xl rounded-md hover:bg-slate-300"
            href={item.id}
            key={item.id}
          >
            {item.item}
          </a>
        ))}
      </div>

      <div className="flex mt-10 sm:ml-44 sm:mt-20 gap-x-10 max-w-max overflow-hidden">
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="py-1 hover:scale-110 hover:text-gray-950 transition duration-300 hover:shadow-xl rounded-md hover:bg-slate-300"
          >
            <Fb style={{ width: "20px", height: "10px" }} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="py-1 hover:scale-110 hover:text-gray-950 transition duration-300 hover:shadow-xl rounded-md hover:bg-slate-300"
          >
            <Insta style={{ width: "20px", height: "10px" }} />
          </a>

          <a
            href="https://www.linkedin.com/home"
            target="_blank"
            className="py-1 hover:scale-110 hover:text-gray-950 transition duration-300 hover:shadow-xl rounded-md hover:bg-slate-300"
          >
            <Linkdeln style={{ width: "20px", height: "10px" }} />
          </a>
        </div>
        <div className="text-[8px] text-zinc-500 py-1">© 2002 Techwerte World.</div>
      </div>
    </div>
  );
}

export default Footer;
