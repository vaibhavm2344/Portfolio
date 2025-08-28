import React from 'react'
import ExternalLinks from '../components/ExternalLinks'

const Home = () => {
  return (
    <section className='flex h-[100vh] mx-25' id='home'>
      <div className='flex flex-col flex-1 justify-center'>
        <h1 className='text-6xl font-bold'>Hi, I'm <span className="text-[var(--primary-color)]">Vaibhav</span></h1>
        <p className='text-lg mt-4 text-neutral-500'>MERN Developer & Problem Solver | Crafting Modern Web Experiences</p>
        <div className='mt-5 flex justify-start gap-6'>
            <a className='border px-6 py-2 rounded-full' href='#projects'>Projects</a>
            <a className='border px-6 py-2 rounded-full' href='src\assets\Resume_New.pdf' download={'Resume'}>Resume</a>
        </div>
       <ExternalLinks/>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <img src="/photo2.jpg" alt="" width={350} className='rounded-full h-[350px] border-2 border-[var(--primary-color)]'/>
      </div>
    </section>
  )
}

export default Home
