import React from 'react'

export const Footer = () => {
  return (

    <section className='bg-black w-full h-[30vh] flex mb-0 footer'>
      <div className='flex mt-[2rem] ml-[8rem]'>

        <div className='text-white text-3xl font-bold logo2'>
          <h1>loopstudios</h1>
        </div>
        <div className='text-white mt-[3rem] list'>
          <ul className=' space-x-3 -ml-[10.5rem] md:grid-cols-2 lg:grid-cols-1'>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Support</a></ul>
        </div>

        <div className='text-white mt-[3rem]  hidden list2'>
          <ul className=' space-x-3 gap-6 text-justify -ml-[8rem] mt-5 grid grid-cols-1 '>
            <a href="#" className="hover:underline ml-3">About</a>
            <a href="#" className="hover:underline ml-3">Careers</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Support</a></ul>
          <div className='inline-flex justify-between gap-4 -ml-[10rem]  mt-[2rem]'>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer ">
              <img src="images/facebook.svg" alt="Facebook" />
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="images/twitter.svg" alt="Facebook" />
            </a>

            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src="images/pinterest.svg" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="images//instagram.svg" alt="Facebook" />
            </a>
            <footer className='text-[#646363] -ml-[14rem] text-base mt-[2rem]'>
            &copy;2021 Loopstudios.All rights reserved.
          </footer>
          </div>
       

        </div>
        <div className=' ml-[30rem] mtn'>

          <div className='inline-flex justify-between gap-4 ml-[8rem] '>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer ">
              <img src="images/facebook.svg" alt="Facebook" />
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="images/twitter.svg" alt="Facebook" />
            </a>

            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src="images/pinterest.svg" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="images//instagram.svg" alt="Facebook" />
            </a>
          </div>
          <footer className='text-[#646363] mr-[5rem] text-base mt-[1rem] hrm'>
            &copy;2021 Loopstudios.All rights reserved.
          </footer>

        </div>

      </div>

    </section>

  )
}
