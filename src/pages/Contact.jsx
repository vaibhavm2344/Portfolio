import React from 'react'
import ExternalLinks from '../components/ExternalLinks'

const Contact = () => {
  return (
    <section className='flex h-[100vh] pt-25' id='contact'>
      <div className='flex-1 flex justify-center items-center'>
        <p className='text-xl text-center'>I'm always excited to connect with new people! Whether it's a project, a question, or just a hello, feel free to reach out.</p>
      </div>
      <div className='flex-1 flex-col'>
        <form action="" className='flex flex-col items-center border border-black/30 mt-10 mx-20 py-8 px-10 bg-slate-100 gap-5 rounded-t-2xl'>
          <input type="text" placeholder='Name' className='border border-black/30 p-4 rounded-full w-full'/>
          <input type="email" placeholder='Email' className='border border-black/30 p-4 rounded-full w-full'/>
          <textarea type="text" placeholder='Message' className='border border-black/30 p-4 rounded-lg w-full'/>
          <button className='border border-black/30 w-fit px-4 py-2 rounded-full'>Let's Connect</button>
        </form>
        <div className='flex justify-center'>
          <ExternalLinks />

        </div>
        </div>
    </section>
  )
}

export default Contact
