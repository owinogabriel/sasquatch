import React from 'react';

const Creation = () => {
  const items = [
    { src: '/images/desktop/image1.jpg', text: 'DEEP EARTH' },
    { src: '/images/desktop/image.jpg', text: 'NIGHT ARCADE' },
    { src: '/images/desktop/image3.jpg', text: 'SOCCER TEAM VR' },
    { src: '/images/desktop/grid.jpg', text: 'THE GRID' },
    { src: '/images/desktop/above.jpg', text: 'FROM UP ABOVE VR' },
    { src: '/images/desktop/pocket.jpg', text: 'POCKET BOREALIS' },
    { src: '/images/desktop/curiosity.jpg', text: 'THE CURIOSITY' },
    { src: '/images/desktop/fisheye.jpg', text: ' MAKE IT FISHEYE' }
  ];

  const mobile = [
    { src: '/images/mobile/deep.jpg', text: 'DEEP EARTH' },
    { src: '/images/mobile/night.jpg', text: 'NIGHT ARCADE' },
    { src: '/images/mobile/soccer.jpg', text: 'SOCCER TEAM VR' },
    { src: '/images/mobile/grid.jpg', text: ' THE GRID' },
    { src: '/images/mobile/above.jpg', text: 'FROM UP ABOVE VR' },
    { src: '/images/mobile/pocket.jpg', text: ' POCKET BOREALIS' },
    { src: '/images/mobile/curiosity.jpg', text: 'THE CURIOSITY' },
    { src: '/images/mobile/fisheye.jpg', text: 'MAKE IT FESHEYE' },
  ]

  return (
    <section className='mt-[4rem] mb-[4rem] '>

      {/* {creation and button } */}
      <div className='flex justify-between'>
        <div className='text-3xl font-light ml-[4rem] mb-[2rem] header'>
          <h1>OUR CREATIONS</h1>
        </div>

        <div className='mr-[5rem] font-normal text-base gallery'>
          <button className='border border-black px-4 rounded-sm md:hidden'>SEE ALL</button>
        </div>

      </div>
      {/* {desktop gallery} */}
      <div className="grid grid-cols-4 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4   ml-[3rem] mr-[3rem] gallery">
        {items.map((item, index) => (
          <div key={index} className="relative rounded overflow-hidden">
            <img src={item.src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer hover:bg-sky-500" />
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center mt-[23rem] -ml-[4rem] text-2xl">
              <span className="text-white  font-light">{item.text}</span>
            </div>
          </div>
        ))}

      </div>

      {/*mobile layout*/}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4   ml-[3rem] mr-[3rem] mobile">
        {mobile.map((item, index) => (
          <div key={index} className="relative rounded overflow-hidden">
            <img src={item.src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer hover:bg-sky-500" />
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-lg mt-[4rem] mr-[5rem] text-start">
              <span className="text-white  font-light">{item.text}</span>
            </div>

          </div>

        ))}
        <div className='ml-[12rem] font-normal text-base mobile'>
          <button className='border border-black px-4 rounded-sm md:hidden bnt'>SEE ALL</button>
        </div>
      </div>
    </section>
  );
};

export default Creation;
