import React from 'react'

const CTA = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center p-4 md:p-24 bg-black'>
      <h4 className='pb-4 text-2xl text-white'>Ready to watch? Enter your email to create or restart your membership.</h4>
      <div className='flex flex-col md:flex-row items-center justify-center w-full'>
          <input type="email" placeholder='Enter Your Email' className='w-full md:w-2/5 py-2 md:py-4 px-3 md:mr-2 mb-2 md:mb-0 border border-gray-800 rounded-md' />
          <button className='w-full md:w-1/4 md:py-4 py-4 px-4 bg-red-600 text-white text-xl rounded-md md:my-0 flex items-center justify-center'>
            Get Started 
            <svg className="pl-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
          </button>
        </div>
    </div>
    <hr class="h-2 bg-gray-800 border-0 dark:bg-gray-800"></hr>
    </>
  )
}

export default CTA