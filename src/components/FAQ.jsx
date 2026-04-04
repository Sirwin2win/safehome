import React from 'react'
import { GoPlus } from "react-icons/go";


const FAQ = () => {
  return (
    <div className='mx-20'>
        <p className='text-3xl font-bold text-center my-10'>Frequently Asked Questions</p>
        <div className='flex justify-between bg-[#F1F1F1CC] py-5 px-3'>
            <p className='font-[500]'>How does SafeHomes Property help me find the ideal property?</p> <GoPlus />
            </div>
        <div className='flex justify-between bg-[#F1F1F1CC] py-5 px-3 my-10'>
            <p className='font-[500]'>Can i get a free consultation for my specific situation?</p> <GoPlus />
            </div>
        <div className='flex justify-between bg-[#F1F1F1CC] py-5 px-3'>
            <p className='font-[500]'>What services does SafeHomes Property offer for investors?</p> <GoPlus />
            </div>
        <div className='flex justify-between bg-[#F1F1F1CC] py-5 px-3 my-10'>
            <p className='font-[500]'>Which Regions of Abuja do you specialize in?</p> <GoPlus />
            </div>
    </div>
  )
}

export default FAQ