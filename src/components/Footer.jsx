import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div>
      <p className='text-center'>Copywrite © {year} Vaibhav</p>
    </div>
  )
}

export default Footer
