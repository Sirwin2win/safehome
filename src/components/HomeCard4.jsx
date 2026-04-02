import React from 'react'
import notification from '../assets/vectors/notification.png'


const HomeCard4 = () => {
  return (
        <div className='flex justify-evenly bg-[#F4A97780] mx-20 mt-10 rounded-md'>
            
            <div className='mt-20'>
                <p className='text-3xl font-bold mb-5'>Simplified Payments</p>
                <p>Automated billing, collections and 
                   <span className='block'> reconciliation functionality on our apps means</span>
                     <span className='block'>that late or no-payment of communal dues are </span>
                     <span className='block'>a thing of the past. We’ve built in revenue</span> 
                     <span className='block'>assurance features that reduce defaults in </span>
                     payments.</p>
            </div>
  
            <img src={notification} alt="payment card" className='h-100 w-100' />
    
        </div>
      )
}

export default HomeCard4