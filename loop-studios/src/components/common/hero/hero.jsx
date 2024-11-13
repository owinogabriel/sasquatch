import React from 'react';

const Hero = () => {
  return (
    <section className="mt-10 mb-5 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <img
          src="/images/desktop/hrr.jpg"
          alt="Person using VR headset"
          className="w-full md:w-1/2 object-scale-down"
        />
        <div className="bg-white p-6 md:p-10 max-w-md md:ml-0 md:mt-0 text-center md:text-left  -mt-[20rem] ml-[40rem] goat">
          <h1 className="text-2xl font-bold mb-4 ">
            THE LEADER IN <br /> INTERACTIVE VR
          </h1>
          <p className="text-gray-600 text-start text-lg">
            Founded in 2011, Loopstudios has been producing world-class
            virtual reality projects for some of the best companies around the
            globe. Our award-winning creations have transformed
            businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
