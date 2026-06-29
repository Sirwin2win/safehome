import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

import { fetchProperty } from "../features/properties/propertySlice";
import { addLease } from "../features/lease/leaseSlice";

const LeaseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { currentProperty, propStatus } = useSelector(
    (state) => state.properties,
  );

  const { leStatus } = useSelector((state) => state.leases);

  const [data, setData] = useState({
    occupation: "",
    moveIn_date: "",
    duration: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchProperty(id));
    }
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentProperty) return;

    const form = {
      occupation: data.occupation,
      moveIn_date: data.moveIn_date,
      duration: data.duration,
      property_id: currentProperty.id,
      rent_amount: currentProperty.rent_amount,
    };

    try {
      console.log(form);
      await dispatch(addLease(form)).unwrap();

      // Reset form
      setData({
        occupation: "",
        moveIn_date: "",
        duration: "",
      });

      // Redirect after successful submission
      // navigate("/leases");
      return <p>Lease created!!!</p>;
    } catch (error) {
      console.error("Failed to submit lease:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto w-24 h-24 object-cover rounded-full mb-4"
            />

            <h2 className="text-2xl font-semibold text-[#1B2B3F]">
              Lease Application Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Occupation */}
            <div>
              <label
                htmlFor="occupation"
                className="block mb-2 text-sm font-medium"
              >
                Occupation
              </label>

              <input
                id="occupation"
                name="occupation"
                type="text"
                placeholder="Occupation"
                value={data.occupation}
                onChange={handleChange}
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
                required
              />
            </div>

            {/* Move In Date */}
            <div>
              <label
                htmlFor="moveIn_date"
                className="block mb-2 text-sm font-medium"
              >
                Move In Date
              </label>

              <input
                id="moveIn_date"
                name="moveIn_date"
                type="date"
                value={data.moveIn_date}
                onChange={handleChange}
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium"
              >
                Duration
              </label>

              <input
                id="duration"
                name="duration"
                type="text"
                placeholder="e.g. 12 Months"
                value={data.duration}
                onChange={handleChange}
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B3F]"
                required
              />
            </div>

            {/* Property Details */}
            {currentProperty && (
              <div className="bg-gray-100 rounded p-4">
                <p>
                  <strong>Property:</strong>{" "}
                  {currentProperty.title || currentProperty.name}
                </p>

                <p>
                  <strong>Rent:</strong> ₦
                  {Number(currentProperty.rent_amount).toLocaleString()}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={leStatus === "loading" || propStatus === "loading"}
              className="w-full bg-[#1B2B3F] text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {leStatus === "loading" ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaseForm;
