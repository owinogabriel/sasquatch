import React from 'react'

export default function Navbar() {
  return (
    <div className="w-screen h-screen justify-between bg-[url('/images/desktop/hero.jpg')] flex text-white bg-no-repeat">
      <div className='mt-[4rem] ml-[10rem] text-4xl font-extrabold'>loopstudios</div>
      
     
    
      <div className='inline-grid mt-[5rem]  '>
        <ul className='inline-flex gap-6 mr-[5rem] ml-[30rem]'>
          <li><a href="">About</a></li>
          <li><a href="">Careers</a></li> 
          <li><a href="">Events</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Support</a></li>
        </ul>
        <div className='border h-[12rem]  flex w-[23rem] mt-[5rem] mr-[50rem] '>
          <div className='text-5xl font-thin ml-5 mt-4'>
          IMMERSIVE <br />  EXPERIENCES <br />THAT DELIVER
          </div>
          </div>
      </div>
     
    </div>
  )
}
 