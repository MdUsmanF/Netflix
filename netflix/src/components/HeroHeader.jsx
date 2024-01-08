import React from 'react'
import Navbar from './Navbar'

const HeroHeader = () => {
  return (
  <div className='netflix__header_container'>
    <Navbar/>
    <div className='netflix__content flex flex-col items-center justify-center sm:px-10 h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white'>Unlimited movies, TV shows and more</h1>
        <h4 className='text-base md:text-lg mb-2 md:mb-4 text-white'>Watch anywhere. Cancel anytime.</h4>
        <h4 className='text-base md:text-lg mb-2 md:mb-4 text-white'>Ready to watch? Enter your email to create or restart your membership.</h4>
        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
          <input type="email" placeholder='Enter Your Email' className='w-full md:w-2/5 py-2 md:py-4 px-3 md:mr-2 mb-2 md:mb-0 border border-gray-800 rounded-md' />
          <button className='w-full md:w-1/4 md:py-4 px-4 bg-red-600 text-white text-xl rounded-md md:my-0 flex items-center justify-center'>
            Get Started 
            <svg className="pl-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroHeader