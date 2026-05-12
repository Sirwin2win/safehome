import React from 'react'
import { TbFileDownloadFilled ,TbCurrencyDollar, TbPigFilled } from "react-icons/tb";
import { LuCalendarCheck, LuCalendarX  } from "react-icons/lu";
import { FaCalendarAlt, FaChevronUp  } from "react-icons/fa";
import { IoMdCheckmark, IoMdMail  } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import eze from '../assets/images/safe_home_properties_eze_patrick.jpg'




const LeaseInfo = () => {
  return (
    <div className='mx-5'>
      {/* Lease information Div */}
      <div className='flex justify-between'>
          <div>
        <p className='text-2xl'>Lease Information</p>
          <p className='text-[#999999]'>123 Safehomes close, Abuja Nigeria.</p>
          </div>
          <button className='flex justify-center bg-[#223B7E] rounded-lg px-3 pt-4'>
            <TbFileDownloadFilled className='text-white size-5'/>
            <p className='text-white ms-2'>Download Full Lease(PDF)</p>
          </button>
      </div>
      {/* Two Splitted Divs */}
      <div className='flex justify-between mt-10'>
        {/* Left Div */}
        <div className=''>
          <div className='bg-[#F5F5F5] p-5 rounded-lg'>
            <p className='text-lg font-bold my-5'>Lease Term</p>
            <div className='flex justify-evenly'>
                <div className='flex justify-evenly'>
                  <LuCalendarCheck className='bg-[#223B7E4D] text-[#223B7E] size-10 p-1'/>
                  <div className='ms-2'>
                    <p className='text-[#999999]'>Lease Start Date</p>
                    <p className='font-bold'>January 1st 2025</p>
                  </div>
                </div>
                <div className='flex justify-evenly ms-20'>
                  <LuCalendarX  className='bg-[#223B7E4D] text-[#223B7E] size-10 p-1'/>
                  <div className='ms-2'>
                    <p className='text-[#999999]'>Lease End Date</p>
                    <p className='font-bold'>December 31st 2025</p>
                  </div>
                </div>
                
               
            </div>
            {/* Time Remaining */}
                <p className='text-[#999999] mt-10'>Time Remaining</p>
                {/* Progree Bar Started */}
                <div className="w-full bg-gray-200 rounded-full h-3 mt-5">
               <div className="bg-[#223B7E] h-3 rounded-full" style={{width: '40%'}}></div>
              </div>
                {/* Progree Bar Ended */}
                <p className='text-[#999999] text-end my-5'>7 Months Remaining</p>
          </div>
          {/* Financials Div */}
          <div className='bg-[#F5F5F5] p-5 rounded-lg mt-10'>
            <p className='text-lg font-bold my-5'>Financials</p>
            <div className='flex justify-evenly'>
                <div className='flex justify-evenly'>
                  <TbCurrencyDollar  className='bg-[#223B7E4D] text-[#223B7E] size-10 p-1 -ms-5'/>
                  <div className='ms-2'>
                    <p className='text-[#999999]'>Yearly Rent</p>
                    <p className='font-bold'>$1,550.00</p>
                  </div>
                </div>
                <div className='flex justify-evenly ms-20'>
                  <FaCalendarAlt  className='bg-[#223B7E4D] text-[#223B7E] size-10 p-1'/>
                  <div className='ms-2'>
                    <p className='text-[#999999]'>Rent Due Date</p>
                    <p className='font-bold'>31st of Every Year</p>
                  </div>
                </div>
                
               
            </div>
            <div className='flex justify-evenly my-5'>
                <div className='flex justify-evenly'>
                  <TbPigFilled  className='bg-[#223B7E4D] text-[#223B7E] size-10 p-1'/>
                  <div className='ms-2'>
                    <p className='text-[#999999]'>Security Deposit</p>
                    <p className='font-bold'>$200.00</p>
                  </div>
                </div>
                <div className='flex justify-evenly ms-20'>
                  <LuCalendarX  className='bg-[#223B7E4D] text-[#223B7E] size-10 p-1'/>
                  <div className='ms-2'>
                    <p className='text-[#999999]'>Deposit Status</p>
                    <div className='flex justify-center'>
                    <p className='font-bold text-[#00A725]'>Held in Escrow </p>
                    <IoMdCheckmark className='bg-[#00A725] text-white rounded-full size-3 ms-2 mt-2'/>
                    </div>
                  </div>
                </div>
                
               
            </div>
           
          </div>
         
        </div>
        {/* Right Div  => Property Manager*/}
        <div className='bg-[#F5F5F5] px-10 rounded-lg'>
          <p className='text-3xl mt-10 font-[500]'>Property Manager</p>
          {/* Photo Div */}
          <div className='flex justify-evenly my-10'>
            <img src={eze} alt="" className='size-20 rounded-full'/>
            <div className='ms-5'>
              <p className='text-xl font-[500]'>Eze Patrick</p>
              <p className='text-[#999999] mt-3'>Estate Management</p>
            </div>
          </div>
          {/* Contact */}
          <div className='flex justify-evenly'>
            <MdLocalPhone />
            <p>(234) 801 234 4567</p>
          </div>
          {/* Mail */}
          <div className='flex justify-evenly my-10'>
            <IoMdMail  />
            <p>Safehomesmanage@aol.com</p>
          </div>

          {/* Contact Property Manager Button */}
          <button className='bg-[#FF6700C9] text-[#223B7E] px-5 font-bold w-full py-3 rounded-lg'>Contact Property Manager</button>
        </div>
      </div>
      {/* Special Terms and Clauses */}
      <div className='bg-[#F1F1F1CC] flex justify-between my-10 px-5 py-5 rounded-lg'>
        <p>Special Terms & Clauses</p>
        <FaChevronUp  />
      </div>
    </div>
  )
}

export default LeaseInfo