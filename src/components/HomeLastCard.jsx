import React from 'react'
import smart from '../assets/images/safe_home_properties_smart.jpg'
import woman from '../assets/images/safe_home_properties_woman.png'
import { Link } from 'react-router-dom'

const HomeLastCard = () => {
  return (
    <div className='relative w-full'>
        <img src={smart} alt="Smart" className='md:h-120 md:w-full' />
        <div className='flex justify-spaced absolute w-92 h-50 md:h-90 bottom-50 md:bottom-110 md:w-300 md:mx-20 border border-orange-700 rounded-lg'>
            <div className='text-white md:pt-20 ps-1 md:ps-3 md:ps-10'>
                <p className='md:text-5xl font-[500] my-5'>Start Living Smarter Today</p>
                <p>Unlock the potential of a seamless
                     <span className='block'>community management system!</span>
                     </p>
                <div className='flex justify-evenly mt-3 md:mt-10'>

                <button className='bg-omaOrange py-1 md:py-2 px-1 md:px-5 rounded-2xl'><Link to={'/get-started'}>Get Started</Link></button>
                <button className='border-2 py-1 md:py-2 px-1 md:px-5 rounded-2xl ms-2'><Link to={'/listings'}>See Property Listings</Link></button>
                </div>
            </div>
           
        </div>
 <img src={woman} alt="safe home properties" className='relative bottom-50 left-60 md:bottom-100 md:left-180 size-40 md:size-100 -ms-[25px] md:-ms-30' />
    </div>
  )
}

export default HomeLastCard