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



const Home = () => {
  return (
    <div>
    <div className='static'>
      <div class="bg-hero-home bg-cover bg-center h-screen mt-[-130px] -z-100"></div>
      <div className='flex justify-between'>

      <div className='absolute text-white bottom-100 ms-5 top-30 '> <p className='text-4xl text-[#C8C8C8]'>All-in-one real estate and 
        <span className='block'>property management software</span>
        <span className='block'>for <span className='text-white'>Landlords</span></span></p>

        <button className='flex justify-evenly bg-[#EF6700C9] my-5 p-2 rounded-lg'><p>EXPLORE NOW</p> <MdOutlineArrowRightAlt className='text-white mt-1 ms-2' /></button>

        <p className='text-[#C8C8C8]'>Discover a lifestyle where elegance meets comfort, blending
          <span className='block'>timeless design with modern sophistication</span>
        </p>

        
          
          </div>

          <div>

          <img src={house_key} alt="safehomeproperties_key" className='absolute size-100 top-25 left-120' />
          <img src={key2} alt="safehomeproperties_key" className='absolute size-20 top-75 left-210' />
          </div>
      </div>
      
        <div className='absolute text-white top-100 ms-5'>
            <Link to='/' className='text-[#C8C8C8]'>BUY</Link>
            <Link to='/' className='text-[#C8C8C8] ms-2'>RENT</Link>
            <div className='grid grid-cols-4 gap-3 mt-5'>
              <div className='flex justify-evenly bg-[#223B7E99] text-white p-2'> <p className='mt-1 me-3'><IoLocationOutline /></p>  <p>Location </p><p className='mt-1 ms-5'><IoChevronDownSharp /></p></div>
              <div className='flex justify-evenly bg-[#223B7E99] text-white p-2'> <p className='mt-1 me-3'><FiHome /></p>  <p>Property Type </p><p className='mt-1 ms-8'><IoChevronDownSharp /></p></div>
              <div className='flex justify-evenly bg-[#223B7E99] text-white p-2'> <p className='mt-1 me-3'><TbCurrencyNaira  /></p>  <p>Budget </p><p className='mt-1 ms-5'><IoChevronDownSharp /></p></div>
              <div className='flex justify-evenly bg-[#223B7E99] text-white p-2'> <p className='mt-1 me-3'><TbAdjustmentsHorizontal  /></p>  <p>Target Filters </p><p className='mt-1 ms-5'><IoChevronDownSharp /></p></div>
            </div>
          </div>
          <button className='absolute flex justify-evenly bg-[#EF6700C9] text-white bottom-20 px-3 py-1 rounded-lg'> <IoSearchOutline className='mt-1 me-2' />search</button>
    </div>
    <button className='flex justify-evenly bg-[#223B7E99] p-2 rounded-full mx-auto my-10 font-[600]'><BsStars className='me-2 size-8' /> Discover our key features</button>
    <div className='mb-5'>

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

    <HomePhoneCard />
    <LatestProperties />
    <PropertyCard />
    <Testimonials />
    <FAQ />
    <HomeLastCard />
    <ContactCard />
    </div>
  )
}

export default Home