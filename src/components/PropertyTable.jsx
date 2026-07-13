import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProperty,
  fetchProperties,
} from "../features/properties/propertySlice";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { deleteProduct } from "../features/products/productSlice";

const PropertyTable = () => {
  const dispatch = useDispatch();
  const { properties, propStatus, propError } = useSelector(
    (state) => state.properties,
  );
  useEffect(() => {
    if (propStatus === "idle") {
      dispatch(fetchProperties());
    }
  }, [dispatch, propStatus]);
  console.log(properties);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProperty(id));
    }
  };
  return (
    <div>
      <p className="text-2xl font-bold text-center my-5">Property Table</p>
      <Link
        to={"/dashboard/property-form"}
        className="text-lg bg-[#00236F] text-white p-3 my-10 rounded-lg"
      >
        Add New
      </Link>
      <table className="min-w-full border border-gray-200 mt-5 rounded-lg">
        <thead className="bg-[#9B9B9BCC] rounded-lg">
          <tr className="rounded-lg">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              <input type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              PROPERTY TYPE
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              PROPERTY ADDRESS
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              PROPERTY OWNER EMAIL
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              ESTATE NAME
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y bg-[#F5F5F5] divide-gray-200">
          {properties?.map((property) => (
            <tr className="hover:bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.type}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.address}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.owner_email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {property.estate_name}
              </td>

              <td className="px-6 py-4 text-sm">
                <Link
                  className="text-omaOrange me-5"
                  to={`/dashboard/edit-property/${property.id}`}
                >
                  <FaEdit />
                </Link>{" "}
                |
                <button
                  onClick={() => handleDelete(property.id)}
                  className="text-red-500 ms-5 mb-2"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
