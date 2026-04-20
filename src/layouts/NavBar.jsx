import React, {useState} from 'react'
import logo from '../assets/images/logo.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";




const NavBar = () => {
    // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
    const navigate = useNavigate()
  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      navigate("/login");
    } else {
      console.log("Logout Error");
    }
  };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, to: "/", txt: "Home" },
    { id: 2, to: "/about", txt: "About Us" },
    { id: 3, to: "/listings", txt: "Listings" },
    { id: 4, to: "/services", txt: "Services" },
    { id: 5, to: "/contact", txt: "Contact Us" },
    // { id: 6, to: "/blog", txt: "Blog" },
    // { id: 6, to: "/login", txt: "Login" },
    // { id: 7, to: "/register", txt: "Register" },
  ];
  return (
         <div className="bg-[rgba(0,0,0,0.2)] z-50">
         {/* <div className="bg-[rgba(0,0,0,0.2)] z-50"> */}
      <nav className="relative md:mb-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap bg-white-0 items-center justify-between mx-[10px] mt-[20px]">
          <Link
            to={"/"}
            className="items-center space-x-1 rtl:space-x-reverse no-underline"
          >
            <img
              src={logo}
              height={50}
              width={50}
              alt="Logo"
              className="rounded-lg"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          ></button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="bg-white-0 flex ml-[200px]">

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/about'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     About Us
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/listings'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     Listings
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/services'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     Services
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/contact'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     Contact Us
                    </Link>
                  </li>
                  
                
            </ul>
            
          </div>
          {/* <div>
            
          </div> */}
        </div>
        {/* Get Started Button */}
        <Link to='/get-started'>
            <button className='bg-omaOrange text-white h-10 w-50 rounded-full mt-3'>Get Started</button>
            </Link>
      </nav>
      {/* Mobile Navigation Icon */}
      <div className="relative z-[20px]">
        <div
          onClick={handleNav}
          className=" block ml-[250px] mb-1 mt-[-55px] md:hidden"
        >
          {nav ? <BiX size={40} color='#fff' /> : <BiMenu size={40} color='#fff'/>}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "md:hidden mt-4 w-screen bg-white-0 ease-in-out duration-500"
              : "ease-in-out w-screen duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}

          {/* Mobile Navigation Items */}

            <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/about'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     About Us
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/listings'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     Listings
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/services'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     Services
                    </Link>
                  </li>

                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]">
                    <Link
                      to={'/contact'}
                      className="text-white no-underline font-serif font-bold bg-white-0"
                    >
                     Contact Us
                    </Link>
                  </li>
                  <Link to='/get-started'>
            <button className='bg-omaOrange text-white h-10 w-50 rounded-full mt-3'>Get Started</button>
            </Link>
                
        </ul>
      </div>
    </div>
  )
}

export default NavBar