import React,{useState} from 'react'
import background from '../assets/vectors/background.jpg'
import house_key from '../assets/vectors/key.png'
import key2 from '../assets/vectors/key2.png'
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoChevronDownSharp, IoSearchOutline    } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { TbCurrencyNaira, TbAdjustmentsHorizontal  } from "react-icons/tb";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import HomeCard1 from '../components/HomeCard1'
import HomeCard2 from '../components/HomeCard2'
import HomeCard3 from '../components/HomeCard3'
import HomeCard4 from '../components/HomeCard4'
import HomePhoneCard from '../components/HomePhoneCard'
import LatestProperties from '../components/LatestProperties'
import PropertyCard from '../components/PropertyCard'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HomeLastCard from '../components/HomeLastCard'
import ContactCard from '../components/ContactCard'
import HomeAnimation from '../components/HomeAnimation'
import TestSlider from '../components/TestSlider'
import Accordion from '../components/Accordion'



const Home = () => {
  return (
    <div>


        <HomeAnimation /> 
          
    
    <button className='flex justify-evenly bg-[#223B7E99] hidden md:block p-2 rounded-full mx-auto my-10 font-[600]'><BsStars className='me-2 size-8' /> Discover our key features</button>
    <div className='mb-5 hidden md:block'>

    <p className='text-center font-bold text-2xl my-5'>Simplifying Living Experiences Across the World</p>
    <p className='text-center'>SafeHomes helps residents, admins, and security personnel stay connected and in 
      <span className='block'>control is the ultimate digital solution for managing modern residential estates and </span>
      <span className='block'>gated communities. Whether you're a resident, admin, or security guard, SafeHomes</span> 
      <span className='block'>brings simplicity, transparency, and security to everyday living — all in one place</span>
      </p>
    </div>

    <HomeCard1 />
    <HomeCard2 />
    <HomeCard3 />
    <HomeCard4 />
{/* Join he best button  */}
    <button className='bg-[#223B7E99] px-4 py-2 hidden md:block rounded-full block text-xl font-[500] mx-auto my-10'>Join the best!</button>
    <p className='text-center font-[700] md:text-6xl '>Start Living Smarter Today</p>
        <button className='bg-[#223B7E99] px-4 md:hidden py-2 rounded-full block text-xl font-[500] mx-auto my-10'>Join the best!</button>
      <br />
    <HomePhoneCard />
    <LatestProperties />
    <PropertyCard />
    {/* <Testimonials /> */}
    <TestSlider />
    <FAQ />
    <HomeLastCard />
    <ContactCard />
    </div>
  )
}

export default Home