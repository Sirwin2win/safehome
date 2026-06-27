import React, { useState } from "react";
import logo from "../assets/images/safehome-logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";
import { div } from "framer-motion/client";

const NavBar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-500 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-xl font-bold">MyApp</div> */}
        <Link to={"/"}>
          <img src={logo} alt="" className="size-15 ms-8 rounded-lg" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="hover:text-gray-300">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-gray-300">
            About Us
          </Link>
          <Link to={"/listings"} className="hover:text-gray-300">
            Listings
          </Link>
          <Link to={"/services"} className="hover:text-gray-300">
            Services
          </Link>
          <Link to={"/contact"} className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>
        {/* Get Started Button */}
        <Link to="/signup">
          <button className="bg-omaOrange text-white h-10 w-50 rounded-lg hidden md:block">
            Login
          </button>
        </Link>

        {/* Mobile Button */}
        {/* <button
          className="md:hidden focus:outline-none me-15"
          onClick={() => setIsOpen(!isOpen)}
        > */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden me-5 cursor-pointer"
        >
          {isOpen ? (
            <IoMdClose className="size-8" />
          ) : (
            <GiHamburgerMenu className="size-8" />
          )}
        </div>
        {/* </button> */}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-25 w-full oma ps-35 -ms-25 pb-4  z-50">
          <li>
            <Link
              to={"/"}
              className="hover:text-gray-300 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="my-5">
            <Link
              to={"/about"}
              className="hover:text-gray-300 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/listings"}
              className="hover:text-gray-300 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Listings
            </Link>
          </li>
          <li className="my-5">
            <Link
              to={"/services"}
              className="hover:text-gray-300 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="mb-5">
            <Link
              to={"/contact"}
              className="hover:text-gray-300 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li className="-ms-15">
            <Link to="/signup">
              <button
                className="bg-omaOrange text-white text-2xl h-10 w-50 rounded-lg md:hidden"
                onClick={() => setIsOpen(false)}
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
