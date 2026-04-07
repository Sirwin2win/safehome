import React from 'react'
import memebers from '../assets/images/safe_home_members.jpg'
import { MdOutlineHomeWork } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";
import { PiUsers } from "react-icons/pi";
import HomeCard1 from '../components/HomeCard1';
import FeaturesCard from '../components/FeaturesCard';




const Services = () => {
  return (
    <div>
      <div className='flex justify-center my-10'>
        <button className='bg-[#223B7E99] rounded-full p-1'>SafeHome Management</button>
      </div>
      <p className='text-center text-2xl font-bold mb-5'>Seamless Living Experience</p>
      <p className='text-center px-78 text-lg'>We make life easier across Africa through our integrated community management platform.</p>
      <img src={memebers} alt="membesr" className='my-10 px-20' />
      {/* Counts Started */}

      <div className='flex justify-evenly'>
          <div className='flex justify-center'>
            <TbBuildingCommunity  className='size-20 bg-[#223B7EC9] text-white rounded-full p-5' />
            <div className='ms-3 mt-4'>
              <p className='text-2xl font-bold'>14 Cities</p>
              <p>Across Africa</p>
            </div>

          </div>
          <div className='flex justify-center'>
            <MdOutlineHomeWork className='size-20 bg-[#223B7EC9] text-white rounded-full p-5'/>
            <div className='ms-3 mt-4'>
              <p className='text-2xl font-bold'>20,000</p>
              <p>roperty Units</p>
            </div>

          </div>
          <div className='flex justify-center'>
            <PiUsers  className='size-20 bg-[#223B7EC9] text-white rounded-full p-5'/>
            <div className='ms-3 mt-4'>
              <p className='text-2xl font-bold'>22,000</p>
              <p>Residents</p>
            </div>

          </div>
      </div>
      {/* Counts Ended */}
      <HomeCard1 />
      <FeaturesCard />
    </div>
  )
}

export default Services