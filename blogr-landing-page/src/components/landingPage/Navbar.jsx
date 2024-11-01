import React from 'react';
// import bg from '../assets/bg.svg'

function NavBar() {
  return (
    <nav
      className="flex justify-between bg-[url('/assets/bg.svg')] bg-cover bg-center bg-[#FF846D]
     w-screen h-[80vh] -ml-8 -mt-11 rounded-bl-[50px]"
      style={{ backgroundSize: '120%' }}
    >
      <div className="inline-flex mt-10 ml-[10rem] font-extrabold text-4xl text-slate-100">
        Blogr
      </div>

      <div className="m-14 mr-[30rem]">
        <ul className="inline-flex gap-4 text-slate-100 font-medium">
          <li className="hover:underline">
            <a href="">
              Product<span>&#9662;</span>
            </a>
          </li>
          <li className="hover:underline">
            <a href="">
              Company<span>&#9662;</span>
            </a>
          </li>

          {/* Dropdown Menu Item for Contact */}
          <li className="relative group">
            <a href="#" className="hover:underline">
              Contact <span className="">&#9662;</span>
            </a>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 hidden mt-2 w-32 bg-white text-gray-800 shadow-md rounded group-hover:block">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  LinkedIn
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex h-[3rem] gap-8 mt-10 mr-16 text-slate-100 font-medium">
        <button className="">Login</button>
        <button className="bg-[#FE7D87] w-max py-2 px-4 rounded-xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
