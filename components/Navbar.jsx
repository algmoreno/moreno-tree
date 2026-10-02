import React from 'react'
import "@/styles/globals.css"
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex bg-primary h-40'>
      <div className='l-auto'>
        <Image
          height={400}
          width={220}
          src="/assets/logo.png"
          alt="Tree logo"
        />
      </div>
      <div className='mr-auto my-auto'>
        <h1 className='text-white text-5xl m-10'>
          Family Unfold
        </h1>
      </div>
    </div>
  )
}

export default Navbar