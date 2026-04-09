import React from 'react'
import { BsStars } from "react-icons/bs";
import { IoEyeOffOutline } from "react-icons/io5";
import card1 from '../assets/images/safe_home_properties_card1.png'
import card2 from '../assets/images/safe_home_properties_card2.png'
import { BsLightningChargeFill } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { HiMiniSignal } from "react-icons/hi2";
import { IoWarning } from "react-icons/io5";
import BarCharts from './BarCharts';
import DoughnutCharts from './DoughnutCharts';


const PropertyDashboard = () => {
  return (
    <div>
            {/* Utility Vending and Payments Started */}
                    <div className='flex justify-between mt-10'>
                        {/* First Div started */}
                        <div className='bg-white border boder-[#8A38F5]'>
                            <p className='text-2xl font-bold px-20'>Property Dashboard</p>
                            <p className='px-20 text-lg'>
                                Here’s a smooth paraphrase:View everything about your property
                                 in one place — from property details and billing records to payment 
                                 history, prepaid meter information, energy purchases, consumption
                                  reports, and more.
                            </p>
                                        {/* Debit Card 1*/}
                                  <div className='bg-[#9979C3] pt-5 mt-5 pb-5 px-5'>
                                    {/* Doughnu Charts details Started */}
                                    <div className='bg-white rounded-lg p-5'>
                                        <div className='flex justify-evenly'>
                                            <p className='text-2xl font-bold'>Electricity - EKDC</p>
                                            <button className='flex justify-center bg-[#223B7E99] rounded-full p-3'>
                                                <select name="" id="" className='text-white'>
                                                    <option value="">Last 30 days</option>
                                                    <option value="">Last 20 days</option>
                                                    <option value="">Last 10 days</option>
                                                </select>
                                            </button>
                                        </div>
                                        <div className='flex justify-evenly my-5'>
                                            <DoughnutCharts  className='size-40'/>
                                            <div>

                                            <div>
                                                <p>Available to purchase</p>
                                                <li>#1,987,345.00</li>
                                            </div>
                                            <div className='mt-3'>
                                                <p>Available to purchase</p>
                                                <li>#1,987,345.00</li>
                                            </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    {/* Doughnu Charts details Ended */}

                                    {/* Bar Charts Started */}
                                    <div className='bg-[#FFFFD2] rounded-lg mt-5 px-15 pt-5 h-80'>
                                        <button className='flex justify-center bg-[#223B7E99] rounded-full p-3'>
                                                <select name="" id="" className='text-white'>
                                                    <option value="">Last 30 days</option>
                                                    <option value="">Last 20 days</option>
                                                    <option value="">Last 10 days</option>
                                                </select>
                                            </button>

                                        <BarCharts className='size-60'/>
                                    </div>
                                    {/* Bar Charts Ended */}
    
    
                                  </div>
    
                        </div>
                        {/* First Div ended */}
                        <div className='bg-white border boder-purple-300 ms-10'>
                            <p className='text-2xl px-20 font-bold'>Smart Utility Vending</p>
                            <p className='text-lg px-20'>
                            Automate utility vending, purchase pre-paid energy meters, 
                            access power purchase and consumption reports. Our platform 
                            work with any STS-compliant meter such as Conlog, Momas,
                             Hexing, Miraton Rose.
                            </p>
    
                            {/*Smart Utility Vending Started*/}
                                  <div className='bg-[#9979C3] mt-5 p-5 w-full h-inherit'>
                                        <div className='flex justify-center bg-white rounded-lg w-full'>
                                            <form className='w-full p-5'>
                                                <fieldset className='border border-gray-400 p-3 '>
                                                    <legend htmlFor="select">Select issues</legend>
                                                    <select name="" id="select" className='w-full'></select>
                                                </fieldset>
                                                <fieldset className='border border-gray-400 p-3'>
                                                    <legend htmlFor="subject">Subject</legend>
                                                    <input type="text" id='subject' className='w-full'/>
                                                </fieldset>
                                                <fieldset className='border border-gray-400 p-3'>
                                                    <legend htmlFor="description">Description</legend>
                                                    <textarea name="description" id="description" className='w-full'></textarea>
                                                </fieldset>
                                            </form>
    
                                        </div>

                                    
    
                                  </div>
                            {/*Smart Utility Vending Ended*/}
                        </div>
                    </div>
                    {/* Utility Vending and Payments End */}
        </div>
  )
}

export default PropertyDashboard