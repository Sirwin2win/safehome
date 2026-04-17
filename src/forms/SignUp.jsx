import React from 'react'
import bot from '../assets/vectors/safe_home_properties_loginBot.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { PiWalletBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";


const SignUp = () => {
  return (
            <div className='flex justify-center my-5'>
                    
                    {/* Left Div */}
                    <div className='bg-[#FF6700C9] rounded-lg px-8 pb-20'>
                        <p className='pt-20 px-10 text-center text-3xl font-500 text-white'>Let’s help you with <span className='block'>smarter living.</span> </p>
                        {/* Make Payments Div */}
                        <div className='flex justify-between my-10'>
                            <PiWalletBold className='size-20 text-[#FF6700C9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                            <div className='ms-5'>
                                <p className='text-lg font-bold text-white'>Make Payments</p>
                                <p className='text-white'>Pay online, track payment <span className='block'>status, and view your payment</span> history with ease.</p>
                            </div>
            
                        </div>
                        {/* Maintenance Requests Div */}
                        <div className='flex justify-between my-10'>
                            <BsTools className='size-20 text-[#FF6700C9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                            <div className='ms-5'>
                                <p className='text-lg font-bold text-white'>Maintenance Requests</p>
                                <p className='text-white'>Submit and manage 
                                    <span className='block'>maintenance requests directly </span> 
                                    online.</p>
                            </div>
            
                        </div>
                        {/* Renter Essentials Div */}
                       <div className='flex justify-between my-10'>
                            <GiFamilyHouse className='size-20 text-[#FF6700C9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                            <div className='ms-5'>
                                <p className='text-lg font-bold text-white'>Renter Essentials</p>
                                <p className='text-white'>Easily set up and handle your
                                    <span className='block'>utilities, services, and important </span>documents.</p>
                            </div>
            
                        </div>
                          {/* Renter Essentials Div End */}
            
                    </div>


                    {/* Right Div */}
                    <div className='shadow-lg ms-3 p-10 border border-gray-200 rounded-lg'>
                            <img src={bot} alt="safe_home_properties_bot" className='size-40 mx-auto' />
                            <p className='text-[#999999] text-3xl font-lg mt-5'>Login to SafeHome</p>
            
                            <form>
                                <div className='bg-white  my-10'>
                                    <input type="text" placeholder='example@name.com' className='bg-white shadow-lg w-full border border-gray-200 rounded-lg p-2' />
                                </div>
                                <div className='bg-white my-10'>
                                    <input type="text" placeholder='Enter your password' className='bg-white shadow-lg w-full border border-gray-200 rounded-lg p-2' />
                                </div>
                                <button className='bg-[#FF6700C9] rounded-lg w-full text-white flex justify-evenly py-2 border-r border-r-gray-300'>
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
            
                </div>
  )
}

export default SignUp