import React from 'react'
import watergate  from '../assets/vectors/safe_home_house1.jpg'
import wonderland  from '../assets/vectors/safe_home_house2.jpg'
import aso  from '../assets/vectors/safe_home_house3.jpg'
import burumark  from '../assets/vectors/safe_home_house4.jpg'
import prime  from '../assets/vectors/safe_home_house5.jpg'
import real  from '../assets/vectors/safe_home_house6.jpg'
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoWaterOutline  } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { PiRectangleDashedLight } from "react-icons/pi";

const ListingCard = () => {
      const properties = [
          {id:1, title:'Wonderland Estate', price:300000000, image:wonderland, type:'For Rent',location:'Wuse II Abj',features:{bed:2,bath:2,size:1800}},
          {id:2, title:'WaterGate Estate', price:200000000, image:watergate, type:'For Sale',location:'Asokoro Abj',features:{bed:2,bath:2,size:1800}},
          {id:3, title:'Burumark Estate', price:270000000, image:burumark, type:'For Sale',location:'Gwarinpa Abj',features:{bed:2,bath:2,size:1800}},
          {id:4, title:'Prime Estate', price:410000000, image:prime, type:'For Sale',location:'Dawaki Abj',features:{bed:2,bath:2,size:1800}},
          {id:5, title:'Wonderland Estate', price:300000000, image:wonderland, type:'For Rent',location:'Wuse II Abj',features:{bed:2,bath:2,size:1800}},
          {id:6, title:'WaterGate Estate', price:200000000, image:watergate, type:'For Sale',location:'Asokoro Abj',features:{bed:2,bath:2,size:1800}},
          {id:7, title:'Burumark Estate', price:270000000, image:burumark, type:'For Sale',location:'Gwarinpa Abj',features:{bed:2,bath:2,size:1800}},
          {id:8, title:'Prime Estate', price:410000000, image:prime, type:'For Sale',location:'Dawaki Abj',features:{bed:2,bath:2,size:1800}},
         ]
  return (
    <div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 pt-5 gap-6'>
                {properties.map((product)=>(
            <div className="mx-auto mt-5 w-90 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg" key={product.id}>
          <div className="p-5">
          <img className="h-60 w-full object-cover rounded-t-lg" src={product.image} />
          </div>
          <div className='flex justify-center'>
            <IoLocationOutline className='text-[#C8C8C8]' size={30}/> <p className='ms-3 text-[#C8C8C8]'>{product.location}</p>
          </div>
          
          <div className="p-4">
            <div className='flex justify-evenly'>
        
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
           <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">₦{product.price}</p>
            </div>
            <div className="flex justify-evenly my-4">
            <div className="flex justify-evenly"><FaBed className='text-[#C8C8C8] size-5' /> <p className='text-[#C8C8C8] ms-3'> {product.features.bed}</p></div>
            <div className="flex justify-evenly"><IoWaterOutline className='text-[#C8C8C8] size-5' /> <p className='text-[#C8C8C8] ms-3'>{product.features.bath}</p> </div>
            <div className="flex justify-evenly"><PiRectangleDashedLight className='text-[#C8C8C8] size-5' /> <p className='text-[#C8C8C8] ms-3'>{product.features.size} sqft</p></div>
              <Link to={`/product/${product.id}`} className='text-[#C8C8C8] underline' >
              View Details
              </Link>
            </div>
          </div>
          
        </div>          
                ))}
                  {/* <p className='text-center'>No Products found</p> */}
                </div>
    </div>
  )
}

export default ListingCard