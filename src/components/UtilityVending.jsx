import React from 'react'
import { BsStars } from "react-icons/bs";
import { IoEyeOffOutline } from "react-icons/io5";
import card1 from '../assets/images/safe_home_properties_card1.png'
import card2 from '../assets/images/safe_home_properties_card2.png'
import { BsLightningChargeFill } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { HiMiniSignal } from "react-icons/hi2";


const UtilityVending = () => {
  return (
    <div>
        {/* Utility Vending and Payments Started */}
                <div className='md:flex md:justify-between mt-10'>
                    <div className='bg-white border boder-[#8A38F5]'>
                        <p className='text-md md:text-2xl font-bold px-5 md:px-20'>Smart Utility Vending</p>
                        <p className='px-5 md:px-20 text-md md:text-lg'>Automate utility vending, purchase pre-paid energy meters,
                             access power purchase and consumption reports. 
                             Our platform work with any STS-compliant meter such
                              as Conlog, Momas, Hexing, Miraton Rose.</p>
                                    {/* Debit Card 1*/}
                              <div className='bg-[#9979C3] pt-13 mt-5 pb-20 px-1'>

                                <div className='bg-[#FED180] rounded-lg flex justify-evenly'>
                                    <div>
                                    <div className='flex justify-between pt-5 mb-2'>
                                        <p className='text-2xl font-[500]'>#23,000,000</p>
                                        <IoEyeOffOutline className='size-5 mt-2' />
                                    </div>
                                    <p>Receivables Currently Past Due</p>
                                    </div>
                                    <div className='w-40 h-40 overflow-hidden md:-me-15'>
                                    <img src={card1} alt="" className='rotate-180 mt-15' />
                                    </div>
                                </div>

                                <div className='bg-[#FFFFD2] rounded-lg flex justify-evenly mt-15'>
                                    <div>
                                    <div className='flex justify-between pt-5 mb-2'>
                                        <p className='text-2xl font-[500]'>#23,000,000</p>
                                        <IoEyeOffOutline className='size-5 mt-2' />
                                    </div>
                                    <p>Total Pending Receivables</p>
                                    </div>
                                    <div className='w-40 h-40 overflow-hidden md:-me-20'>
                                    <img src={card2} alt="" className='rotate-180 mt-15' />
                                    </div>
                                </div>

                              </div>

                    </div>
                    <div className='bg-white border boder-purple-300 md:ms-10 my-10 md:my-0'>
                        <p className='text-2xl px-20 font-bold'>Online Bill & Utility Payments</p>
                        <p className='text-lg px-20'>
                            Here’s a clean paraphrase:
                            Make billing, collections, and payments effortless. 
                            Ensure timely payments with built-in revenue assurance. 
                            Simplify online utility transactions while giving residents 
                            the lowest possible convenience fees.
                        </p>

                        {/* Debit Card 1*/}
                              <div className='bg-[#9979C3] mt-5 p-5'>
                                    <div className='flex justify-between bg-white rounded-lg'>
                                        <div className='flex justify-between p-5'>
                                            {/* <div> */}
                                            <BsLightningChargeFill  className='size-20 text-[#FF6700] bg-[#FF670066] p-5 rounded-lg' />
                                            {/* </div> */}

                                        </div>
                                        <div className='ms-5'>
                                            <p className='text-2xl font-bold my-5'>Electricity Bills</p>
                                            <p className='text-[#223B7E]'>1000 Tokens</p>
                                        </div>
                                        <div className='mx-5 my-5'>
                                            <p className='md:ms-15'>IBDC</p>
                                            <button className='bg-[#7EFD9B] py-3 -ms-14 md:-ms-0  px-5 rounded-full text-2xl mt-3'>Meter</button>
                                        </div>

                                    </div>
                                    {/* Second card */}
                                    <div className='flex justify-between bg-white rounded-lg my-10'>
                                        <div className='flex justify-between p-5'>
                                            {/* <div> */}
                                            <TbReceipt  className='size-20 bg-[#223B7E66] p-5 rounded-lg' />
                                            {/* </div> */}

                                        </div>
                                        <div className='md:ms-5'>
                                            <p className='text-2xl font-bold my-5'>Pay Community Bills</p>
                                            <p className='text-[#223B7E]'>#40,000</p>
                                        </div>
                                        <div className='mx-5 my-5'>
                                            {/* <p className='ms-15'>IBDC</p> */}
                                            <button className='bg-[#7EFD9B] py-3 -ms-14 md:-ms-0  px-5 rounded-full text-2xl mt-3'>Water</button>
                                        </div>

                                    </div>
                                    {/* Second card */}
                                    <div className='flex justify-between bg-white rounded-lg my-5'>
                                        <div className='flex justify-between p-5'>
                                            {/* <div> */}
                                            <HiMiniSignal   className='size-20 bg-[#AAEBB980] p-5 rounded-lg' />
                                            {/* </div> */}
                                            <p className='text-2xl font-bold my-5 ms-10'>Internet Purchases</p>

                                            
                                            {/* <p className='text-[#223B7E]'>1000 Tokens</p> */}
                                        </div>
                                        {/* <div className='mx-5 my-5'>
                                            <p className='ms-15'>IBDC</p>
                                            <button className='bg-[#7EFD9B] py-3  px-5 rounded-full text-2xl mt-3'>Meter</button>
                                        </div> */}

                                    </div>

                              </div>
                    </div>
                </div>
                {/* Utility Vending and Payments End */}
    </div>
  )
}

export default UtilityVending