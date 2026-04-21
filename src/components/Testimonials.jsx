import React from 'react'
import { BsStars } from "react-icons/bs";
import Eddie from '../assets/vectors/Eddie.jpg'
import { RiStarFill } from "react-icons/ri";
import { IoChevronBackCircleOutline , IoChevronForwardCircle  } from "react-icons/io5";



const Testimonials = () => {
  return (
    <div className='px-5'>
         
            <button className='flex justify-evenly bg-[#223B7E99] px-2 rounded-full mx-auto my-10 md:font-[600]'><BsStars className='me-2 size-8' /> Customers Testimonials</button>
            <p className='text-3xl font-bold text-center my-10'>Public Cheers for Us!</p>

           <div className='flex justify-center my-15'>
            <img src={Eddie} alt="safe_home_eddie" className='h-110 w-30 md:w-50 md:h-80 rounded-lg' />
            <div className='ms-5 -mt-10 md:-mt-0'>
                <p className='md:text-3xl font-bold'>Eddie Reignman</p>
                <p className='md:text-3xl font-[500]'>Nepal, India</p>
             
                <div className='flex justify-center md:-ms-0 -ms-30 my-2 md:my-5'>
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                </div>
                <p>From the first inquiry to final handover, the experience 
                   <span className='md:block'> was seamless. The team understood exactly what i was</span>
                     <span className='md:block'>looking for and helped me find a home that matched</span>
                      <span className='md:block'>both my lifestyle and budget. Their attention to detail, </span>
                     <span className='md:block'> responsiveness and genuine care made the entire </span>
                      <span className='md:block'>process stress free. The final result exceeded my</span> 
                      <span className='md:block'>expectations. I've already recommended them to my</span>
                       friends and family.
                       </p>
                       <div className='flex justify-end md:-mt-5'>

                       <IoChevronBackCircleOutline className='size-10' />
                       <IoChevronForwardCircle   className='size-10 ms-5'/>
                       </div>
            </div>
           </div>
    </div>
  )
}

export default Testimonials