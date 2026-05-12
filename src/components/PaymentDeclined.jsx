import React from 'react'
import { FaRegCircleXmark } from "react-icons/fa6";


const PaymentDeclined = () => {
  return (
    <div className='mx-20'>
                <FaRegCircleXmark  className='mx-auto bg-[#D8181833] text-[#D81818] size-10 rounded-full p-1'/>
                <p className='text-2xl font-bold text-center'>Renewal Declined!</p>
                <p className='text-center text-[#999999] my-5'>Your lease for the property 123 Safehomes close, has been Declined.</p>
                    {/* first div */}
                    <div className='bg-[#F5F5F5] p-5'>
                        <p className='text-2xl font-bold text-center'>123 Safehomes close, Abuja Nigeria.</p>
                        <p className='text-[#999999] text-center mb-10'>Please take note of the following information.</p>
                        <div className='flex justify-between'>
                            <p className='text-[#999999]'>Current Lease End Date</p>
                            <p className='font-bold'>December 31, 2026</p>
                        </div>
                        <div className='flex justify-between mb-5'>
                            <p className='text-[#999999]'>Updated Yearly Rent</p>
                            <p className='text-[#223B7E] font-bold'>Review Lease Terms</p>
                        </div>
                    </div>
                    <button className='bg-[#223B7E] text-white text-2xl font-[500] w-full py-5 my-5 rounded-lg'>View Updated Lease</button>
                    <button className='bg-white text-[#223B7E] border border-gray-500 text-2xl font-[500] w-full py-5'>Return to dashboard</button>
        </div>
  )
}

export default PaymentDeclined