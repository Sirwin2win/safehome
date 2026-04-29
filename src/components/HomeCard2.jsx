import React from 'react'
import deal from '../assets/vectors/deal.png'


const HomeCard2 = () => {
  return (
      <div className='flex justify-center bg-[#AAD7EB80] mx-5 h-60 md:mx-20 md:justify-evenly mt-10 rounded-md md:h-120'>
          {/* Left side */}
          <div className='mt-0 w-60 md:w-150 md:ms-5'>
              <p className='text-sm md:text-3xl font-bold mb-5 text-right md:my-10 px-2'>Seamless Property Management &
                    Real-Time Connectivity</p>
              <p className='px-2'>Our tools are designed to streamline  
                 <span className='md:block'> and simplify property ownership, </span>
                   <span className='md:block'>rental, and tenant management </span>
                   <span className='md:block'></span> 
                   <span className='md:block'> </span>
                  </p>
          </div>

         {/* <div className='w-40 md:w-150 bg-[#AAD7EB] md:ms-25'> */}
         <div className='h-40 w-40  bg-[#AAD7EB] md:w-150 md:h-90'>
             <img src={deal} alt="payment card" className='mt-20 md:size-105'  />
             <div className='h-23 w-20 bg-[#AAD7EB] md:h-30 md:w-70 -mt-10 ms-15'></div>
         </div>
  
      </div>
    )
}

export default HomeCard2