import React from 'react'
import aiAgent from '../assets/vectors/aiAgent.png'


const HomeCard3 = () => {
  return (
    //   <div className='flex justify-evenly bg-[#AAEBB980] mx-20 mt-10 rounded-md'>
      <div className='flex justify-center bg-[#AAEBB980] mx-5 md:mx-20 md:justify-evenly mt-10 rounded-md md:h-120'>
          {/* <img src={aiAgent} alt="payment card" className='w-40 bg-[#AAEBB9] md:w-150' /> */}
<div>
       <div className='h-40 w-40  bg-[#AAEBB9] md:w-150 md:h-90'>
         <img src={aiAgent} alt="payment card" className='pt-10 md:pt-0 md:size-105' />
       </div>
          <div className='h-25 w-20 bg-[#AAEBB9] md:h-30 md:w-70'></div>
        </div>


          <div className='mt-0 w-50 md:w-150 md:ms-5'>
              <p className='md:text-3xl font-bold mb-5 md:mb-1 md:mt-15 px-2'>Simplified Payments</p>
              <p className='-mt-5 md:mt-10 px-2 md:text-xl'>
                Our Personalized User Dashboard
delivers a customized experience that
lets you easily save favorite
properties, monitor your inquiries, and
compare listings effortlessly.
<span className='hidden md:block'>Whether you’re buying, renting, or managing</span>
<span className='hidden md:block'>several properties, it keeps everything neatly </span>
<span className='hidden md:block'>organized in one place. Plus, you’ll get </span>
<span className='hidden md:block'>property suggestions tailored to your </span>
<span className='hidden md:block'>preferences, helping you find exactly what you </span>
<span className='hidden md:block'>need faster.
</span>
                 </p>
          </div>
  
      </div>
    )
}

export default HomeCard3