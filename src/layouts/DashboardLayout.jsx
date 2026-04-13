import React, { useState, useEffect } from 'react'
import { FaBars, FaCog, FaSyncAlt , FaSignOutAlt, FaBell, FaHome  } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { useSelector ,useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate } from 'react-router-dom'
// import { logout, setCredentials } from '../features/auth/authSlice'
import { BiPurchaseTag } from "react-icons/bi";
import admin from '../assets/images/admin.avif'
import logo from '../assets/images/logo.jpg'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { MdPayment, MdHistory  } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";







const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  //  const user = useSelector((state) => state.auth.user);
   const navigate = useNavigate()
  //  const dispatch = useDispatch();



     // Handle logout
       const handleLogout = () => {
    // dispatch(logout());
    navigate('/');
  };

  return (
    <div className='flex'>
      <div className={`w-20 md:w-64 bg-[#F5F5F5] transition-with duration-300 text-white
         ${isOpen ? "w-64" : "w-20"}
         `} >
         <div className='flex justify-between item-center p-4'>
          <div className='flex justify-evenly'>
            <img src={logo} alt="safehome logo" className='size-8 me-3' />
         <h2 className={`text-xl font-bold  text-black md:block ${isOpen?"block":"hidden"}`}>SafeHome</h2>
          </div>
         <button className='block text-black md:hidden' onClick={()=> setIsOpen(!isOpen)}>
          {isOpen? <IoCloseSharp size={24} />: <FaBars size={24} /> }  
         </button>
          
         </div>
        
         <nav className='mt-4'>
   <ul>
      <li className='flex items-center p-4 m-3 rounded-lg bg-gray-400 cursor-pointer'>
        <TbLayoutDashboardFilled  size={24} className='text-black' />
        <span className={`ml-4 text-black md:block ${isOpen?"block":"hidden"}`}>
         Dashboard
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 rounded-lg cursor-pointer'>
        <BsTools size={24} className='text-black' />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 text-black md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'manage-product'} >Mentenance Request</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <MdPayment   size={24}/>
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'manage-category'}>Payment Accounts</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <IoDocumentText  size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'manage-product'}>Lease Documents</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <FaSyncAlt  size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'order'}>Set autopay</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <MdHistory   size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'order'}>Payment History</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <FaHome   size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'order'}>Lease Information</Link>
         </span>  
      </li>
      {/* {user.role == 'admin' &&
        <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaUserEdit size={24}/>
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
        <Link to={'role'}>User Roles</Link>
         </span>  
      </li> */}
      {/* } */}
    
      <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaCog size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         Settings
         </span>  
      </li>
      <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer' onClick={handleLogout}>
        <FaSignOutAlt size={24}  />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         Logout 
         </span>  
      </li>
   </ul>
         </nav>
      </div>
      {/* dashboard */}
      <div className='p-8 bg-white min-h-screen flex-1'>
        <div className='flex justify-between'>
          <div>
         <h2 className='text-2xl font-bold'>Dashboard</h2>
         <p className='text-gray-500'>Welcome back, Ijeoma!</p>
          </div>
          <div className='flex justify-center'>
              <FaBell className='size-8 p-2 bg-gray-100 mt-1'/>
              <img src={admin} alt="safeHome admin" className='size-10 rounded-full mx-5' />
              <div className='-mt-2'>
                <p className='text-2xl font-bold'>Love Ijeoma</p>
                <p className='text-gray-500'>safehome@example.com</p>
              </div>

          </div>

        </div>
         <Outlet />
          
      </div>
    </div>

  )
}

export default DashboardLayout