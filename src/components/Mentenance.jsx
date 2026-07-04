import React, { useEffect, useState } from "react";
import uploadIcon from "../assets/vectors/upload.png";
import ActivityReqHistory from "./ActivityReqHistory";
import { useDispatch, useSelector } from "react-redux";
import {
  addMaintenance,
  fetchMyMaintenance,
} from "../features/maintenance/maintenanceSlice";
import { fetchMyLeases } from "../features/lease/leaseSlice";

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
  const { myMaintenance, mainStatus } = useSelector(
    (state) => state.maintenance,
  );

  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchMyLeases());
    }
  }, [dispatch, leStatus]);

  useEffect(() => {
    if (mainStatus === "idle") {
      dispatch(fetchMyMaintenance());
    }
  }, [dispatch, mainStatus]);

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

    dispatch(addMaintenance(payload));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Maintenance Requests
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Submit and track maintenance requests for your property.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-[430px_1fr] gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#F5F5F5] rounded-2xl shadow-sm p-5 sm:p-6 lg:p-8"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Submit a New Request
            </h2>

            <p className="text-sm text-gray-500 mt-2 mb-6">
              Please provide as much detail as possible.
            </p>

            {/* Address */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Select your Address
              </label>

              <select
                value={selectedLease?.property_address || ""}
                onChange={handleLeaseChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00236F]"
              >
                {myLease?.map((lease) => (
                  <option key={lease.id} value={lease.property_address}>
                    {lease.property_address}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Category / Type of Issue
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00236F]"
              >
                <option value="">Select an issue type</option>
                <option value="PLUMBING">Plumbing</option>
                <option value="ELECTRICAL">Electrical</option>
                <option value="SECURITY">Security</option>
                <option value="CLEANING">Cleaning</option>
              </select>
            </div>

            {/* Title */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Request Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Leaky faucet in kitchen"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00236F]"
              />
            </div>

            {/* Priority */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">Priority</label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00236F]"
              >
                <option value="">Select Priority</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe the issue..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00236F]"
              />
            </div>

            {/* Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Attach Media
              </label>

              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 sm:p-8 cursor-pointer hover:bg-gray-50 transition"
              >
                <img
                  src={image ? URL.createObjectURL(image) : uploadIcon}
                  alt="upload"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />

                <p className="mt-3 text-sm font-medium text-blue-600">
                  {image ? image.name : "Tap to upload"}
                </p>

                <p className="text-xs text-gray-500 mt-1 text-center">
                  PNG, JPG or GIF (Maximum 10MB)
                </p>
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
              className="w-full rounded-lg bg-[#FF6700C9] py-3.5 text-sm sm:text-base font-semibold text-[#223B7E] transition hover:opacity-90"
            >
              Submit Request
            </button>
          </form>

          {/* History */}
          <div className="min-w-0">
            <ActivityReqHistory myMaintenance={myMaintenance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentenance;
