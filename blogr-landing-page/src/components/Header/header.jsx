import React from 'react'

function Header() {
  return (
    <div className='flex bg-[#FF846D] w-[100vw] h-[70vh] -ml-8 -mt-11 rounded-bl-[50px]'>
      <h1 className=' flex mt-10 ml-28 font-extrabold text-4xl text-slate-100'>Blogr</h1>
      <div className='flex m-14 ml-14'> 
        <ul className='inline-flex gap-4 text-slate-100  font-weight: 500;'>
          <li><a href="">Product<span>&#9662;</span></a></li>
          <li><a href="">Company<span >&#9662;</span></a></li>
          <li><a href=""> Connect<span >&#9662;</span></a></li>
        </ul>
      </div>
      <div className=''>
        <div>Login</div>
        <button>Sign Up</button>
      </div>
   
    </div>
  )
}

export default Header