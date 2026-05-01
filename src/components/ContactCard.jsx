import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";




const ContactCard = () => {
  return (
    <div className='md:flex md:justify-evenly -mt-20 md:-mt-85 px-3'>
        <div>
            <p className='text-4xl font-bold md:mb-10 text-center'>Contact Us</p>
            <div className='flex justify-betweeen my-5'>
                <div className='flex justify-spaced'>
                       <TfiEmail className=''/>
                       <div className='-mt-1'>
                <p className='ms-1 text-sm md:text-md'>Email</p>
                <p className='-ms-4 text-sm md:text-md'>sales@safehomeproperties.com</p>
                       </div>
                </div>
                <div className='flex justify-spaced ms-5 md:ms-50'>
                       <MdOutlinePhone />
                <div className='-mt-1 '>
                    <p className='ms-1 text-sm md:text-md'>Phone</p>
                    <p className='md:-ms-4 text-sm md:text-md'>+2347041005315</p>
                </div>
                </div>
               
            </div>
            {/* Location */}
            <div className='flex justify-between'>
            <div>
            <div className='flex justify-spaced my-5'>
            <IoLocationOutline  />
            <p className='-mt-1 ms-2 text-sm md:text-md'>Location</p>
            </div>
            <p className='-mt-4 text-sm md:text-md'>Plot 12/14 Korstin Muller Complex
             <span className='block'> Industrial layout, Idu Abuja</span> 
             </p>
            </div>

            {/* Business Hours */}
            <div className='ms-8 md:ms-0'>
            <div className='flex justify-spaced my-5'>
            <MdOutlinePhone  />
            <p className='-mt-1 md:ms-2 text-sm md:text-md'>Business Hours</p>
            </div>
            <p className='-mt-4 ms-3 text-sm md:text-md'>Monday-Friday 9:00AM - 6:00PM</p>
            </div>
            </div>

            <div className='my-5'>
                <p className='text-sm md:text-md'>We’re here to help you navigate the real estate market. Reach out with any questions!</p>
            </div>
        </div>

        <div className='bg-[#F4F4F4] my-20'>
            <p className='font-bold p-10'>Let's Find Your Property</p>
            <div className='mx-10'>
            <form>
               <div> <input type="text" className='bg-white w-full rounded-lg' name="" id="" placeholder='Name' /></div>
               <div> <input type="text" className='bg-white my-5 w-full rounded-lg' name="" id="" placeholder='Email' /></div>
               <div><textarea name="" className='bg-white w-full rounded-lg' id="" placeholder='Message'></textarea></div>
               <button className='bg-[#223B7EC9] text-white px-5 w-full rounded-full my-8'>Send Message</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default ContactCard