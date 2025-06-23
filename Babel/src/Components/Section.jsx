import React from 'react'

const Section = () => {
  return (
    <div className="relative h-screen w-full bg-[url('https://seekvectors.com/files/download/191c8231762936666cbf339133e42dc9.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pt-6">
        <h1 className="text-4xl text-yellow-500 var(--ifm-heading-color) font-bold text-7xl">Babel is a JavaScript compiler.</h1>
        <p className="mt-2 text-4xl font-semibold">Use next generation JavaScript, today</p>
        <button className="mt-4 px-6 py-3  text-black-800  rounded-lg bg-yellow-600 transition">
        Babel 7.26 is released! Please read our blog post for highlights and changelog for more details!
        </button>
      </div>
      <ul>
      <li><img src="" alt="" /></li>
      <li></li>
    </ul>
    </div>
    
    
    
  )
}

export default Section
