import React from 'react'

export const Footer = () => {
  return (

    <section className='bg-black w-screen h-[30vh] flex mb-0'>
      <div className='flex mt-[2rem] ml-[8rem]'>

        <div className='text-white text-3xl font-bold logo'>
          <h1>loopstudios</h1>
        </div>
        <div className='text-white mt-[3rem]'>
          <ul className=' space-x-3 -ml-[10.5rem]'>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Support</a></ul>
        </div>
        <div className=' ml-[30rem] '>

          <div className='inline-flex justify-between gap-4 ml-[8rem] '>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer ">
              <img src="images/facebook.svg" alt="Facebook" />
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="images/twitter.svg" alt="Facebook" c />
            </a>

            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src="images/pinterest.svg" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="images//instagram.svg" alt="Facebook" />
            </a>
          </div>
          <footer className='text-[#646363] mr-[5rem] text-base mt-[1rem]'>
            &copy;2021 Loopstudios.All rights reserved.
          </footer>

        </div>

      </div>

    </section>

  )
}
