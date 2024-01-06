import React from 'react'

const CTA = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center p-4 md:p-24 bg-black'>
      <h4 className='pb-4 text-2xl text-white'>Ready to watch? Enter your email to create or restart your membership.</h4>
      <div className='flex flex-col md:flex-row items-center justify-center w-full'>
        <input type="email" placeholder='Enter Your Email' className='w-full md:w-2/6 py-4 px-3 mb-2 md:mb-0 md:mr-2 border border-gray-800 rounded-md' />
        <button className='w-full md:w-1/6 py-4 px-4 bg-red-600 text-white rounded-md'>Get Started</button>
      </div>
    </div>
    <hr class="h-2 bg-gray-800 border-0 dark:bg-gray-800"></hr>
    </>
  )
}

export default CTA