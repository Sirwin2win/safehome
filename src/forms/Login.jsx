import React from 'react'
import bot from '../assets/vectors/safe_home_properties_loginBot.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { PiWalletBold } from "react-icons/pi";



const Login = () => {
  return (
    <div className='flex justify-center my-5'>
        {/* Left Div */}
        <div className='shadow-lg p-10 border border-gray-200 rounded-lg'>
                <img src={bot} alt="safe_home_properties_bot" className='size-40 mx-auto' />
                <p className='text-[#999999] text-3xl font-lg mt-5'>Login to SafeHome</p>

                <form>
                    <div className='bg-white  my-10'>
                        <input type="text" placeholder='example@name.com' className='bg-white shadow-lg w-full border border-gray-200 rounded-lg p-2' />
                    </div>
                    <div className='bg-white my-10'>
                        <input type="text" placeholder='Enter your password' className='bg-white shadow-lg w-full border border-gray-200 rounded-lg p-2' />
                    </div>
                    <button className='bg-[#223B7EC9] rounded-lg w-full text-white flex justify-evenly py-2 border-r border-r-gray-300'>
                        <p>
                        Continue with Email
                        </p>
                        <FaArrowRightLong />
                        </button>
                        <div className='my-5'>
                         <Link to='#'>Forgot your password?</Link>
                        </div>
                </form>
        </div>
        {/* Right Div */}
        <div className='bg-[#223B7EC9] ms-3 rounded-lg'>
            <p className='pt-20 px-10 text-white'>Let’s help you with smarter living.</p>
            {/* Make Payments Div */}
            <div className='flex justify-between'>
                <PiWalletBold className='size-10 text-[#223B7EC9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                <div className='flex justify-center'>
                    <p className='text-lg font-bold'>Make Payments</p>
                    <p>Pay online, track payment status, and view your payment history with ease.</p>
                </div>

            </div>
            {/* Maintenance Requests Div */}
            <div className='flex justify-between'>
                <PiWalletBold className='size-10 text-[#223B7EC9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                <div className='flex justify-center'>
                    <p className='text-lg font-bold'>Make Payments</p>
                    <p>Pay online, track payment status, and view your payment history with ease.</p>
                </div>

            </div>
            {/* Renter Essentials Div */}
            <div className='flex justify-between'>
                <PiWalletBold className='size-10 text-[#223B7EC9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                <div className='flex justify-center'>
                    <p className='text-lg font-bold'>Make Payments</p>
                    <p>Pay online, track payment status, and view your payment history with ease.</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Login