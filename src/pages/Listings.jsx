import React from 'react'
import ListingCard from '../components/ListingCard'
import Map from '../components/Map'
import { BiSearch } from "react-icons/bi";
import RentBuyTab from '../components/RentBuyTab';


const Listings = () => {
  return (
    <div className='flex justify-evenly'>
      {/* Mobile only area started */}
      
      {/* Mobile only area ended */}
      {/* Lef Div Started */}
      <div>
        <RentBuyTab />
      </div>
      {/* Left Div Ended */}
      {/* Right Div Started */}
        <div className=''>
          <div className='relative'>
          <input type="search" placeholder='City,neighborhood or city'
           className='w-full rounded-full bg-gray-100 p-3 mt-5 mb-8' />
           <BiSearch className='absolute bottom-12 md:left-180 left-80'/>

          </div>
        <Map />
        <ListingCard />
        </div>
        {/* Right Div Ended */}
    </div>
  )
}

export default Listings