import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline, IoWaterOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { PiRectangleDashedLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProperties,
  updateProperty,
} from "../features/properties/propertySlice";

const AllProperties = () => {
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
  // Back function
  const back = () => {
    navigate(-1);
  };

  const handleUpdateStatus = (id, formData) => {
    if (window.confirm(`Are you sure you want to ${formData} this request?`)) {
      console.log(formData);
      dispatch(updateProperty({ id, formData }));
    }
  };
  console.log(properties);
  return (
    <div>
      {/* Back Buttom */}
      <button
        onClick={back}
        className="flex justify-between bg-[#1B2B3F] text-white p-3 rounded-lg"
      >
        {" "}
        <IoMdArrowRoundBack className="size-7" />{" "}
        <span className="ms-2 font-bold">Back</span>
      </button>
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-[#9B9B9BCC] rounded-lg">
          <tr className="rounded-lg">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              <input type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              ADDRESS
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              ESTATE
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              OWNER
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              OWNER'S PHONE
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              STATUS
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              UPDATE
            </th>
          </tr>
        </thead>
        <tbody className="divide-y bg-[#F5F5F5] divide-gray-200">
          {properties?.map((property) => (
            <tr className="hover:bg-gray-50 key={property.id}">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.address}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.estate_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.owner_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.owner_phone}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    property.status === "AVAILABLE"
                      ? "bg-green-100 text-green-700"
                      : property.status === "OCCUPIED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {property.status || "Pending"}
                </span>
              </td>

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => handleUpdateStatus(property.id, "OCCUPIED")}
                  className="rounded-md bg-omaOrange px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  Occupy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProperties;
