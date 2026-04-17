import React from 'react'
import payment from '../assets/vectors/safe_home_properties_confirm_payment.png'
import { MdOutlinePayment , MdLockOutline } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";



const ConfirmPayment = () => {
  return (
    <div>
        <p className='text-2xl font-bold text-center'>Confirm Your Payment</p>
        <p className='text-3xl font-bold text-center my-5'>$1,500.00</p>
        <p className='text-[#999999] text-center'>123 Safehomes close, Abuja Nigeria.</p>
        <img src={payment} alt="" className='my-5 size-20 mx-auto' />
        {/* Payment Method Div */}
        <div className='flex justify-between bg-[#F5F5F5] p-5'>
            <div className='flex justify-evenly'>
                <MdOutlinePayment className='bg-[#223B7E33] text-[#223B7E] size-13 p-3 rounded-full'/>
                    <p className='text-2xl font-[500] ms-3 mt-2'>Payment Method</p>
            </div>
            <p className='text-[#505050]'>Visa ending in 1234</p>
        </div>
        {/* Payment Date Div */}
        <div className='flex justify-between bg-[#F5F5F5] p-5 my-5'>
            <div className='flex justify-evenly'>
                <FaCalendarDays className='bg-[#223B7E33] text-[#223B7E] size-13 p-3 rounded-full'/>
                    <p className='text-2xl font-[500] ms-3 mt-2'>Payment Date</p>
            </div>
            <p className='text-[#505050]'>Schedule payment for Jan 1, 2025</p>
        </div>
        {/* Payment security assurance Div */}
        <div className='flex justify-center mx-auto'>
            <MdLockOutline  className='size-6'/>
            <p className='text-[#505050] ms-2'>Your payment is processed securely.</p>
        </div>
        {/* Confirm Payment Button  */}
        <button className='bg-[#223B7E] text-2xl text-white font-bold px-10 py-5 w-full my-5 rounded-lg'>Confirm & Pay $1,500.00</button>
        <button className='text-[#223B7E] text-2xl border border-gray-500 font-bold px-10 py-5 w-full my-5 rounded-lg'>Edit Details</button>
    </div>
  )
}

export default ConfirmPayment