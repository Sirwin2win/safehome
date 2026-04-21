import React, {useState} from 'react'
import logo from '../assets/images/safehome_logo.png'
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
  const [isOpen, setIsOpen] = useState(false);
  return (
         <nav className="bg-gray-500 text-white z-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        {/* <div className="text-xl font-bold">MyApp</div> */}
        <Link to={'/'}>
        <img src={logo} alt=""  className='size-10 ms-8'/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to={'/'} className="hover:text-gray-300">Home</Link>
          <Link to={'/about'} className="hover:text-gray-300">About Us</Link>
          <Link to={'/listings'} className="hover:text-gray-300">Listings</Link>
          <Link to={'/services'} className="hover:text-gray-300">Services</Link>
          <Link to={'/contact'} className="hover:text-gray-300">Contact Us</Link>
        </div>
			        {/* Get Started Button */}
        <Link to='/get-started'>
            <button className='bg-omaOrange text-white h-10 w-50 rounded-lg hidden md:block'>Get Started</button>
            </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none me-15"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          <li>
          <Link to={'/'} className="hover:text-gray-300">Home</Link>
          </li>
          <li>
          <Link to={'/about'} className="hover:text-gray-300">About Us</Link>
          </li>
          <li>
          <Link to={'/listings'} className="hover:text-gray-300">Listings</Link>
          </li>
          <li>
          <Link to={'/services'} className="hover:text-gray-300">Services</Link>
          </li>
          <li>
          <Link to={'/contact'} className="hover:text-gray-300">Contact Us</Link>
          </li>
          <li>
             <Link to='/get-started'>
            <button className='bg-omaOrange text-white h-10 w-50 rounded-lg md:hidden'>Get Started</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar