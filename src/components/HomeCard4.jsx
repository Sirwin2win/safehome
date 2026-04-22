import React from 'react'
import notification from '../assets/vectors/notification.png'


const HomeCard4 = () => {
  return (
        <div className='flex justify-center bg-[#F4A97780] mx-5 md:mx-20 md:justify-evenly mt-10 rounded-md md:h-120'>
            
            <div className='mt-0 w-50 md:w-150'>
                <p className='md:text-3xl font-bold mb-5 text-right md:my-10 px-2'>Smart Alerts & Notifications</p>
                <p className='text-right px-2'>Our Smart Alerts & Notifications feature keeps 
                   <span className='md:block'> you informed and up to date with everything </span>
                     <span className='md:block'>that matters to you. Receive real-time </span>
                     <span className='md:block'>notifications on new property listings that </span> 
                     <span className='md:block'>match your preferences, price changes, </span>
                     <span className='md:block'>upcoming rent payments, lease renewals, and </span>
                     <span className='md:block'>maintenance updates. Whether you're buying, </span>
                     <span className='md:block'>renting, or managing properties, you'll never  </span>
                     miss an important update</p>
            </div>
  
            <img src={notification} alt="payment card" className='w-40 md:w-150 bg-[#F4A977] md:ms-25' />
            {/* <img src={notification} alt="payment card" className='h-100 w-100 bg-[#F4A977]' /> */}
    
        </div>
      )
}

export default HomeCard4