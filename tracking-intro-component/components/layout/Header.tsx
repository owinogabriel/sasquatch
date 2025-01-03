import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg"



const Header: React.FC = () =>{
  return(
    <header className="bg-white">
      {/* logo */}
      <div className="flex items-center space-x-2 mt-[3rem] ml-[5rem]">
        <Image src={logo} 
        alt="Logo" 
        className="h-10 w-10"
        quality={100} />
      </div>

      {/* navbar */}
      <nav className="justify-self-end mr-[10rem] mt-[-2rem]"
     >
        <ul className="uppercase inline-flex gap-4  font-medium cursor-pointer">
          <li className="hover:underline">  <a href="">Project</a></li>
          <li className="hover:underline">  <a href="">Features</a></li>
          <li className="hover:underline">  <a href="">Pricing</a></li>
        </ul>

     <button className="ml-[2rem] font-semibold">Login</button>

      </nav>
    </header>
  )
}

export default Header;