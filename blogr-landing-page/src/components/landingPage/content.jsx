import React from 'react'

const Content = () => {
  return (
    <div className='px-24 -mt-72 justify-between' >

      <h1 className='font-extrabold text-4xl
    text-slate-100'>A modern publishing platform</h1>
      <p className='mt-5 text-slate-100  
        font-weight: 500;'>
        Grow your audience and build your online brand
      </p>

      <div className=' flex  justify-center font-weight: 500  gap-8 mt-10 
       mr-16 text-slate-100 font-medium'>
        <button className='  bg-[#FE7D87]   py-2 px-4 rounded-xl'> Start For Free</button>
        <button className='  bg-[#FDFFFF]   text-orange-500 py-2 px-4 rounded-xl hover:bg-neutral-800'>Learn More</button>
      </div>

    </div>
  )
}

export default Content;