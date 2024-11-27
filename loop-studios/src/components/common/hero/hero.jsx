import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-full flex md:flex-row flex-col items-start justify-start md:space-y-10">
        <div className="h-60 w-full md:h-96 md:w-96 flex items-center jusitify-center">
        <img
          src="/images/desktop/hrr.jpg"
          alt="Person using VR headset"
          className="object-contain w-full h-[100%]"
        />
        </div>
        <div className="p-10 flex flex-col items-center justify-center w-full">
          <h1 className="md:text-6xl text-4xl font-regular mb-4  md:w-full w-96 md:text-start text-center">
            THE LEADER IN INTERACTIVE VR
          </h1>
          <p className="w-[80%] text-gray-600 md:text-start text-lg md:text-start text-center">
            Founded in 2011, Loopstudios has been producing world-class
            virtual reality projects for some of the best companies around the
            globe. Our award-winning creations have transformed
            businesses through digital experiences that bind to their brand.
          </p>
        </div>
    </section>
)};

export default Hero;
