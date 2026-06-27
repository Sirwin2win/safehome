import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdWarningAmber } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";
import { PiUsersBold } from "react-icons/pi";
import { AiOutlineSound, AiOutlineDollar } from "react-icons/ai";
import { TbDots, TbClipboardText } from "react-icons/tb";

import pix from "../assets/images/safehome_profile.jpg";

const EstateManager = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* ================= HEADER BAR ================= */}
        <div className="bg-white border rounded-xl shadow-sm p-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center min-w-0">
            {/* SEARCH */}
            <div className="min-w-0">
              <div className="relative w-full">
                <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                <input
                  type="search"
                  placeholder="Search operations..."
                  className="w-full bg-gray-100 rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#00236F]"
                />
              </div>
            </div>

            {/* USER */}
            <div className="flex items-center justify-end gap-4 min-w-0">
              <button className="relative">
                <FaRegBell className="text-2xl text-gray-700" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <img
                src={pix}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= TITLE + ACTIONS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-start">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#00236F]">
              Estate Operations
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Real-time status of SafeHome administrative hub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="bg-gray-200 rounded-lg px-4 py-3 flex items-center justify-center gap-2">
              <AiOutlineSound />
              Send Announcement
            </button>

            <button className="bg-[#00236F] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2">
              <TbClipboardText />
              Assign Maintenance
            </button>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            icon={<PiUsersBold />}
            title="Total Residents"
            value="450"
          />
          <StatCard
            icon={<MdWarningAmber />}
            title="Open Complaints"
            value="8"
          />
          <StatCard
            icon={<GiSpanner />}
            title="Pending Maintenance"
            value="12"
          />
          <StatCard
            icon={<AiOutlineDollar />}
            title="Monthly Revenue"
            value="$85k"
          />
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 min-w-0">
          {/* LEFT */}
          <div className="xl:col-span-2 space-y-4 min-w-0">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Complaint Management</h2>
              <button className="text-[#00236F] font-semibold">View All</button>
            </div>

            {/* KANBAN (PRODUCTION SAFE) */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory xl:grid xl:grid-cols-3 xl:overflow-visible">
              {["NEW", "IN REVIEW", "RESOLVED"].map((col, i) => (
                <div
                  key={col}
                  className="snap-start flex-shrink-0 w-[85%] sm:w-[300px] xl:w-auto bg-[#F2F4F6] rounded-xl p-4"
                >
                  <div className="flex justify-between mb-3">
                    <p className="text-xs font-semibold text-gray-500">{col}</p>
                    <TbDots />
                  </div>

                  <div className="bg-white border rounded-lg p-3">
                    <h3 className="font-semibold text-sm">
                      {i === 0
                        ? "Elevator Fault"
                        : i === 1
                          ? "Leakage Issue"
                          : "Gym AC Fixed"}
                    </h3>

                    <div className="flex justify-between text-xs mt-3 text-gray-500">
                      <span>{i === 2 ? "Yesterday" : "Active"}</span>

                      {i === 2 && (
                        <IoIosCheckmarkCircleOutline className="text-green-600 text-lg" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white border rounded-xl shadow-sm p-5 min-w-0">
            <h2 className="text-lg font-bold mb-4">Revenue Collection</h2>

            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">MTD Goal</p>
                <p className="font-bold">$92,000</p>
              </div>

              <div className="text-right">
                <p className="text-gray-500">Current</p>
                <p className="font-bold text-green-600">$85,400</p>
              </div>
            </div>

            <div className="flex justify-center my-8">
              <div className="w-32 h-32 rounded-full border-[10px] border-[#00236F] flex flex-col items-center justify-center">
                <span className="text-xl font-bold">92%</span>
                <span className="text-xs text-gray-500">COLLECTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-gray-50">
            <h2 className="font-bold">Maintenance Operations</h2>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="p-4 text-left">TASK</th>
                  <th className="p-4 text-left">ASSIGNED</th>
                  <th className="p-4 text-left">PRIORITY</th>
                  <th className="p-4 text-left">STATUS</th>
                  <th className="p-4 text-left">DUE</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t hover:bg-gray-50">
                  <td className="p-4">Repair Gate</td>
                  <td className="p-4">John Peters</td>
                  <td className="p-4 text-red-600">High</td>
                  <td className="p-4 text-yellow-600">In Progress</td>
                  <td className="p-4">Today</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= SMALL COMPONENT ================= */
const StatCard = ({ icon, title, value }) => (
  <div className="bg-white border rounded-xl shadow-sm p-5 min-w-0">
    <div className="text-xl">{icon}</div>
    <p className="text-xs text-gray-500 uppercase mt-4">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

export default EstateManager;
