import React from 'react'
import "/workspaces/Netflix/netflix/src/components/components.style.css"
import Logo from "../assets/netflix_logo.png"

const Navbar = () => {
  return (
  <div className='flex md:flex-row py-3 md:py-10 px-5 md:px-28 sm:px-32 items-center z-10'>
    <div className='flex-1 md:w-1/2'>
      <img src={Logo} alt="Logo" className='netflix__logo w-full md:w-auto'/>
    </div>
    <div className='flex justify-end'>
      <button type="button" className='content-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-6 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
        Sign in
      </button>
    </div>
  </div>
  )
}

export default Navbar