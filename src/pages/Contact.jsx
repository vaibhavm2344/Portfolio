import React, { useRef,useState } from 'react'
import ExternalLinks from '../components/ExternalLinks'
import emailjs from '@emailjs/browser';

const Contact = () => {
   const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!');
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          alert('❌ Failed to send message, try again later.');
          setIsSending(false);
        }
      );
  };
  return (
    <section className='flex h-[100vh] pt-25' id='contact'>
      <div className='flex-1 flex justify-center items-center'>
        <p className='text-3xl font-semibold outfit text-center text-[var(--text-primary)]'>I'm always excited to connect with new people! Whether it's a project, a question, or just a hello, feel free to reach out.</p>
      </div>
      <div className='flex-1 flex-col'>
        <form ref={formRef}  onSubmit={sendEmail} action="" className='flex flex-col items-center border border-[var(--subheading-color)] mt-10 mx-20 py-8 px-10 bg-[var(--contact-form)] gap-5 rounded-t-2xl'>
          <input type="text" placeholder='Name' name="name" required className='border border-[var(--subheading-color)] p-4 rounded-full w-full'/>
          <input type="email" placeholder='Email' name="email" required className='border border-[var(--subheading-color)] p-4 rounded-full w-full'/>
          <textarea type="text" placeholder='Message' name="message" required className='border border-[var(--subheading-color)] p-4 rounded-lg w-full'/>
          <button disabled={isSending} type="submit" className='border border-[var(--subheading-color)] w-fit px-4 py-2 rounded-full text-[var(0f172a)] cursor-pointer hover:scale-105 transition-all duration-300'>Let's Connect</button>
        </form>
        <div className='flex justify-center'>
          <ExternalLinks />

        </div>
        </div>
    </section>
  )
}

export default Contact
