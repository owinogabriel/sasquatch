import React from 'react'

export const Blogr = () => {
  return (
    <div className='flex  md:w-screen  bg-[#373854] h-[50vh] bg-cover md:text-justify
   -ml-10 rounded-bl-[50px]  bg-left-bottom 
     rounded-tr-[60px] mt-16 bg-no-repeat' style={{
        backgroundImage: "url('assets/bg-circles.svg')",
        backgroundSize: '50%',
      }}>

      <div className='ml-36'>
        <img src="./assets/illustration-phones.svg" alt="" className='w-[65%]' />
      </div>

      <div className=' inline-block'>

        <h2 className='  font-sans
         font-bold mt-[3rem] -ml-[8.1rem] 
        color-[#405973] text-2xl'
          style={{ color: '#FFFFFF' }}>
          State of the Art Infrastructure
        </h2>

        <p className='font-sm md:mt-5 md:-ml-32 md:mr-56 text-stone-100'>With reliability and speed in mind.worldwide data centers provide <br />
          backbone for ultra-fast conectivity. This ensures your site will load <br />
          instantly, no matter where you readers are, keeping your site <br />
          competitive.</p>
      </div>

    </div>
  )
}
export default Blogr;
