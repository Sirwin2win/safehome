import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";




const ContactCard = () => {
  return (
    <div className='flex justify-evenly'>
        <div>
            <p className='text-4xl font-bold my-10'>Contact Us</p>
            <div className='flex justify-betweeen my-5'>
                <div className='flex justify-spaced'>
                       <TfiEmail className=''/>
                       <div className='-mt-1'>
                <p className='ms-1'>Email</p>
                <p>safehomepropertymanagerltd@gmail.com</p>
                       </div>
                </div>
                <div className='flex justify-spaced ms-50'>
                       <MdOutlinePhone />
                <div className='-mt-1'>
                    <p className='ms-1'>Phone</p>
                    <p >+2347041005315</p>
                </div>
                </div>
               
            </div>
            {/* Location */}
            <div className='flex justify-spaced my-5'>
            <IoLocationOutline  />
            <p className='-mt-1 ms-2'>Location</p>
            </div>
            <p>Plot 12/14 Korstin Muller Complex Industrial layout, Idu Abuja</p>
            {/* Business Hours */}
            <div className='flex justify-spaced my-5'>
            <MdOutlinePhone  />
            <p className='-mt-1 ms-2'>Business Hours</p>
            </div>
            <p>Monday-Friday 9:00AM - 6:00PM</p>

            <div className='my-5'>
                <p>We’re here to help you navigate the real estate market. Reach out with any questions!</p>
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