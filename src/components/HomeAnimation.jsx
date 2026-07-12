import React, { useEffect } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { TbCurrencyNaira, TbAdjustmentsHorizontal } from "react-icons/tb";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchPropertyFilters,
  fetchProperties,
  setFilter,
} from "../features/properties/propertySlice";

const HomeAnimation = () => {
  const dispatch = useDispatch();

  const { filterOptions, filters } = useSelector((state) => state.properties);

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

  return (
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

        <form className="absolute hidden md:block text-white top-100 -ms-7">
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
                onChange={(e) => handleFilterChange("address", e.target.value)}
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
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
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
              className="w-40 placeholder:ps-10 placeholder:text-xl placeholder:text-white"
              placeholder="search"
            />

            <button type="button" onClick={applyFilters} className="hidden">
              Search
            </button>
          </div>
        </form>
      </div>

      {/* MOBILE SEARCH */}

      <div className="md:hidden bg-[#EF6700C9] rounded-lg mx-15 my-10">
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
      </div>
    </div>
  );
};

export default HomeAnimation;
