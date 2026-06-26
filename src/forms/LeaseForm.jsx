import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LeaseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    type: "",
    size: "",
    description: "",
    address: "",
    rent_amount: "",
    service_charge: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    // dispatch(addCategory(categoryData));
  };
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="my-5 mx-auto size-30" />

            <p className="text-center text-2xl font-semibold text-[#1B2B3F]">
              Lease Application Form
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Property Type */}
            <input
              type="text"
              name="type"
              placeholder="Occupation"
              value={data.type}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Size */}
            <input
              name="size"
              type="text"
              placeholder="Move-in Date"
              value={data.size}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Address */}
            <input
              name="address"
              type="text"
              placeholder="Duration"
              value={data.address}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* {propError && (
                    <p className="text-red-500">{propError}</p>
                  )}
      
                  {propStatus==='succeeded' && (
                    <p className="text-green-500">Property Created Successfully!</p>
                  )} */}

            {/* Submit */}
            <button
              type="submit"
              // disabled={propStatus === "loading"}
              className="w-full bg-[#1B2B3F] text-white py-2 rounded hover:bg-blue-700"
            >
              {/* {propStatus === "loading"
                      ? "Creating..."
                      : "Create Property"} */}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaseForm;
