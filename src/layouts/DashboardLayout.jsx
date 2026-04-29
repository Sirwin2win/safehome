import React, { useState, useEffect } from 'react'
import { FaBars, FaCog, FaSyncAlt , FaSignOutAlt, FaBell, FaHome  } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { useSelector ,useDispatch } from 'react-redux'
import { Outlet, Link, useNavigate } from 'react-router-dom'
// import { logout, setCredentials } from '../features/auth/authSlice'
import { BiPurchaseTag } from "react-icons/bi";
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
            <Link to={'/'}>
            <img src={logo} alt="safehome logo" className='size-8 me-3' />
            </Link>
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
         <Link to={'/dashboard'}>Dashboard</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 rounded-lg cursor-pointer'>
        <BsTools size={24} className='text-black' />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 text-black md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'mentenance'} >Mentenance Request</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <MdPayment   size={24}/>
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'payment-account'}>Payment Accounts</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <IoDocumentText  size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'lease-docs'}>Lease Documents</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <FaSyncAlt  size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'set-autoplay'}>Set autopay</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <MdHistory   size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'payment-history'}>Payment History</Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <FaHome   size={24} />
        {/* <FaUserAlt size={24} /> */}
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         <Link to={'lease-info'}>Lease Information</Link>
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
    
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <FaCog size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}> 
          <Link to={'profile-settings'}>
          Profile Settings
          </Link>
         </span>  
      </li>
    
      <li className='flex items-center p-4 m-3 text-black cursor-pointer'>
        <FaCog size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}> 
          <Link to={'category'}>
         Manage Category
          </Link>
         </span>  
      </li>
      <li className='flex items-center p-4 m-3 text-black cursor-pointer' onClick={handleLogout}>
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
        
         <Outlet />
          
      </div>
    </div>

  )
}

export default DashboardLayout