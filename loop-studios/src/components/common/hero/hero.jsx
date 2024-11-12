import React from 'react';

const Hero = () => {
  return (
    <div
      className="flex flex-col bg-[url('/images/desktop/hrr.jpg')] md:flex-row items-center justify-center mt-10 mb-5 ml-[rem] bg-no-repeat bg-center"
      style={{
        backgroundSize: '50%',
      }}
    >
      <div className="bg-white p-6 md:p-10 max-w-md ml-[48rem] mt-[20rem] ">
        <h1 className="text-3xl font-bold mb-4">
          THE LEADER IN <br /> INTERACTIVE VR
        </h1>
        <p className="text-gray-600">
          Founded in 2011, Loopstudios has been producing world-class <br />
          virtual reality projects for some of the best companies around the <br />
          globe. Our award-winning creations have transformed <br />
          businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Hero;
