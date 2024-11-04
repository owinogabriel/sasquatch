import React from 'react'

const Future = () => {
  return (
    <div className='flex mt-40 py-16 px-10 text-justify bg-no-repeat bg-right' style={{
      backgroundImage: "url('assets/editor-desktop.svg')",
      backgroundSize: '46%',


    }}>
      <div>

        <div className=' text-center ml-[70%] font-sans font-bold w-max -mt-10 mb-28 text-3xl' style={{ color: '#405973' }}>
          <h1>Designed for the future</h1>
        </div>

        <div className='mb-10'>
          <h2 className='mb-2 font-sans font-bold w-max -mt-14  text-xl' style={{ color: '#405973' }}>Introduction and extensible editor</h2>
          <p className='font-normal mb-12' style={{ color: '#AFB3B6' }}>Blogr feature an exceedingly intuitive interface which lets you focus <br />
            on one thin: creating content. The editor supports management of <br /> multiples blogs and allows easy manipulation of embeds such as images, <br />
            videos, and Markdown. Extensibility with plugins and themes provide <br /> easy ways to add
            functoinality or change the looks blog.</p>
        </div>

        <div className='mt-24'>
          <h2 className='mb-2 font-sans font-bold w-max -mt-14  text-xl' style={{ color: '#405973' }}>Robust content management</h2>
          <p className='font-normal' style={{ color: '#AFB3B6' }}>Flexible content management enables users to easily move through <br /> posts. Increase the usability of your blog by adding customized <br />
            categories, section, format, or flow. With this functionality, you're in <br /> full control.</p>
        </div>

      </div>
    </div>
  )
}

export default Future;