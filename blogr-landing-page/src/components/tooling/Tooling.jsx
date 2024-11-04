import React from 'react'

const Tooling = () => {
  return (
    <div className="flex  mt-28 mb-20 bg-[url('assets/desktop.svg')] bg-cover bg-no-repeat text-justify justify-center" style={{
      backgroundSize: '55%'
    }}>
      <div className='ml-[40rem] mt-[5rem]'>

        <div className=' mb-14 '>
          <h3 className='mb-7 font-semibold text-xl' style={{ color: '#405973' }}>Free, open, simple</h3>

          <p className='text-base' style={{ color: '#AFB3B6' }}>Blogr is free and open source application backed by a large <br />
            community of helping developers. It supports features such as a code <br />
            syntax highlighting. RSS feeds, social media intergration, third-party <br />
            commenting tools, and wors seamlessly with Google Analytics. The <br /> architecture
            is clean and is relatively easy to learn.</p>

        </div>

        <div className='mb-8'>
          <h3 className='mb-7 font-semibold text-xl' style={{ color: '#405973' }}>Powerful tooling</h3>

          <p className='text-base' style={{ color: '#AFB3B6' }}>Batteries included. We built a simple and straightfoward CLI tool that <br />
            makes customized and deployment a breeze. but capable of <br />
            producing even the most complicated sites</p>

        </div>

      </div>

    </div>
  )
}

export default Tooling;