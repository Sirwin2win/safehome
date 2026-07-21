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
import { fetchProperties } from "../features/properties/propertySlice";

const Home = () => {
  //initialization
  const dispatch = useDispatch();
  const { properties, propStatus, propError } = useSelector(
    (state) => state.properties,
  );

  useEffect(() => {
    if (propStatus === "idle") {
      dispatch(fetchProperties());
    }
  }, [propStatus, dispatch]);
  console.log(properties);
  // RETURNS SHOULD COME AFTER HOOKS

  if (propStatus === "loading") {
    return <p>Loading properties...</p>;
  }

  if (propStatus === "failed") {
    return <p>Error: {propError}</p>;
  }
  return (
    <div>
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
