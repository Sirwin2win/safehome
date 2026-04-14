import React from 'react'
import admin from '../assets/images/admin.avif'
import { FaBell } from 'react-icons/fa'
import { MdPayment } from "react-icons/md";



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

    </div>
  )
}

export default Dashboard