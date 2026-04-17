import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const PaymentSuccess = () => {
  return (
    <div className='mx-20'>
            <IoIosCheckmarkCircleOutline  className='mx-auto bg-[#00A72533] text-[#00A725] size-10 rounded-full p-1'/>
            <p className='text-2xl font-bold text-center'>Renewal Confirmed!</p>
            <p className='text-center text-[#999999] my-5'>Your lease for the property 123 Safehomes close,has been successfully renewed.</p>
                {/* first div */}
                <div className='bg-[#F5F5F5] p-5'>
                    <p className='text-2xl font-bold text-center'>123 Safehomes close, Abuja Nigeria.</p>
                    <p className='text-[#999999] text-center mb-10'>Here’s a summary of your updated lease.</p>
                    <div className='flex justify-between'>
                        <p className='text-[#999999]'>New Lease End Date</p>
                        <p>January 1, 2026</p>
                    </div>
                    <div className='flex justify-between mb-5'>
                        <p className='text-[#999999]'>Updated Yearly Rent</p>
                        <p>$1,500.00</p>
                    </div>
                </div>
                <button className='bg-[#00A725] text-white text-2xl font-[500] w-full py-5 my-5 rounded-lg'>View Updated Lease</button>
                <button className='bg-white text-[#223B7E] border border-gray-500 text-2xl font-[500] w-full py-5'>Return to dashboard</button>
    </div>
  )
}

export default PaymentSuccess