import React from 'react'
import logo from '../assets/images/safehome_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='relative bg-[#F1F1F1CC]'>
        <img src={logo} className='absolute size-20 md:top-5 top-1 md:left-5 left-25' alt="Logo Image" />
        <p className='ml-50 mt-10'>Coastal living & timeless comfort in Abuja</p>
        <div className='md:flex mx-25 my-10 md:justify-evenly'>
            <div>
                <p className='font-bold mb-2'>Phone</p>
                <p className='text-gray-700'>+2347041005315</p>
            </div>
            <div>
                <p className='font-bold mb-2'>Quick Links</p>
                <p className='text-gray-700'> 
                    <Link to={'/'}>Home</Link> | <Link to={'/about'}>About Us</Link> |
                     <Link to={'/listings'}>Listings</Link>| <Link to={'#'}>FAQ</Link> | <Link to={'/contact'}>Contact Us</Link></p>
            </div>
            <div>
                <p className='font-bold mb-2'>Stay Posted</p>
                <p className='text-gray-700'>Sign up to receive the newsletter to your inbox</p>
            </div>
            
        </div>
        <div className='md:flex mx-25 mt-10 mb-20 md:justify-evenly'>
            <div>
                <p className='font-bold mb-2'>Email</p>
                <p className='text-gray-700'>safehomepropertymanagerltd<span className='block'>@gmail.com</span></p>
            </div>
            <div>
                <p className='font-bold mb-2'>Address</p>
                <p className='text-gray-700'>Plot 12/14 Korstin Muller <span className='block'>Complex Industrial layout, Idu Abuja</span> </p>
            </div>
            {/* <div> */}
                <form action="post" className='mt-10 relative'>
                <input type="text" className='border border-black md:w-80 w-40 rounded-lg' />
                <button className='bg-[#223B7EC9] text-white w-15 rounded-lg absolute md:left-[260px] md:right-0 right-4'>Sign Up</button>
            </form>
            {/* </div> */}
            
        </div>
    </div>
  )
}

export default Footer