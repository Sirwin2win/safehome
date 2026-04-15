import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdToggleOn } from "react-icons/md";



const SetAutoplay = () => {
  return (
    <div>
        <p className='text-2xl font-bold'>Manage Autopay</p>
        <p className='text-[#999999]'>Set up and manage your automatic payment to never miss a due date.</p>
        {/* Auto pay status */}
        <div className='flex justify-between bg-[#F5F5F5] px-3'>
          <div className='mt-10'>
            <p className='text-lg font-bold'>Autopay Status</p>
            <div className='flex justify-center mb-10'>
            <IoCheckmarkSharp className='bg-[#00A725] text-white rounded-full'/>
            <p className='text-[#00A725] ms-2'>Autopay is currently enabled. All scheduled payments will be processed automatically</p>
            </div>
          </div>
          <MdToggleOn className='text-[#223B7E] size-10 mt-10'/>
        </div>
        {/* Autopay Settings */}
        <div className='bg-[#F5F5F5] px-5'>
          <p className='text-2xl font-[500] my-5'>Autopay Settings</p>
        <form>
          <div className='flex justify-between'>

            <div className='w-full'>
               <p>Payment Source</p>
              <select name="" id="" className='border border-gray-300 h-15 w-full'>
                <option value="">Visa ending in 1234</option>
              </select>
            </div>
            <div className='w-full ms-10'>
              <p>Payment Date</p>
             <input type="text" 
             placeholder='1st of December'
             className='border border-gray-300 placeholder:ps-3 h-15 w-full' />
            </div>
          </div>
          <div className='flex justify-between my-5'>

            <div className='w-full'>
               <p>Amount to pay</p>
              <input type="text" 
             placeholder='$1,550.00'
             className='border border-gray-300 placeholder:ps-3 h-15 w-full' />
             <p>Your standard rent amount is $1,550.00</p>
            </div>
            <div className='w-full ms-10'>
              {/* <p>Payment Date</p>
             <input type="text" 
             placeholder='1st of December'
             className='border border-gray-300 placeholder:ps-3 h-15 w-full' /> */}
            </div>
          </div>
        </form>
        </div>
        {/* Save or Cancel */}
        <div className='bg-[#F5F5F5] flex justify-evenly py-5'>
                <div>
                  <p className='font-bold'>Your Autopay Summary</p>
                  <p>You will pay $1,550.00 on the 1st of December every year from your Visa ****1234</p>
                </div>
                <button className='bg-[#D2D2D2] px-5 rounded-lg'>Cancel</button>
                <button className='bg-[#223B7E] text-white px-5 rounded-lg'>Save Chnages</button>

        </div>
    </div>
  )
}

export default SetAutoplay