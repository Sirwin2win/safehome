import React from 'react'
import smart from '../assets/images/safe_home_properties_smart.jpg'
import woman from '../assets/images/safe_home_properties_woman.png'

const HomeLastCard = () => {
  return (
    <div className='relative w-full'>
        <img src={smart} alt="Smart" className='h-120 w-full' />
        <div className='flex justify-spaced absolute bottom-10 w-300 mx-20 border border-orange-700 rounded-lg'>
            <div className='text-white pt-20 ps-10'>
                <p className='text-5xl font-[500] my-5'>Start Living Smarter Today</p>
                <p>Unlock the potential of a seamless
                     <span className='block'>community management system!</span>
                     </p>
                <div className='flex justify-evenly mt-10'>

                <button className='bg-omaOrange py-2 px-5 rounded-2xl'>Get Started</button>
                <button className='border-2 py-2 px-5 rounded-2xl'>See Property Listings</button>
                </div>
            </div>
            <img src={woman} alt="safe home properties" className='size-100 -ms-30' />
        </div>

    </div>
  )
}

export default HomeLastCard