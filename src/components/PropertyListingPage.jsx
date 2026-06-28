import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline, IoWaterOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { PiRectangleDashedLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../features/properties/propertySlice";

const PropertyListingPage = () => {
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
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-5 gap-6">
        {properties.map((property) => (
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
  );
};

export default PropertyListingPage;
