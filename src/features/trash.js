import React, { useEffect, useState } from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoChevronDownSharp, IoSearchOutline    } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { TbCurrencyNaira, TbAdjustmentsHorizontal  } from "react-icons/tb";
import './style.css'
import { BsStars } from "react-icons/bs";
import house_key from '../assets/vectors/key.png'
import key2 from '../assets/vectors/key2.png'
import { fetchProducts ,setFilter} from '../features/products/productSlice';
import { useDispatch, useSelector } from "react-redux";




const HomeAnimation = () => {
   const dispatch = useDispatch();

  const { filters } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [filters, dispatch]);

  const handleChange = (e) => {
    dispatch(
      setFilter({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };
  return (
        <div className='static'>
      <div class="hero h-200 bg-cover w-full"></div>
      {/* <div class="hero bg-cover bg-center h-screen mt-[-130px] -z-100"></div> */}
    <div className='absolute text-white bottom-100 ms-5 top-30 px-5'>
        <p className='text-3xl text-white '>All-in-one real estate and 
                <span className='block'>property management software</span>
                <span className='block'>for Landlords</span></p>
        
                <button className='flex justify-evenly bg-[#EF6700C9] my-5 p-2 rounded-lg'><Link to={'/listings'}>EXPLORE NOW</Link> <MdOutlineArrowRightAlt className='text-white mt-1 ms-2' /></button>
        
                <p className='text-white text-lg'>Discover a lifestyle where elegance meets comfort, blending
                  <span className='block'>timeless design with modern sophistication</span>
                </p>
    {/* Buy/Rent Desktop started */}
              <form
      className="
      absolute
      hidden
      md:flex
      flex-col
      gap-5
      text-white
      top-[100px]
      left-1/2
      -translate-x-1/2
      z-50
      "
    >
      {/* BUY / RENT */}
      <div className="flex gap-5 text-sm font-semibold">
        <Link
          to="/"
          className="text-white border-b-2 border-[#EF6700]"
        >
          BUY
        </Link>

        <Link
          to="/"
          className="text-[#C8C8C8]"
        >
          RENT
        </Link>
      </div>

      {/* SEARCH CONTAINER */}
      <div
        className="
        flex
        items-center
        gap-3
        bg-[#223B7E99]
        backdrop-blur-md
        p-4
        rounded-2xl
        shadow-2xl
        "
      >
        {/* LOCATION */}
        <div
          className="
          flex
          items-center
          gap-2
          border-r
          border-gray-500
          pr-5
          "
        >
          <IoLocationOutline className="text-xl" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-300">
              Location
            </span>

            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="
              bg-transparent
              outline-none
              text-white
              "
            >
              <option className="text-black" value="">
                Select
              </option>

              <option className="text-black" value="Wuse">
                Wuse
              </option>

              <option className="text-black" value="Asokoro">
                Asokoro
              </option>
            </select>
          </div>
        </div>

        {/* PROPERTY TYPE */}
        <div
          className="
          flex
          items-center
          gap-2
          border-r
          border-gray-500
          pr-5
          "
        >
          <FiHome className="text-xl" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-300">
              Property Type
            </span>

            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="
              bg-transparent
              outline-none
              text-white
              "
            >
              <option className="text-black" value="">
                Select
              </option>

              <option className="text-black" value="1">
                Villa
              </option>

              <option className="text-black" value="2">
                Duplex
              </option>

              <option className="text-black" value="3">
                Detached
              </option>
            </select>
          </div>
        </div>

        {/* BUDGET */}
        <div
          className="
          flex
          items-center
          gap-2
          border-r
          border-gray-500
          pr-5
          "
        >
          <TbCurrencyNaira className="text-xl" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-300">
              Budget
            </span>

            <select
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="
              bg-transparent
              outline-none
              text-white
              "
            >
              <option className="text-black" value="">
                Select
              </option>

              <option
                className="text-black"
                value="100000000"
              >
                ₦0 - ₦100M
              </option>

              <option
                className="text-black"
                value="200000000"
              >
                ₦100M - ₦200M
              </option>
            </select>
          </div>
        </div>

        {/* FILTERS */}
        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <TbAdjustmentsHorizontal className="text-xl" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-300">
              Features
            </span>

            <select
              name="search"
              value={filters.search}
              onChange={handleChange}
              className="
              bg-transparent
              outline-none
              text-white
              "
            >
              <option className="text-black" value="">
                Select
              </option>

              <option
                className="text-black"
                value="Mountain View"
              >
                Mountain View
              </option>

              <option
                className="text-black"
                value="Swimming Pool"
              >
                Swimming Pool
              </option>
            </select>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          className="
          flex
          items-center
          justify-center
          bg-[#EF6700]
          hover:bg-[#d95c00]
          transition
          duration-300
          w-14
          h-14
          rounded-xl
          "
        >
          <IoSearchOutline className="text-2xl" />
        </button>
      </div>
    </form>
              {/* Buy/Rent Desktop ended */}
              
        </div>
        {/* Search started */}
        {/* <div className='absolute top-153 left-280 hidden md:block w-50 bg-[#EF6700C9] rounded-lg'>
          
        </div> */}
        {/* Search ended */}
          {/* Buy/Rent Mobile started */}
            <div className='md:hidden top-100 mt-5'>
                <Link to='/' className='ms-10'>BUY</Link>
                <Link to='/' className='ms-2'>RENT</Link>
                <div className=' mt-5 mx-5'>
                <div className='flex justify-evenly'>
                  <div className='flex justify-center md:bg-[#223B7E99]  p-2 w-40'> <p className='mt-1 me-2'><IoLocationOutline /></p>  <p>Location </p><p className='mt-1 ms-5'><IoChevronDownSharp /></p></div>
                  <div className='flex justify-center md:bg-[#223B7E99]  p-2 w-80 '> <p className='mt-1 '><FiHome /></p>  <p>Property Type </p><p className='mt-1 ms-8'><IoChevronDownSharp /></p></div>
                </div>
                <div className='flex justify-center'>
                  <div className='flex justify-center md:bg-[#223B7E99]  p-2 w-40'> <p className='mt-1'><TbCurrencyNaira  /></p>  <p>Budget </p><p className='mt-1 ms-5'><IoChevronDownSharp /></p></div>
                  <div className='flex justify-center md:bg-[#223B7E99]  p-2 w-70'> <p className='mt-1 me-3'><TbAdjustmentsHorizontal  /></p>  <p>Target Filters </p><p className='mt-1 ms-5'><IoChevronDownSharp /></p></div>
                </div>
                </div>
              </div>
              {/* Buy/Rent Mobile ended */}
              {/* Search for mobile started */}
              <div className='md:hidden bg-[#EF6700C9] rounded-lg mx-15 my-10'>
          <div className="flex justify-center p-2">
                            <IoSearchOutline className='text-white size-5' />
                           <form><input type="search" className='w-40 placeholder:ps-10 placeholder:text-xl placeholder:text-white' placeholder='search' /></form>
          </div>
        </div>
              {/* Search for mobile ended */}
        </div>
  )
}

export default HomeAnimation