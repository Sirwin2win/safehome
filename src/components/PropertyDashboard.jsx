import React from "react";
import BarCharts from "./BarCharts";
import DoughnutCharts from "./DoughnutCharts";

const PropertyDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* LEFT SECTION */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Property Dashboard</h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-7">
              View everything about your property in one place—from property
              details and billing records to payment history, prepaid meter
              information, energy purchases, consumption reports, and more.
            </p>
          </div>

          <div className="bg-[#9979C3] p-4 sm:p-6">
            {/* Doughnut Card */}
            <div className="bg-white rounded-xl p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-xl font-bold">Electricity - EKDC</h3>

                <select className="rounded-full bg-[#223B7E99] text-white px-4 py-2 outline-none">
                  <option>Last 30 days</option>
                  <option>Last 20 days</option>
                  <option>Last 10 days</option>
                </select>
              </div>

              <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="w-full max-w-xs">
                  <DoughnutCharts />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-gray-500">Available to purchase</p>
                    <h3 className="text-xl font-bold">₦1,987,345.00</h3>
                  </div>

                  <div>
                    <p className="text-gray-500">Energy Consumed</p>
                    <h3 className="text-xl font-bold">₦1,987,345.00</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-[#FFFFD2] rounded-xl mt-6 p-5">
              <div className="flex justify-end">
                <select className="rounded-full bg-[#223B7E99] text-white px-4 py-2 outline-none">
                  <option>Last 30 days</option>
                  <option>Last 20 days</option>
                  <option>Last 10 days</option>
                </select>
              </div>

              <div className="h-72 mt-4">
                <BarCharts />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Smart Utility Vending</h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-7">
              Automate utility vending, purchase prepaid energy meters, access
              power purchase and consumption reports. Our platform works with
              any STS-compliant meter such as Conlog, Momas, Hexing and Miraton
              Rose.
            </p>
          </div>

          <div className="bg-[#9979C3] p-4 sm:p-6">
            <div className="bg-white rounded-xl p-5">
              <form className="space-y-5">
                <fieldset className="border rounded-lg p-3">
                  <legend className="px-2 text-sm">Select Issues</legend>

                  <select className="w-full outline-none">
                    <option>Select issue</option>
                  </select>
                </fieldset>

                <fieldset className="border rounded-lg p-3">
                  <legend className="px-2 text-sm">Subject</legend>

                  <input type="text" className="w-full outline-none" />
                </fieldset>

                <fieldset className="border rounded-lg p-3">
                  <legend className="px-2 text-sm">Description</legend>

                  <textarea
                    rows={8}
                    className="w-full outline-none resize-none"
                  />
                </fieldset>

                <button className="w-full bg-[#223B7E] text-white py-3 rounded-lg font-semibold hover:bg-[#1b3167] transition">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDashboard;
