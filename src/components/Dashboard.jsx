import React from 'react'
import admin from '../assets/images/admin.avif'
import { FaBell, FaTools, FaArrowDown , FaPowerOff   } from 'react-icons/fa'
import { MdPayment } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { GiSpanner } from "react-icons/gi";





const Dashboard = () => {
  return (
    <div className='mx-10'>
      {/* Mini Header Started */}
          <div className='flex justify-between'>
          <div>
         <h2 className='text-2xl font-bold'>Dashboard</h2>
         <p className='text-gray-500'>Welcome back, Ijeoma!</p>
          </div>
          <div className='flex justify-center'>
              <FaBell className='size-8 p-2 bg-gray-100 mt-1'/>
              <img src={admin} alt="safeHome admin" className='size-10 rounded-full mx-5' />
              <div className='-mt-2'>
                <p className='text-2xl font-bold'>Love Ijeoma</p>
                <p className='text-gray-500'>safehome@example.com</p>
              </div>

          </div>

        </div>
              {/* Mini Header Ended */}

              {/* Balance Card */}
              <div className='flex justify-between bg-[#223B7E] py-4 px-10 rounded-lg mt-10'>
                <p className='text-white'>Current Balance</p>
                <button className='flex justify-center bg-white rounded-lg p-2'>
                  <MdPayment className='text-[#223B7E] size-7' /> 
                  <p className='text-[#223B7E] ms-3'>Make a Payment</p>
                </button>

              </div>
              {/* Quick Actions Div */}
              <div className='bg-[#F5F5F5] px-5'>
                <p className='text-2xl font-bold pt-10'>Quick Actions</p>

                <div className='flex justify-between mt-5'>
                  {/* Payment button */}
               <button className='flex justify-center bg-white rounded-lg p-2'>
                  <MdPayment className='text-[#223B7E] size-7 bg-gray-200 p-1' /> 
                  <p className='text-[#223B7E] ms-3'>Make a Payment</p>
                </button>
                {/* Submit mentenance request button */}
                 <button className='flex justify-center bg-white rounded-lg p-2'>
                  <FaTools  className='text-[#223B7E] size-7 bg-gray-200 p-1' /> 
                  <p className='text-[#223B7E] ms-3'>Make a Payment</p>
                </button>
                {/* View Lease details */}
                 <button className='flex justify-center bg-white rounded-lg p-2'>
                  <IoDocumentTextSharp className='text-[#223B7E] size-7 bg-gray-200 p-1' /> 
                  <p className='text-[#223B7E] ms-3'>Make a Payment</p>
                </button>
                </div>

              {/* Recent Activity */}
              <div className='flex justify-between'>
                <div>
                  <p className='text-2xl font-bold pt-10'>Recent Activity</p>
                  <div className='flex justify-between bg-white p-2 rounded-lg mt-5'>
                      <div className='flex justify-center'>
                        <FaArrowDown className='bg-[#00FF3C33] text-[#00A725] size-10 rounded-full p-2 me-3' />
                        <div>
                          <p className='text-lg font-bold'>Rent Payment Received</p>
                          <p className='text-gray-500'>June 1, 2025</p>
                        </div>

                      </div>
                      <p className='text-[#00A725] ms-20'>-$1,240.00</p>
                  </div>
                  <div className='flex justify-between bg-white p-2 rounded-lg mt-5'>
                      <div className='flex justify-center'>
                        <GiSpanner className='bg-[#FF670033] text-[#FF6700] size-10 rounded-full p-2 me-3' />
                        <div>
                          <p className='text-lg font-bold'>Maintenance Request Submitted</p>
                          <p className='text-gray-500'>May 1, 2025 - Leaky Faucet</p>
                        </div>

                      </div>
                      {/* <p className='text-[#00A725] ms-20'>-$1,240.00</p> */}
                  </div>

                </div>
                {/* Autopay Status */}
                <div className='bg-white p-4 mt-5 rounded-lg'>
                  <p className='text-2xl font-bold'>Autopay Status</p>
                  <div className='flex justify-evenly mt-5'>
                    <FaPowerOff className='bg-[#D8181833] text-[#D81818] p-2 size-10 rounded-full' />
                    <div className='ms-3'>
                      <p className='text-lg font-bold'>Autopay status is inactive</p>
                      <p className='text-gray-500'>Enable to pay bills automatically</p>
                    </div>

                  </div>
                  <button className='bg-[#FF6700C9] text-[#223B7E] rounded-lg p-3 w-full font-bold mt-6 mb-15'>Manage Autopay</button>
                </div>
              </div>
              </div>

    </div>
  )
}

export default Dashboard