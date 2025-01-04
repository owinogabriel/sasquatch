import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg"



const Header: React.FC = () => {
  return (
    <header className="bg-white  bg-no-repeat bg-cover  w-full  h-[400px] bg-right"
      style={{
        backgroundImage: "url('devices.svg')",
        backgroundSize: '40%'
      }}>
      {/* logo */}
      <div className="flex items-center space-x-2 mt-[3rem] ml-[5rem]">
        <Image src={logo}
          alt="Logo"
          className="h-10 w-10"
          quality={100} />
      </div>

      {/* navbar */}
      <nav className="justify-self-end mr-[6rem] mt-[-2rem]" >
        <ul className="uppercase inline-flex gap-4  font-medium cursor-pointer">
          <li className="hover:underline">  <a href="">Project</a></li>
          <li className="hover:underline">  <a href="">Features</a></li>
          <li className="hover:underline">  <a href="">Pricing</a></li>
        </ul>

        <button className="ml-[2rem] text-[#EDF2F6] font-semibold">Login</button>
      </nav>
      
         {/* Hero Section */}
      <div className="flex items-center justify-center h-[50%] text-center mr-[15rem]">
        <div className="uppercase inline-flex gap-3 ">
         <h1 className=" bg-black text-base text-white font-medium px-3 py-1 rounded-full">new</h1>
         <span className="text-slate-400 font-serif mt-2">monograph dashboard</span>
        </div>
      </div>
    </header>
  )
}

export default Header;