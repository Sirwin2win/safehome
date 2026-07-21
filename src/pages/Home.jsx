import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoLocationOutline,
  IoWaterOutline,
  IoChevronDownSharp,
  IoSearchOutline,
} from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { PiRectangleDashedLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import background from "../assets/vectors/background.jpg";
import house_key from "../assets/vectors/key.png";
import key2 from "../assets/vectors/key2.png";
import { FiHome } from "react-icons/fi";
import { TbCurrencyNaira, TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import HomeCard1 from "../components/HomeCard1";
import HomeCard2 from "../components/HomeCard2";
import HomeCard3 from "../components/HomeCard3";
import HomeCard4 from "../components/HomeCard4";
import HomePhoneCard from "../components/HomePhoneCard";
import LatestProperties from "../components/LatestProperties";
import PropertyCard from "../components/PropertyCard";
import PropertyListingPage from "../components/PropertyListingPage";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import HomeLastCard from "../components/HomeLastCard";
import ContactCard from "../components/ContactCard";
import HomeAnimation from "../components/HomeAnimation";
import TestSlider from "../components/TestSlider";
import Accordion from "../components/Accordion";
import {
  fetchProperties,
  fetchPropertyFilters,
  setFilter,
} from "../features/properties/propertySlice";

const Home = () => {
  //initialization
  const dispatch = useDispatch();
  const { properties, filterOptions, filters, propStatus, propError } =
    useSelector((state) => state.properties);

  useEffect(() => {
    if (propStatus === "idle") {
      dispatch(fetchProperties());
    }
  }, [propStatus, dispatch]);
  console.log(properties);
  useEffect(() => {
    dispatch(fetchPropertyFilters());
  }, [dispatch]);

  const handleFilterChange = (key, value) => {
    dispatch(
      setFilter({
        key,
        value,
      }),
    );
  };

  const applyFilters = () => {
    dispatch(fetchProperties());
  };
  // RETURNS SHOULD COME AFTER HOOKS

  if (propStatus === "loading") {
    return <p>Loading properties...</p>;
  }

  if (propStatus === "failed") {
    return <p>Error: {propError}</p>;
  }
  return (
    <div>
      {/* HomeAnimation Started */}
      <div className="static">
        <div className="hero h-200 bg-cover w-full"></div>

        <div className="absolute text-white bottom-100 ms-5 top-30 px-5">
          <p className="text-3xl text-white">
            All-in-one real estate and
            <span className="block">property management software</span>
            <span className="block">for Landlords</span>
          </p>

          <button className="flex justify-evenly bg-[#EF6700C9] my-5 p-2 rounded-lg">
            <Link to="/listings">EXPLORE NOW</Link>

            <MdOutlineArrowRightAlt className="text-white mt-1 ms-2" />
          </button>

          <p className="text-white md:text-lg">
            Discover a lifestyle where elegance meets comfort, blending
            <span className="block">
              timeless design with modern sophistication
            </span>
          </p>

          {/* FILTER SECTION */}

          <div className="absolute hidden md:block text-white top-100 -ms-7">
            <Link to="/" className="text-[#C8C8C8]">
              BUY
            </Link>

            <Link to="/" className="text-[#C8C8C8] ms-2">
              RENT
            </Link>

            <div className="flex justify-evenly mt-5">
              {/* LOCATION */}

              <div className="flex justify-evenly bg-[#223B7E99] text-white p-2 w-80 mx-5">
                <IoLocationOutline />

                <span>Location</span>

                <select
                  className="bg-[#223B7E99]"
                  value={filters.address}
                  onChange={(e) =>
                    handleFilterChange("address", e.target.value)
                  }
                >
                  <option value="">Select</option>

                  {filterOptions.locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* TYPE */}

              <div className="flex justify-evenly bg-[#223B7E99] text-white p-2 w-80">
                <FiHome />

                <span>Property Type</span>

                <select
                  className="bg-[#223B7E99]"
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                >
                  <option value="">Select</option>

                  {filterOptions.types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* PRICE */}

              <div className="flex justify-evenly bg-[#223B7E99] text-white p-2 w-80 mx-5">
                <TbCurrencyNaira />

                <span>Budget</span>

                <select
                  className="bg-[#223B7E99]"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    handleFilterChange("maxPrice", e.target.value)
                  }
                >
                  <option value="">Select</option>

                  <option value={filterOptions.priceRange.maxPrice}>
                    Up to ₦
                    {Number(filterOptions.priceRange.maxPrice).toLocaleString()}
                  </option>
                </select>
              </div>

              {/* STATUS */}

              <div className="flex justify-evenly bg-[#223B7E99] text-white p-2 w-78">
                <TbAdjustmentsHorizontal />

                <span>Status</span>

                <select
                  className="bg-[#223B7E99]"
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                >
                  <option value="">Select</option>

                  {filterOptions.statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* SEARCH */}

            <div className="flex justify-between relative p-2 left-280 top-2 hidden md:block w-50 h-10 bg-[#EF6700C9] rounded-lg">
              <IoSearchOutline className="text-white size-5 absolute" />

              <input
                type="search"
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyFilters();
                  }
                }}
                className="w-40 placeholder:ps-10 placeholder:text-xl placeholder:text-white"
                placeholder="search"
              />

              <button
                type="button"
                onClick={applyFilters}
                className="text-white ml-2"
              ></button>
            </div>
          </div>
        </div>

        {/* MOBILE SEARCH */}

        {/* <div className="hidden md:block bg-[#EF6700C9] rounded-lg mx-15 my-10">
          <div className="flex justify-center p-2">
            <IoSearchOutline className="text-white size-5" />

            <input
              type="search"
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  applyFilters();
                }
              }}
              className="w-40 placeholder:ps-10 placeholder:text-xl placeholder:text-white"
              placeholder="search"
            />
          </div>
        </div> */}
        {/* Buy/Rent Mobile */}
        <div className="md:hidden mt-6 px-4">
          <div className="flex gap-4 mb-4">
            <Link to="/" className="text-gray-700 font-semibold">
              BUY
            </Link>

            <Link to="/" className="text-gray-700 font-semibold">
              RENT
            </Link>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-3">
            {/* Location */}
            <div className="flex items-center rounded-lg px-3 py-2">
              <IoLocationOutline className="mr-2" />

              <select
                className="bg-transparent w-full outline-none text-sm"
                value={filters.address}
                onChange={(e) => handleFilterChange("address", e.target.value)}
              >
                <option value="">Location</option>

                {filterOptions.locations.map((location) => (
                  <option
                    key={location}
                    value={location}
                    className="text-black"
                  >
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="flex items-center rounded-lg px-3 py-2">
              <FiHome className="mr-2" />

              <select
                className="bg-transparent w-full outline-none text-sm"
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
              >
                <option value="">Property Type</option>

                {filterOptions.types.map((type) => (
                  <option key={type} value={type} className="text-black">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="flex items-center rounded-lg px-3 py-2">
              <TbCurrencyNaira className="mr-2" />

              <select
                className="bg-transparent w-full outline-none text-sm"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              >
                <option value="">Budget</option>

                <option
                  value={filterOptions.priceRange.maxPrice}
                  className="text-black"
                >
                  Up to ₦
                  {Number(filterOptions.priceRange.maxPrice).toLocaleString()}
                </option>
              </select>
            </div>

            {/* Status */}
            <div className="flex items-center rounded-lg px-3 py-2">
              <TbAdjustmentsHorizontal className="mr-2" />

              <select
                className="bg-transparent w-full outline-none text-sm"
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
              >
                <option value="">Status</option>

                {filterOptions.statuses.map((status) => (
                  <option key={status} value={status} className="text-black">
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search */}
          <div className="bg-[#EF6700C9] rounded-lg mt-5">
            <div className="flex items-center px-3 py-2">
              <IoSearchOutline className="text-white mr-2 text-xl" />

              <input
                type="search"
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyFilters();
                  }
                }}
                className="flex-1 bg-transparent outline-none placeholder:text-white text-white"
                placeholder="Search properties..."
              />

              <button
                type="button"
                onClick={applyFilters}
                className="ml-2  px-3 py-1 rounded-md text-sm font-medium"
              ></button>
            </div>
          </div>
        </div>
      </div>
      {/* HomeAnimation Ended */}
      {/* <HomeAnimation /> */}

      <button className="flex justify-evenly bg-[#223B7E99] hidden md:block p-2 rounded-full mx-auto my-10 font-[600]">
        <BsStars className="me-2 size-8" /> Discover our key features
      </button>
      <div className="mb-5 hidden md:block">
        <p className="text-center font-bold text-2xl my-5">
          Simplifying Living Experiences Across the World
        </p>
        <p className="text-center">
          SafeHomes helps residents, admins, and security personnel stay
          connected and in
          <span className="block">
            control is the ultimate digital solution for managing modern
            residential estates and{" "}
          </span>
          <span className="block">
            gated communities. Whether you're a resident, admin, or security
            guard, SafeHomes
          </span>
          <span className="block">
            brings simplicity, transparency, and security to everyday living —
            all in one place
          </span>
        </p>
      </div>

      <HomeCard1 />
      <HomeCard2 />
      <HomeCard3 />
      <HomeCard4 />
      {/* Join he best button  */}
      <button className="bg-[#223B7E99] px-4 py-2 hidden md:block rounded-full block text-xl font-[500] mx-auto my-10">
        Join the best!
      </button>
      <p className="text-center font-[700] md:text-6xl my-10">
        Start Living Smarter Today
      </p>
      <button className="bg-[#223B7E99] px-4 md:hidden py-2 rounded-full block text-xl font-[500] mx-auto my-10">
        Join the best!
      </button>
      <br />
      <HomePhoneCard />
      {/* Property Listing Started */}
      <p className="text-center text-3xl font-bold my-5">
        Explore Our Latest Properties
      </p>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-5 gap-6">
          {properties?.map((property) => (
            <div
              className="mx-auto mt-5 w-90 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
              key={property.id}
            >
              <div className="p-5">
                <img
                  className="h-60 w-full object-cover rounded-t-lg"
                  src={`https://api.safehomeproperties.com/uploads/${property.image}`}
                  alt={property.title}
                />
              </div>
              <div className="flex justify-center">
                <IoLocationOutline className="text-[#C8C8C8]" size={30} />{" "}
                <p className="ms-3 text-[#C8C8C8]">{property.address}</p>
              </div>

              <div className="p-4">
                <div className="flex justify-evenly">
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    {property.type}
                  </h2>
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    ₦{property.rent_amount}
                  </p>
                </div>
                <div className="flex justify-evenly my-4">
                  <div className="flex justify-evenly">
                    <FaBed className="text-[#C8C8C8] size-5" />{" "}
                    <p className="text-[#C8C8C8] ms-3"> {property.bedrooms}</p>
                  </div>
                  <div className="flex justify-evenly">
                    <IoWaterOutline className="text-[#C8C8C8] size-5" />{" "}
                    <p className="text-[#C8C8C8] ms-3">
                      {property.bathrooms}
                    </p>{" "}
                  </div>
                  <div className="flex justify-evenly">
                    <PiRectangleDashedLight className="text-[#C8C8C8] size-5" />{" "}
                    <p className="text-[#C8C8C8] ms-3">{property.size} sqft</p>
                  </div>
                  <Link
                    to={`/detail/${property.id}`}
                    className="text-blue-500 underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <p className='text-center'>No propertys found</p> */}
        </div>
      </div>
      {/* Property Listing Ended */}
      {/* <LatestProperties /> */}
      {/* <PropertyCard /> */}
      {/* <PropertyListingPage /> */}
      {/* <Testimonials /> */}
      <TestSlider />
      <FAQ />
      <HomeLastCard />
      <ContactCard />
    </div>
  );
};

export default Home;
