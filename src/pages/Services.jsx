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
      <div className="max-w-4xl mx-auto text-center px-6">

<p className="text-gray-700 text-lg leading-relaxed mb-6">
  We provide end-to-end property management solutions tailored for discerning property owners who demand excellence:
</p>

<ul className="text-gray-700 text-base leading-relaxed space-y-3 text-left mx-auto max-w-2xl">
  <li>• Strategic tenant sourcing and screening</li>
  <li>• Rent collection and financial accountability</li>
  <li>• Property maintenance and value preservation</li>
  <li>• Asset performance monitoring and reporting</li>
  <li>• Professional oversight with structured systems</li>
</ul>

<p className="text-gray-800 font-medium mt-6">
  Our goal is not just to manage but to optimize.
</p>

</div>
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