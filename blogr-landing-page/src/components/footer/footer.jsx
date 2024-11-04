import React from 'react'

const Footer = () => {
  return (
    <div className='flex  mt-14 -mb-8 h-[15rem] bg-[#24242C] w-[79rem] px-10 -ml-8 items-center rounded-tr-[55px]'>

      <div className='font-extrabold text-white -mt-[8rem] ml-28 font-serif text-2xl gap-10 align-top'>Blogr</div>
      <div className='inline-flex justify-center text-justify ml-[6rem] gap-[14rem]'>
        <div>
          <div className='font-base text-white text-base mb-3'>Product</div>
          <ul className='text-xs space-y-2' style={{ color: '#FAFAF9' }}>
            <li className='hover:underline'><a href="">Overview</a></li>
            <li className='hover:underline'><a href=""> Pricing</a></li>
            <li className='hover:underline'><a href="">Marketplace</a></li>
            <li className='hover:underline'><a href="">Features</a></li>
            <li className='hover:underline'><a href="">Intergrations</a></li>
          </ul>
        </div>

        <div>
          <div className='font-base text-white text-base mb-3'>Company</div>
          <ul className='text-xs space-y-2' style={{ color: '#FAFAF9' }}>
            <li className='hover:underline'><a href="">About</a></li>
            <li className='hover:underline'><a href=""> Team</a></li>
            <li className='hover:underline'><a href="">Blog</a></li>
            <li className='hover:underline'><a href="">Careers</a></li>
          </ul>
        </div>

        <div>
          <div className='font-base text-white text-base mb-2'>Connect</div>
          <ul className='text-xs space-y-2' style={{ color: '#FAFAF9' }}>
            <li className='hover:underline'><a href="">Contact</a></li>
            <li className='hover:underline'><a href=""> Newsletter</a></li>
            <li ><a href="">Linkedln</a></li>
          </ul>
        </div>


      </div>

    </div>
  )
}

export default Footer;