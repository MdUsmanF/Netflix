import React from 'react'
import Navbar from './Navbar'

const HeroHeader = () => {
  return (
    <div className='netflix__header_container'>
      <Navbar/>
      <div className='flex flex-col items-center justify-center pt-36'>
    <div className='text-center'>
      <h1 className='text-5xl font-bold mb-4 text-white'>Unlimited movies, TV shows and more</h1>
      <h4 className='text-lg mb-4 text-white'>Watch anywhere. Cancel anytime.</h4>
      <h4 className='text-lg mb-4 text-white'>Ready to watch? Enter your email to create or restart your membership.</h4>
      <div className='flex items-center justify-center'>
        <input type="email" placeholder='Enter Your Email' className='w-2/5 py-4 px-3 mr-2 border border-gray-800 rounded-md' />
        <button className='w-1/4 py-4 px-4 bg-red-600 text-white rounded-md'>Get Started</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default HeroHeader