import React from "react";
import { ButtonProps } from "@/interfaces";

const Button:React.FC<ButtonProps> = ({title, action}) => {
  return(
  <button onClick={action} className="px-8 py-2 border-none bg-[#F3613C] rounded-full hover:bg-[#FFC7BF] hover:text-white transition-colors duration-300">{title}</button>
  )
}

export default Button;