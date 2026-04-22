import React from 'react'
import deal from '../assets/vectors/deal.png'


const HomeCard2 = () => {
  return (
      <div className='flex justify-center bg-[#AAD7EB80] mx-5 md:mx-20 md:justify-evenly mt-10 rounded-md md:h-120'>
          {/* Left side */}
          <div className='mt-0 w-50 md:w-150'>
              <p className='md:text-3xl font-bold mb-5 text-right md:my-10 px-2'>Simplified Payments</p>
              <p className='text-right px-2'>Automated billing, collections and 
                 <span className='md:block'> reconciliation functionality on our apps means</span>
                   <span className='md:block'>that late or no-payment of communal dues are </span>
                   <span className='md:block'>a thing of the past. We’ve built in revenue</span> 
                   <span className='md:block'>assurance features that reduce defaults in </span>
                   payments.</p>
          </div>

          <img src={deal} alt="payment card" className='w-40 md:w-150 bg-[#AAD7EB] md:ms-25' />
  
      </div>
    )
}

export default HomeCard2