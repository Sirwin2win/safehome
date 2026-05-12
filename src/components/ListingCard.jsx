import React, { useEffect, useState } from 'react'
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
import { fetchProducts } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ListingCard = () => {
      const dispatch = useDispatch()
      const {products , prodSuccess,productError} = useSelector(state=> state.products)
  
  
      useEffect(()=>{
          if(prodSuccess==='idle'){
              dispatch(fetchProducts())
          }
      },[prodSuccess,dispatch])
  
  
    // RETURNS SHOULD COME AFTER HOOKS
  
    if (prodSuccess === "loading") {
      return <p>Loading products...</p>;
    }
  
    if (prodSuccess === "failed") {
      return <p>Error: {productError}</p>;
    }
  
  return (
    <div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 pt-5 gap-6'>
                {products.map((product)=>(
            <div className="mx-auto mt-5 w-90 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg" key={product.id}>
          <div className="p-5">
           <img  className="h-60 w-full object-cover rounded-t-lg" src={`https://api.safehomeproperties.com/uploads/${product.image}`} alt={product.title} />
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
            <div className="flex justify-evenly"><FaBed className='text-[#C8C8C8] size-5' /> <p className='text-[#C8C8C8] ms-3'> {product.rooms}</p></div>
            <div className="flex justify-evenly"><IoWaterOutline className='text-[#C8C8C8] size-5' /> <p className='text-[#C8C8C8] ms-3'>{product.baths}</p> </div>
            <div className="flex justify-evenly"><PiRectangleDashedLight className='text-[#C8C8C8] size-5' /> <p className='text-[#C8C8C8] ms-3'>{product.size} sqft</p></div>
              <Link to={`/detail/${product.id}`} className='text-[#C8C8C8] underline' >
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