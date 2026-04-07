import React from 'react'
import { BsStars } from "react-icons/bs";
import { IoEyeOffOutline } from "react-icons/io5";
import card1 from '../assets/images/safe_home_properties_card1.png'
import card2 from '../assets/images/safe_home_properties_card2.png'



const FeaturesCard = () => {
  return (
    <div className='my-10 bg-[#F5F5F5] mx-20'>

        
            <button className='flex justify-center bg-[#223B7E99] rounded-full mx-auto py-2 px-4'>
                <BsStars className='size-5'/>
                <p className='ms-2'>Features</p>
                </button>

                <p className='text-center text-6xl font-bold my-5'>Simplifying Living Experiences</p>

                <div className='flex justify-between mt-10'>
                    <div className='bg-white border boder-[#8A38F5]'>
                        <p className='text-2xl font-bold px-10'>Smart Utility Vending</p>
                        <p className='px-10 text-lg'>Automate utility vending, purchase pre-paid energy meters,
                             access power purchase and consumption reports. 
                             Our platform work with any STS-compliant meter such
                              as Conlog, Momas, Hexing, Miraton Rose.</p>
                                    {/* Debit Card 1*/}
                              <div className='bg-[#9979C3] mt-10 p-5'>

                                <div className='bg-[#FED180] rounded-lg flex justify-evenly'>
                                    <div>
                                    <div className='flex justify-between pt-5 mb-2'>
                                        <p className='text-2xl font-[500]'>#23,000,000</p>
                                        <IoEyeOffOutline className='size-5 mt-2' />
                                    </div>
                                    <p>Receivables Currently Past Due</p>
                                    </div>
                                    <div className='w-40 h-40 overflow-hidden -me-12'>
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
                                    <div className='w-40 h-40 overflow-hidden -me-12'>
                                    <img src={card1} alt="" className='rotate-180 mt-15' />
                                    </div>
                                </div>

                              </div>

                    </div>
                    <div className='bg-white border boder-purple-300 ms-10'>
                        <p className='text-2xl px-20 font-bold'>Online Bill & Utility Payments</p>
                        <p className='text-lg px-20'>
                            Here’s a clean paraphrase:
                            Make billing, collections, and payments effortless. 
                            Ensure timely payments with built-in revenue assurance. 
                            Simplify online utility transactions while giving residents 
                            the lowest possible convenience fees.
                        </p>

                        {/* Debit Card 1*/}
                              <div className='bg-[#9979C3] mt-10 p-5'>
                                    <div className='flex justify-evenly bg-white'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>

                                    </div>

                              </div>
                    </div>
                </div>
        

    </div>
  )
}

export default FeaturesCard