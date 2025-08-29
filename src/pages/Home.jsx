import React from 'react'
import ExternalLinks from '../components/ExternalLinks'

const Home = () => {
  return (
    <section className='flex h-[100vh] mx-25' id='home'>
      <div className='flex flex-col flex-1 justify-center'>
        <h1 className='text-6xl font-bold'>Hi, I'm <span className="text-[var(--primary-color)]">Vaibhav</span></h1>
        <p className='text-lg mt-4 text-[var(--subheading-color)]'>MERN Developer & Problem Solver | Crafting Modern Web Experiences</p>
        <div className='mt-5 flex justify-start gap-6'>
            <a className='border border-[var(--subheading-color)] px-6 py-2 rounded-full hover:bg-[#7c3aed] hover:text-white transition-all duration-300 font-semibold' href='#projects'>Projects</a>
            <a className='border border-[var(--subheading-color)] px-6 py-2 rounded-full bg-[#7c3aed] text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold'  href={`${import.meta.env.BASE_URL}Resume_New.pdf`} download={'Resume'}>Resume</a>
        </div>
       <ExternalLinks/>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <img src={`${import.meta.env.BASE_URL}photo2.jpg`} alt="" width={350} className='rounded-full h-[350px] border-2 border-zinc-300'/>
      </div>
    </section>
  )
}

export default Home
