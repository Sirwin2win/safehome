import React from 'react'
import logo from '../assets/images/safehome-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='relative bg-[#F1F1F1CC] px-2 '>
        <img src={logo} className='absolute size-10 md:size-20 md:top-2 top-1 md:left-5' alt="Logo Image" />
        <p className='ml-20 md:ml-50 mt-10 text-center pt-3'>Coastal living & timeless comfort in Abuja</p>
        <div className='md:flex my-15 md:justify-evenly'>
            {/* Phone */}
            <div className='px-3'>
                <p className='font-bold mb-2'>Phone</p>
                <p className='text-gray-700'>+2347041005315</p>
                
                <p className='font-bold mb-2'>Email</p>
                <p className='text-gray-700'>sales@safehomeproperties.com</p>
          
            </div>
            {/* Quick Links */}
            <div className='my-20 md:my-0 mx-0 md:mx-50 px-3'>
                <p className='font-bold mb-2'>Quick Links</p>
                <p className='text-gray-700'> 
                    <Link to={'/'}>Home</Link> | <Link to={'/about'}>About Us</Link> |
                     <Link to={'/listings'}>Listings</Link>| <Link to={'#'}>FAQ</Link> | <Link to={'/contact'}>Contact Us</Link></p>
                    
                <p className='font-bold mb-2'>Address</p>
                <p className='text-gray-700'>Plot 12/14 Korstin Muller <span className='block'>Complex Industrial layout, Idu Abuja</span> </p>
           
            </div>
            {/* Stay Posted */}
            <div className='px-3'>
                <p className='font-bold mb-2'>Stay Posted</p>
                <p className='text-gray-700'>Sign up to receive the newsletter to your inbox</p>
                <form action="post" className='mt-10 relative'>
                <input type="text" className='border border-black md:w-80 w-40 rounded-lg' />
                <button className='bg-[#223B7EC9] text-white w-15 rounded-lg absolute left-25 md:left-[260px] md:right-0 right-4'>Sign Up</button>
            </form>
            </div>
        </div>
        <marquee className="text-6xl text-gray-200">Safehome Properties</marquee>
    </div>
  )
}

export default Footer