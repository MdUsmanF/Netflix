import React from 'react'

const Footer = () => {
  return (
    <div className='text-slate-400 text-grey text-sm grid lg:grid-cols-4 md:grid-cols-2 gap-8 p-24 bg-black'>
    <div className='grid grid-rows-1 gap-2'>
        <u>FAQ's</u>
        <u>Investor Relations</u>
        <u>Privacy</u>
        <u>Speed Test</u>
    </div>
    <div className='grid grid-rows-1 gap-2'>
        <u>Help Center</u>
        <u>Jobs</u>
        <u>Cookiee Preference</u>
        <u>Legal Notice</u>
    </div>
    <div className='grid grid-rows-1 gap-2'>
        <u>Account</u>
        <u>Ways to Watch</u>
        <u>Corporate Information</u>
        <u>Only on Netflix</u>
    </div>
    <div className='grid grid-rows-1 gap-2'>
        <u>Media Center</u>
        <u>Terms of Use</u>
        <u>Contact Us</u>
        <u>Refund Policy</u>
    </div>
    <div className='grid grid-rows-1 gap-2 col-12'>
      <span>© Netflix Clone, Designed by MUF</span>
    </div>
    </div>
  )
}

export default Footer