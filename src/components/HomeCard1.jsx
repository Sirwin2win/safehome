import React from 'react'
import payment from '../assets/vectors/payment.png'

const HomeCard1 = () => {
  return (
    <div className='flex justify-center bg-[#9979C380] mx-5 md:mx-20 h-60 md:justify-evenly mt-10 rounded-md md:h-120'>
        <div>
       <div className='h-40 w-40  bg-[#9979C3] md:w-150 md:h-90'>
         <img src={payment} alt="payment card" className='md:size-105' />
       </div>
          <div className='h-20 w-20 bg-[#9979C3] md:h-30 md:w-70'></div>
        </div>

        <div className='mt-0 w-60 md:w-150 md:ms-5'>
            <p className='md:text-3xl font-bold mb-5 md:mb-1 md:mt-15 px-2'>Simplified Payments</p>
            <p className='md:mt-10 p-2 -mt-7 md:p-5 '>Automated billing, collections and 
             <span className='md:block'>  reconciliation functionality on our apps means </span>
               <span className='md:block'>   that late or no-payment of communal dues are </span>
                a thing of the past.</p>
        </div>

    </div>
  )
}

export default HomeCard1