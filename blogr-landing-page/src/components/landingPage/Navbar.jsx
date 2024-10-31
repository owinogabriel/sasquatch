import React from 'react'
// import bg from '../assets/bg.svg'

function NavBar() {
  return (
    <nav className="flex  justify-between bg-[url('/assets/bg.svg')] bg-cover bg-center bg-[#FF846D]
     w-screen h-[80vh] -ml-8 
    -mt-11 rounded-bl-[50px]" 
    style={{ backgroundSize: '120%' }}>

      <div className=' inline-flex mt-10 ml-[10rem] 
      font-extrabold text-4xl
       text-slate-100'>Blogr
      </div>

      <div className=' m-14 mr-[30rem]'> 
        <ul className='inline-flex gap-4 text-slate-100  
        font-weight: 500;'>
          <li><a href="">Product<span>&#9662;</span></a></li>
          <li><a href="">Company<span >&#9662;</span></a></li>
          <li><a href=""> Connect<span >&#9662;</span></a></li>
        </ul>
      </div>
      
      <div className='flex h-[3rem] font-weight: 500  gap-8 mt-10 
       mr-16 text-slate-100 font-medium'>
       <button className=' '>Login</button>
       <button className='  bg-[#FE7D87] w-max  py-2 px-4 rounded-xl'>Sign Up</button>
      </div>
   
     </nav>
  )
}

export default NavBar;