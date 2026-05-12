import React from 'react'
import { BsStars } from "react-icons/bs";
import { IoEyeOffOutline } from "react-icons/io5";
import card1 from '../assets/images/safe_home_properties_card1.png'
import card2 from '../assets/images/safe_home_properties_card2.png'
import { BsLightningChargeFill } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { HiMiniSignal } from "react-icons/hi2";
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HomeLastCard from '../components/HomeLastCard'
import ContactCard from '../components/ContactCard'
import UtilityVending from './UtilityVending';
import PropertyDashboard from './PropertyDashboard';
import TestSlider from './TestSlider';




const FeaturesCard = () => {
  return (
    <div className='my-10 px-2 md:mx-20'>

                <div className='bg-[#F5F5F5]'>

            <button className='flex justify-center bg-[#223B7E99] rounded-full mx-auto py-2 px-4'>
                <BsStars className='size-5'/>
                <p className='ms-2'>Features</p>
                </button>

                <p className='text-center text-6xl font-bold my-5'>Simplifying Living Experiences</p>
                {/* Utility Vending and Payments Started */}
                <UtilityVending />
                {/* Utility Vending and Payments Ended */}

                {/* Property Daashboard and vending started */}
                <PropertyDashboard />
                {/* Property Daashboard and vending ended */}
                </div>
        
                {/* Testimonials */}
                {/* <Testimonials /> */}
    </div>
  )
}

export default FeaturesCard