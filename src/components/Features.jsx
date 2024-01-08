import React from 'react'
import Feature1 from "../assets/bento_box/watch.png"
import Feature2 from "../assets/bento_box/box1.png"
import Feature3 from "../assets/bento_box/3.png"
import Feature4 from "../assets/bento_box/CreateProfiles.png"


const Features = () => {
  return (
    <>
    <h2 class="pt-16 px-5 bg-black text-white text-4xl md:text-5xl font-bold flex items-center justify-center">
        It's Weekend? Just Binge watch
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 md:p-8 lg:p-24 bg-black">
        <div class="shadow_box md:mb-0 md:col-span-2 rounded-lg p-12 flex flex-col items-center justify-center bg-transparent">
            <img class="w-full md:w-1/2 h-auto mb-4" src={Feature1} alt=""/>
            <div className='text-white text-center'>
                <h1 className='text-3xl md:text-5xl mb-4 font-extrabold'>Download your shows to watch offline</h1>
                <p className='text-base md:text-lg'>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
        <div class="shadow_box md:col-span-1 rounded-xl p-8">
            <img class="w-full rounded-lg mb-4" src={Feature2} alt=""/>
            <div className='text-white text-center'>
                <h1 className='text-3xl md:text-5xl mb-4 font-extrabold'>Enjoy on your TV</h1>
                <p className='text-base md:text-lg'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
        </div>
        <div class="shadow_box md:col-span-1 rounded-xl p-8">
            <img class="w-full rounded-lg" src={Feature3} alt=""/>
            <div className='text-white text-center'>
                <h1 className='text-3xl md:text-5xl mb-4 font-extrabold'>Watch everywhere</h1>
                <p className='text-base md:text-lg'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
        </div>
        <div class="shadow_box mb-4 md:mb-0 md:col-span-2 rounded-lg p-12 flex flex-col items-center justify-center bg-transparent">
            <img class="w-full md:w-1/2 h-auto mb-4" src={Feature4} alt=""/>
            <div className='text-white text-center'>
                <h1 className='text-3xl md:text-5xl mb-4 font-extrabold'>Create profiles for kids</h1>
                <p className='text-base md:text-lg'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
    </div>
    <hr class="h-2 bg-gray-800 border-0 dark:bg-gray-800"></hr>
    </>
  )
}

export default Features