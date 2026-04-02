import React,{useState} from 'react'
import background from '../assets/vectors/background.jpg'
import house_key from '../assets/vectors/key.png'
import key2 from '../assets/vectors/key2.png'
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoChevronDownSharp , IoIosArrowRoundForward  } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { TbCurrencyNaira, TbAdjustmentsHorizontal  } from "react-icons/tb";





const Home = () => {
  return (
    <div className='static'>
      <div class="bg-hero-home bg-cover bg-center h-screen mt-[-130px] -z-100"></div>
      <div className='flex justify-between'>

      <div className='absolute text-white bottom-100 ms-5 top-30 '> <p className='text-4xl text-[#C8C8C8]'>All-in-one real estate and 
        <span className='block'>property management software</span>
        <span className='block'>for <span className='text-white'>Landlords</span></span></p>

        <button className='bg-[#EF6700C9] my-5 p-2 rounded-lg'>EXPLORE NOW <IoIosArrowRoundForward className='text-white' /></button>

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
    </div>
  )
}

export default Home