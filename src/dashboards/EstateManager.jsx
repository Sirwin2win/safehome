import React, { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdWarningAmber } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";
import { PiUsersBold } from "react-icons/pi";
import { AiOutlineSound, AiOutlineDollar } from "react-icons/ai";
import { TbDots, TbClipboardText } from "react-icons/tb";
import pix from "../assets/images/safehome_profile.jpg";
import { fetchMyEstateMaintenance } from "../features/maintenance/maintenanceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EstateManager = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { myEstateMaintenance, mainStatus } = useSelector(
    (state) => state.maintenance,
  );
  // dispatch to store
  useEffect(() => {
    if (mainStatus === "idle") {
      dispatch(fetchMyEstateMaintenance());
    }
  }, [dispatch, mainStatus]);

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
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto my-10">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                   REQUEST ID
                 </th> */}
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      DATE
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      CATEGORY
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      TENANT NAME
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      ESTATE NAME
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      HOUSE ADDRESS
                    </th>
                    {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                   STATUS
                 </th> */}
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      STATUS
                    </th>
                    {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      RESOLVE
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      IN PROGRESS
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                      DELETE
                    </th> */}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {myEstateMaintenance?.map((maint) => (
                    <tr key={maint.id} className="hover:bg-gray-50">
                      {/* <td className="px-6 py-4 text-sm text-gray-700">{maint.id}</td> */}

                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(maint.created_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700">
                        {maint.category}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700">
                        {maint.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700">
                        {maint.estate_name}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700">
                        {maint.address}
                      </td>

                      {/* <td className="px-6 py-4">
                     <span className="inline-block rounded-full bg-[#FFE1CC] px-5 py-2 text-sm text-[#FF6700]">
                       {maint.status}
                     </span>
                   </td> */}
                      {/* Status Badge */}
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            maint.status === "IN PROGRESS"
                              ? "bg-green-100 text-green-700"
                              : maint.status === "RESOLVED"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {maint.status || "Pending"}
                        </span>
                      </td>
                      {/* 
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() =>
                            handleUpdateStatus(maint.id, "RESOLVED")
                          }
                          className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                          Resolve
                        </button>
                      </td> */}

                      {/* <td className="px-4 py-3 text-center">
                        <button
                          onClick={() =>
                            handleUpdateStatus(maint.id, "IN_PROGRESS")
                          }
                          className="rounded-md bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                        >
                          In Progress
                        </button>
                      </td> */}

                      {/* <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleDelete(maint.id)}
                          className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 md:hidden my-5">
              {myEstateMaintenance?.map((maint) => (
                <div
                  key={maint.id}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      REQUEST ID
                    </span>
                    <span className="text-sm text-gray-800">{maint.id}</span>
                  </div>

                  <div className="mt-3 flex justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      DATE
                    </span>
                    <span className="text-sm text-gray-800">
                      {new Date(maint.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      CATEGORY
                    </span>
                    <span className="text-sm text-gray-800">
                      {maint.category}
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      TENANT NAME
                    </span>
                    <span className="text-sm text-gray-800">{maint.name}</span>
                  </div>

                  <div className="mt-3 flex justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      ESTATE NAME
                    </span>
                    <span className="text-sm text-gray-800">
                      {maint.estate_name}
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      HOUSE ADDRESS
                    </span>
                    <span className="text-sm text-gray-800">
                      {maint.address}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-[#FFE1CC] px-5 py-2 text-sm text-[#FF6700]">
                      {maint.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
