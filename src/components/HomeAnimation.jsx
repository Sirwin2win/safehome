import React, { useEffect, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  IoLocationOutline,
  IoChevronDownSharp,
  IoSearchOutline,
} from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { TbCurrencyNaira, TbAdjustmentsHorizontal } from "react-icons/tb";
import "./style.css";
import { BsStars } from "react-icons/bs";
import house_key from "../assets/vectors/key.png";
import key2 from "../assets/vectors/key2.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../features/properties/propertySlice";

const HomeAnimation = () => {
  //initializations
  const dispatch = useDispatch();
  const { properties, propStatus, propError } = useSelector(
    (state) => state.properties,
  );

  useEffect(() => {
    if (propStatus === "idle") {
      dispatch(fetchProperties());
    }
  }, [propStatus, dispatch]);

  // RETURNS SHOULD COME AFTER HOOKS

  if (propStatus === "loading") {
    return <p>Loading properties...</p>;
  }

  if (propStatus === "failed") {
    return <p>Error: {propError}</p>;
  }
  console.log(properties);
  return (
    <div className="static">
      <div class="hero h-200 bg-cover w-full"></div>
      {/* <div class="hero bg-cover bg-center h-screen mt-[-130px] -z-100"></div> */}
      <div className="absolute text-white bottom-100 ms-5 top-30 px-5">
        <p className="text-3xl text-white ">
          All-in-one real estate and
          <span className="block">property management software</span>
          <span className="block">for Landlords</span>
        </p>

        <button className="flex justify-evenly bg-[#EF6700C9] my-5 p-2 rounded-lg">
          <Link to={"/listings"}>EXPLORE NOW</Link>{" "}
          <MdOutlineArrowRightAlt className="text-white mt-1 ms-2" />
        </button>

        <p className="text-white md:text-lg">
          Discover a lifestyle where elegance meets comfort, blending
          <span className="block">
            timeless design with modern sophistication
          </span>
        </p>
        {/* Buy/Rent Desktop started */}
        <form className="absolute hidden md:block text-white top-100 -ms-7">
          <Link to="/" className="text-[#C8C8C8]">
            BUY
          </Link>
          <Link to="/" className="text-[#C8C8C8] ms-2">
            RENT
          </Link>
          <div className="flex justify-evenly mt-5">
            {/* <div className='grid grid-cols-4 gap-3 mt-5'> */}
            <div className="flex justify-evenly md:bg-[#223B7E99] text-white p-2 w-80 mx-5">
              {" "}
              <IoLocationOutline />
              <span>Location</span>
              <select className="bg-[#223B7E99]">
                <option value="" disabled selected></option>
                <option value="">Wuse</option>
                <option value="">Asokoro</option>
              </select>
            </div>
            <div className="flex justify-evenly md:bg-[#223B7E99] text-white p-2 w-80 ">
              {" "}
              <FiHome /> <span>Property Type </span>
              <select className="bg-[#223B7E99]">
                <option value="" disabled selected></option>
                <option value="">Villa</option>
                <option value="">Duplex</option>
                <option value="">Detached</option>
              </select>
            </div>
            <div className="flex justify-evenly md:bg-[#223B7E99] text-white p-2 w-80 mx-5">
              {" "}
              <TbCurrencyNaira />
              <span>Budget </span>
              <select className="bg-[#223B7E99]">
                <option value="" disabled selected></option>
                <option value="">0-100,000,000</option>
                <option value="">101,000,000-200,000,000</option>
                <option value="">201,000,000-300,000,000</option>
                <option value="">301,000,000-400,000,000</option>
                <option value="">401,000,000-500,000,000</option>
              </select>
            </div>
            <div className="flex justify-evenly md:bg-[#223B7E99] text-white p-2 w-78">
              {" "}
              <TbAdjustmentsHorizontal /> <span>Target Filters </span>
              <select className="bg-[#223B7E99]">
                <option value="" disabled selected></option>
                <option value="">Mountain View</option>
                <option value="">Gulf Front</option>
                <option value="">Swimming Pool</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between relative p-2 left-280 top-2 hidden md:block w-50 h-10 bg-[#EF6700C9] rounded-lg">
            <IoSearchOutline className="text-white size-5 absolute" />
            <input
              type="search"
              className="w-40 placeholder:ps-10 placeholder:text-xl placeholder:text-white"
              placeholder="search"
            />
          </div>
        </form>
        {/* Buy/Rent Desktop ended */}
      </div>
      {/* Search started */}
      {/* <div className='absolute top-153 left-280 hidden md:block w-50 bg-[#EF6700C9] rounded-lg'>
          
        </div> */}
      {/* Search ended */}
      {/* Buy/Rent Mobile started */}
      <div className="md:hidden top-100 mt-5">
        <Link to="/" className="ms-10">
          BUY
        </Link>
        <Link to="/" className="ms-2">
          RENT
        </Link>
        <div className=" mt-5 mx-5">
          <div className="flex justify-evenly">
            <div className="flex justify-center md:bg-[#223B7E99]  p-2 w-40">
              {" "}
              <p className="mt-1 me-2">
                <IoLocationOutline />
              </p>{" "}
              <p>Location </p>
              <p className="mt-1 ms-5">
                <IoChevronDownSharp />
              </p>
            </div>
            <div className="flex justify-center md:bg-[#223B7E99]  p-2 w-80 ">
              {" "}
              <p className="mt-1 ">
                <FiHome />
              </p>{" "}
              <p>Property Type </p>
              <p className="mt-1 ms-8">
                <IoChevronDownSharp />
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center md:bg-[#223B7E99]  p-2 w-40">
              {" "}
              <p className="mt-1">
                <TbCurrencyNaira />
              </p>{" "}
              <p>Budget </p>
              <p className="mt-1 ms-5">
                <IoChevronDownSharp />
              </p>
            </div>
            <div className="flex justify-center md:bg-[#223B7E99]  p-2 w-70">
              {" "}
              <p className="mt-1 me-3">
                <TbAdjustmentsHorizontal />
              </p>{" "}
              <p>Target Filters </p>
              <p className="mt-1 ms-5">
                <IoChevronDownSharp />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Buy/Rent Mobile ended */}
      {/* Search for mobile started */}
      <div className="md:hidden bg-[#EF6700C9] rounded-lg mx-15 my-10">
        <div className="flex justify-center p-2">
          <IoSearchOutline className="text-white size-5" />
          <form>
            <input
              type="search"
              className="w-40 placeholder:ps-10 placeholder:text-xl placeholder:text-white"
              placeholder="search"
            />
          </form>
        </div>
      </div>
      {/* Search for mobile ended */}
    </div>
  );
};

export default HomeAnimation;
