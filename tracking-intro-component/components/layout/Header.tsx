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

        <button className="ml-[2rem] text-[#CACACC] font-semibold font-sans hover:bg-[#EDF2F6] p-2 py-1 rounded-md hover:text-slate-900">Login</button>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center  mt-[6rem]  mr-[15rem]">
        <div className="flex flex-col items-center gap-4 justify-start">
          <div className="uppercase inline-flex gap-3 ">
            <span className=" bg-black text-base text-white font-medium px-3 py-1 rounded-full">new</span>
            <span className="text-slate-400 font-serif mt-1">monograph dashboard</span>
          </div>
          <h1 className="uppercase justify-center  text-black font-bold text-justify text-3xl">
            powerful insights <br /> into your team
          </h1>

          <p className="text-slate-400 text-justify font-medium mr-[3rem]">Project planning and time tracking <br /> for agile teams</p>
          <div className="inline-flex gap-3  mt-[2rem] ml-[4rem]">
            <button className="bg-[#FF5D5F] p-5 rounded-md py-2 uppercase text-slate-100 text-lg font-medium hover:bg-[#FF8584]">
              shedule a demo
            </button>
            <span className="uppercase mt-[0.5rem] text-slate-400 tracking-widest">to see a preview</span>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;