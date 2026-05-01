import React from 'react'
import { FaAsterisk ,FaArrowRight } from "react-icons/fa";
import { TbSquareLetterAFilled, TbSquareLetterBFilled  } from "react-icons/tb";



const Contact = () => {
  return (
    <div className='px-5'>
        <p className='text-xl md:text-5xl text-center font-bold my-10'>Let’s Talk</p>
        <p className='text-center'>We’re here to help you find your perfect property. Reach out via the form or schedule a tour directly</p>

        <div className='mx-5 md"mx-50 mt-10'>
          <form>
            <div className='relative'>
              <input type="text" placeholder='Full Name' className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 md:left-310 left-69 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative my-10'>
              <input type="text" placeholder='Organization' className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 left-69 md:left-310 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative'>
              <input type="text" placeholder='Email Address' className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 left-69 md:left-310 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative my-10'>
              <input type="text" placeholder='Mobile Number' className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 left-69 md:left-310 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative'>
              <p className='mb-5 text-2xl font-bold'>Select Your Region</p>
              <select name="region" id="region" className='border-1 border-gray-400 w-full h-20 md:h-30 text-gray-500 text-3xl p-5'>
                <option value="" disabled > Nigeria</option>
              </select>
              {/* <input type="text" placeholder='Full Name' className='border-1 border-gray-400 w-full h-30 placeholder:text-3xl placeholder:p-5' /> */}
              {/* <FaAsterisk className='absolute bottom-15 md:bottom-26 left-76 md:left-232 bg-gray-300 p-3 rounded-full size-10' /> */}
            </div>
            <div>
              <p className='text-3xl font-bold mt-10'>I want to</p>

                <div className='flex justify-between my-5'>
              <div className='relative'>
                <input type="text" placeholder='Schedule a Tour' className='border border-gray-500 w-35 md:w-100 h-18 text-2xl ps-20' readonly />
                <TbSquareLetterAFilled  className='absolute bottom-5 ms-2 md:ms-8 md:size-8'/>

              </div>

              <div className='relative'>
                <input type="text" placeholder='Make Inquiry' className='border border-gray-500 w-35 md:w-100 h-18 text-2xl md:ps-20' readonly />
                <TbSquareLetterBFilled className='absolute bottom-5 ms-2 md:ms-8 md:size-8' />

              </div>

                </div>

            </div>
            <div className='my-10'>
              <textarea name="" id="" placeholder='Type your message here' className='w-full border border-gray-500 h-50 md:h-100 placeholder:text-3xl placeholder:p-5'></textarea>
            </div>
            <div className='relative mb-20'>
            <button className='bg-[#223B7EC9] w-full rounded-lg text-white text-lg py-2'>Submit</button>
            <FaArrowRight className='absolute bottom-3 left-20 md:left-130 text-white' />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact