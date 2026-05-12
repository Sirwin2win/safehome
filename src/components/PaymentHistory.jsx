import React from 'react'
import { FaFileUpload,FaSearch  } from "react-icons/fa";
import PaymentHistoryTbl from './PaymentHistoryTbl';

const PaymentHistory = () => {
  return (
    <div>
        <p className='text-2xl font-bold'>Payment History</p>
        <div className='md:flex justify-center my-10'>
          <button className='bg-[#223B7E] text-white rounded-lg py-10 pe-20 w-full'>
            <p>Total paid(This year)</p>
            <p className='text-2xl font-bold'>$5,000.00</p>
          </button>
          <button className='bg-[#FF6700C9] text-white rounded-lg py-10 pe-20 ms-5 w-full'>
            <p className='text-[#505050]'>Upcoming Payments</p>
            <p className='text-2xl font-bold'>$1,500.00</p>
          </button>
        </div>
         {/* Second Div */}
                <div className='flex justify-between my-5'>
                  <div className='relative w-full'>
                <input type="search"
                 className='w-full h-15 bg-[#F5F5F5] placeholder:text-[#999999] placeholder:py-5 placeholder:ps-15'
                 placeholder='search by name, property or document'
                 />
                 <FaSearch className='absolute bottom-5 left-5 size-5 text-gray-500' />
                  </div>
                 <select name="" id="" className='h-15 w-80 border border-1 ms-40'>
                  <option value="">All Types</option>
                 </select>
                </div>
                {/* Table */}
                <PaymentHistoryTbl />
    </div>
  )
}

export default PaymentHistory