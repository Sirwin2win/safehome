import React, { useEffect, useState } from "react";
import uploadIcon from "../assets/vectors/upload.png";
import ActivityReqHistory from "./ActivityReqHistory";
import { useDispatch, useSelector } from "react-redux";
import { addMaintenance } from "../features/maintenance/maintenanceSlice";
import { fetchMyLeases } from "../features/lease/leaseSlice";
import { fetchMyMaintenanceAPI } from "../features/maintenance/maintenanceApi";

const Mentenance = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [selectedLease, setSelectedLease] = useState(null);

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    priority: "",
    description: "",
  });

  const { myLease, leStatus } = useSelector((state) => state.leases);

  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchMyLeases());
    }
  }, [leStatus, dispatch]);

  useEffect(() => {
    if (myLease?.length > 0 && !selectedLease) {
      setSelectedLease(myLease[0]);
    }
  }, [myLease, selectedLease]);

  const handleLeaseChange = (e) => {
    const lease = myLease.find(
      (item) => item.property_address === e.target.value,
    );

    setSelectedLease(lease);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      estate_id: selectedLease?.estate_id,
      property_id: selectedLease?.property_id,
      category: formData.category,
      title: formData.title,
      priority: formData.priority,
      description: formData.description,
      image,
    };

    // console.log(payload);

    dispatch(addMaintenance(payload));
  };

  return (
    <div className="min-h-screen w-full bg-white px-3 sm:px-6 py-5 overflow-x-hidden">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-lg sm:text-2xl font-bold">Maintenance Requests</h1>

        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Submit and track maintenance requests for your property
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-[#F5F5F5] rounded-xl p-4 sm:p-6"
        >
          <h2 className="text-base sm:text-xl font-bold">
            Submit a New Request
          </h2>

          <p className="text-gray-500 text-sm mt-2 mb-5 sm:mb-6">
            Please provide as much detail as possible.
          </p>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Select your Address
            </label>

            <select
              value={selectedLease?.property_address || ""}
              onChange={handleLeaseChange}
              className="w-full p-3 rounded-lg border text-sm focus:ring-2 focus:ring-[#00236F]"
            >
              {myLease?.map((lease) => (
                <option key={lease.id} value={lease.property_address}>
                  {lease.property_address}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Category / Type of issue
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-sm focus:ring-2 focus:ring-[#00236F]"
            >
              <option value="">Select an issue type</option>
              <option value="PLUMBING">Plumbing</option>
              <option value="ELECTRICAL">Electrical</option>
              <option value="SECURITY">Security</option>
              <option value="CLEANING">Cleaning</option>
            </select>
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Leaky faucet in kitchen"
              className="w-full p-3 rounded-lg border text-sm focus:ring-2 focus:ring-[#00236F]"
            />
          </div>

          {/* Priority */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Priority</label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-sm focus:ring-2 focus:ring-[#00236F]"
            >
              <option value="">Select priority</option>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-sm h-28 sm:h-32 resize-none focus:ring-2 focus:ring-[#00236F]"
              placeholder="Describe the issue..."
            />
          </div>

          {/* Upload */}
          <div className="mb-5">
            <p className="text-sm font-medium mb-2">Attach media</p>

            <label
              htmlFor="image"
              className="block border border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer bg-white hover:bg-gray-50 transition"
            >
              <img
                src={image ? URL.createObjectURL(image) : uploadIcon}
                alt="upload"
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto object-contain"
              />

              <p className="text-blue-600 text-sm mt-2">Tap to upload</p>

              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </label>

            <input
              id="image"
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6700C9] text-[#223B7E] font-bold py-3 rounded-lg hover:opacity-90 transition"
          >
            Submit Request
          </button>
        </form>

        <div className="w-full overflow-hidden">
          <ActivityReqHistory />
        </div>
      </div>
    </div>
  );
};

export default Mentenance;
