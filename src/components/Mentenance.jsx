import React, { useState } from "react";
import uploadIcon from "../assets/vectors/upload.png";
import ActivityReqHistory from "./ActivityReqHistory";

const Mentenance = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white px-3 sm:px-6 py-5 overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-lg sm:text-2xl font-bold">Maintenance Requests</h1>

        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Submit and track maintenance requests for your property
        </p>
      </div>

      {/* ================= LAYOUT ================= */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
        {/* ================= FORM ================= */}
        <form className="w-full bg-[#F5F5F5] rounded-xl p-4 sm:p-6">
          <h2 className="text-base sm:text-xl font-bold">
            Submit a New Request
          </h2>

          <p className="text-gray-500 text-sm mt-2 mb-5 sm:mb-6">
            Please provide as much detail as possible.
          </p>

          {/* CATEGORY */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Category / Type of issue
            </label>

            <select className="w-full p-3 rounded-lg border text-sm focus:ring-2 focus:ring-[#00236F]">
              <option>Select an issue type</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Security</option>
              <option>Cleaning</option>
            </select>
          </div>

          {/* SUBJECT */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Subject</label>

            <input
              type="text"
              placeholder="e.g. leaky faucet in kitchen"
              className="w-full p-3 rounded-lg border text-sm focus:ring-2 focus:ring-[#00236F]"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>

            <textarea
              className="w-full p-3 rounded-lg border text-sm h-28 sm:h-32 resize-none focus:ring-2 focus:ring-[#00236F]"
              placeholder="Describe the issue..."
            />
          </div>

          {/* UPLOAD */}
          <div className="mb-5">
            <p className="text-sm font-medium mb-2">
              Attach media (Photo / Video)
            </p>

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

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#FF6700C9] text-[#223B7E] font-bold py-3 rounded-lg hover:opacity-90 transition"
          >
            Submit Request
          </button>
        </form>

        {/* ================= HISTORY ================= */}
        <div className="w-full overflow-hidden">
          <ActivityReqHistory />
        </div>
      </div>
    </div>
  );
};

export default Mentenance;
