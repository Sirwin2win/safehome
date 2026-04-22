import React from 'react'
import smart from '../assets/images/safe_home_properties_smart.jpg'
import woman from '../assets/images/safe_home_properties_woman.png'
import { Link } from 'react-router-dom'

const HomeLastCard = () => {
  return (
    <div className='relative w-full'>
        <img src={smart} alt="Smart" className='md:h-120 md:w-full' />
        <div className='flex justify-spaced absolute bottom-10 md:w-300 md:mx-20 border border-orange-700 rounded-lg'>
            <div className='text-white md:pt-20 ps-10'>
                <p className='md:text-5xl font-[500] my-5'>Start Living Smarter Today</p>
                <p>Unlock the potential of a seamless
                     <span className='block'>community management system!</span>
                     </p>
                <div className='flex justify-evenly md:mt-10 -mt-15'>

                <button className='bg-omaOrange py-2 px-5 rounded-2xl'><Link to={'/get-started'}>Get Started</Link></button>
                <button className='border-2 py-2 px-5 rounded-2xl'><Link to={'/listings'}>See Property Listings</Link></button>
                </div>
            </div>
            <img src={woman} alt="safe home properties" className='size-40 md:size-100 md:-ms-30' />
        </div>

    </div>
  )
}

export default HomeLastCard