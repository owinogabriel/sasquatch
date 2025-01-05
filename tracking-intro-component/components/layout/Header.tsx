import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg"
import devices from "@/public/devices.svg"



const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white bg-no-repeat bg-cover  "
     >
       
      {/* logo */}
      <div className="flex items-center space-x-2 mt-[3rem] ml-[5rem]">
        <Image src={logo}
          alt="Logo"
          className="h-10 w-10"
          quality={100} />
      </div>
     
      {/* Hamburger Menu for Mobile */}
    {/* Hamburger Menu for Mobile */}
<button
  className="text-black text-3xl md:hidden absolute top-9 right-4 z-50"
  aria-label="Toggle menu"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  {menuOpen ? "X" : "☰"}
</button>

      {/* Menu */}
      <nav
        className={`absolute top-16 right-4 bg-white shadow-lg rounded-md p-6 w-56 z-40 ${
          menuOpen ? 'block' : 'hidden'
        } md:block md:relative md:mt-[-6rem] md:mr-[9rem] md:justify-self-end md:shadow-none md:p-0`}
      >
        <ul className="space-y-4 md:space-y-0 md:flex md:gap-8  text-center">
          <li className="hover:underline"><a href="#" className="hover:text-blue-500">PRODUCT</a></li>
          <li className="hover:underline"><a href="#" className="hover:text-blue-500">FEATURES</a></li>
          <li className="hover:underline"><a href="#" className="hover:text-blue-500">PRICING</a></li>
          <li className=" border-t md:border-none">
            <a href="#" className="text-gray-400 cursor-pointer hover:bg-slate-400 hover:text-black rounded-md p-2 py-1 md:mt-4">LOGIN</a>
          </li>
        </ul>
      </nav>
      <Image
          src={devices}
          alt="Person using VR headset"
          className="object-contain absolute w-full justify-self-center h-[30%] md:w-[40%]  md:h-[400px] md:absolute md:top-10 md:right-0"
        />

      {/* Hero Section */}
      <div className="flex items-center md:flex-row text-justify flex-col md:p-[9rem] md:mr-[10rem] justify-center md:space-y-10 h-screen">
  <div className="flex flex-col items-center gap-4 justify-center">
    <div className="uppercase inline-flex gap-3 ">
      <span className="bg-black text-base text-white font-medium px-3 py-1 rounded-full">new</span>
      <span className="text-slate-400 font-serif mt-1">monograph dashboard</span>
    </div>
    <h1 className="uppercase text-black font-bold text-3xl">
      powerful insights <br /> into your team
    </h1>
    <p className="text-slate-400 mr-[3rem]  font-medium">
      Project planning and time tracking <br /> for agile teams
    </p>
    <div className="inline-flex gap-3 mt-[2rem] ml-[4rem]">
      <button className="bg-[#FF5D5F] px-5 py-2 rounded-md uppercase text-slate-100 text-lg font-medium hover:bg-[#FF8584]">
        schedule a demo
      </button>
      <span className="uppercase mt-[0.5rem] text-slate-400 tracking-widest">to see a preview</span>
    </div>
  </div>
</div>

    </header>
  )
}

export default Header;