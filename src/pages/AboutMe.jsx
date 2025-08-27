import React from 'react'
import Education from '../components/Education'

const AboutMe = () => {
  return (
    <section className='flex h-[100vh] pt-25' id='about'>
        <div className='flex-1 flex flex-col gap-6 justify-between'>
          <p>Avatar comming soon...</p>
          <p className='text-lg text-center mb-5'>Bridging creativity and technology, I craft user-friendly web experiences using the MERN stack. Always curious, always building.</p>
        </div>
        <div className='flex-1 '>
          <Education/>
        </div>
    </section>
  )
}

export default AboutMe
