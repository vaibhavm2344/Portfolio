import React from 'react'
import ExternalLinks from '../components/ExternalLinks'

const Contact = () => {
  return (
    <section className='flex h-[100vh] pt-25' id='contact'>
      <div className='flex-1 flex justify-center items-center'>
        <p className='text-3xl font-semibold outfit text-center text-[var(--text-primary)]'>I'm always excited to connect with new people! Whether it's a project, a question, or just a hello, feel free to reach out.</p>
      </div>
      <div className='flex-1 flex-col'>
        <form action="" className='flex flex-col items-center border border-[var(--subheading-color)] mt-10 mx-20 py-8 px-10 bg-[var(--contact-form)] gap-5 rounded-t-2xl'>
          <input type="text" placeholder='Name' className='border border-[var(--subheading-color)] p-4 rounded-full w-full'/>
          <input type="email" placeholder='Email' className='border border-[var(--subheading-color)] p-4 rounded-full w-full'/>
          <textarea type="text" placeholder='Message' className='border border-[var(--subheading-color)] p-4 rounded-lg w-full'/>
          <button className='border border-[var(--subheading-color)] w-fit px-4 py-2 rounded-full text-[var(0f172a)] cursor-pointer'>Let's Connect</button>
        </form>
        <div className='flex justify-center'>
          <ExternalLinks />

        </div>
        </div>
    </section>
  )
}

export default Contact
