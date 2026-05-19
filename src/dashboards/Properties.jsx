import React from "react";
import { FaRegBell, FaUserPlus, FaPlus } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineHomeWork } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbCalendarClock } from "react-icons/tb";
import { GiSpanner } from "react-icons/gi";
import { TiClipboard } from "react-icons/ti";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import pix from "../assets/images/safehome_profile.jpg";
import skyline from "../assets/images/safehome_skyline.jpg";

const Properties = () => {
  return (
    <div>
      {/* Search , notification bell and profile flex */}
      <div className="flex justify-between shadow-xl bg-white pb-3 border-b border-gray-300">
        <form>
          <label htmlFor="search" className="relative">
            <input
              type="search"
              id="search"
              className="rounded-full bg-gray-200 placeholder:ps-10 w-50"
              placeholder="Search operations..."
            />
            <IoIosSearch className="absolute bottom-0.5 ms-2" />
          </label>
        </form>
        <div className="flex justify-between">
          <FaRegBell className="size-5" />
          <img src={pix} alt="" className="size-6 rounded-full ms-2" />
        </div>
      </div>
      {/* Search , notification bell and profile flex END*/}
      <p className="text-gray-500 mt-10 mb-5">Welcome back, Marcus</p>
      <div className="flex justify-between">
        <p className="text-[#00236F] text-2xl font-bold">
          Portfolio Performance
        </p>
        <div className="flex justify-between">
          <button className="text-[#00236F] rounded-lg bg-white border border-gray-300 font-bold flex justify-between">
            {" "}
            <FaUserPlus className="size-5 ps-2 mt-1" />{" "}
            <span className="ms-2 pe-3">Approve Tenant</span>
          </button>
          <button className="text-white bg-[#1B2B3F] rounded-lg font-bold flex justify-between ms-5">
            {" "}
            <FaPlus className="size-5 ps-2 mt-2" />{" "}
            <span className="ms-2 pe-3 pt-1">Add Property</span>
          </button>
        </div>
      </div>
      {/* Dashboard figures */}
      <div className="flex justify-evenly my-5">
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <MdOutlineHomeWork className="size-8 rounded-lg bg-gray-300 p-2" />
            <span className="text-[#16A34A] text-sm">+2 this month</span>
          </div>
          <p className="text-sm text-[#444651]">TOTAL PROPERTIES</p>
          <p className="text-2xl font-bold my-3">12</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 mx-5 rounded-lg">
          <div className="flex justify-between my-5">
            <HiOutlineHomeModern className="text-[#9D4300] bg-[#FD761A1A] size-8 p-2" />
            <span className="text-[#444651] text-sm bg-[#ECEEF0]">
              83.3% Occupancy
            </span>
          </div>
          <p className="text-sm text-[#444651]">OCCUPIED UNITS</p>
          <p className="text-2xl font-bold my-3">10</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 me-5 rounded-lg">
          <div className="flex justify-between my-5">
            <TbCalendarClock className="text-[#9D4300] font-bold bg-[#FD761A1A] size-8 p-2" />
            <span className="text-[#BA1A1A] bg-[#FFDAD633]">Due in 5d</span>
          </div>
          <p className="text-sm text-[#444651]">PENDING RENT</p>
          <p className="text-2xl font-bold my-3 text-[#BA1A1A]">$4,200</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <GiSpanner className="rotate-280 size-8 rounded-lg bg-gray-300 p-2" />
            <span className="text-[#38485D] bg-[#D3E4FE80]">2 Critical</span>
          </div>
          <p className="text-sm text-[#444651]">MAINTENANCE</p>
          <p className="text-2xl font-bold my-3">3</p>
        </div>
      </div>
      {/* Property Overview */}
      <div className="flex justify-between mt-20">
        <div className="">
          <div className="flex justify-between bg-white border border-gray-300 p-5 rounded-t-lg">
            <p className="text-md font-bold text-[#00236F]">
              Property Overview
            </p>
            <p className="font-bold text-[#00236F]">View All</p>
          </div>
          <table className="w-full text-left border border-gray-300 rounded-b-lg">
            <thead>
              <tr className="bg-[#F2F4F6]">
                <th className="p-3 text-[#757682] text-sm ">PROPERTY NAME</th>
                <th className="p-3 text-[#757682] text-sm">LOCATION</th>
                <th className="p-3 text-[#757682] text-sm">STATUS</th>
                <th className="p-3 text-[#757682] text-sm">YIELD</th>
              </tr>
            </thead>

            <tbody>
              <tr className="">
                <td className="p-3 flex justify-between">
                  <img src={skyline} alt="" className="size-8 rounded-lg" />
                  <p className="font-bold text-sm">Skyline Heights #402</p>
                </td>
                <td className="p-3">Downtown Metro</td>
                <td className="p-3 bg-[#DCFCE7] text-[#15803D] rounded-full">
                  Occupied
                </td>
                <td className="p-3">5.2%</td>
              </tr>

              <tr>
                <td className="p-3 flex justify-between">
                  <img src={skyline} alt="" className="size-8 rounded-lg" />
                  <p className="font-bold text-sm -ms-5">Maple Oaks Estate</p>
                </td>
                <td className="p-3">North Suburbs</td>
                <td className="p-3 bg-[#FFDAD633] text-[#BA1A1A] rounded-full">
                  Vacant
                </td>
                <td className="p-3">0.0%</td>
              </tr>
              <tr className="">
                <td className="p-3 flex justify-between">
                  <img src={skyline} alt="" className="size-8 rounded-lg" />
                  <p className="font-bold text-sm ms-2">The Glass Tower #12B</p>
                </td>
                <td className="p-3">Financial District</td>
                <td className="p-3 bg-[#DCFCE7] text-[#15803D] rounded-full">
                  Occupied
                </td>
                <td className="p-3">4.8%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-5 shadow-xl border border-gray-300">
          <p className="text-md font-bold text-[#00236F]">
            Recent Tenant Activity
          </p>
          <div className="space-y-1">
            {/* Item  */}
            <div className="flex gap-4">
              {/* Line + Dot  */}
              <div className="flex flex-col items-center">
                {/* <div className="w-3 h-3 bg-green-500 rounded-full"></div> */}
                <IoIosCheckmarkCircleOutline className="w-3 h-3 bg-green-200 rounded-full" />
                <div className="w-px flex-1 bg-gray-300"></div>
              </div>

              {/* Content  */}
              <div className="pb-6">
                <p className="font-semibold">Rent Paid - Unit 402</p>
                <p className="text-sm text-gray-500">
                  Sarah Jenkins paid $1,850.00 via Stripe.2 hours ago
                </p>
              </div>
            </div>

            {/* Item  */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                {/* <div className="w-3 h-3 bg-blue-500 rounded-full"></div> */}
                <AiOutlineExclamationCircle className="w-3 h-3 bg-red-200 rounded-full" />
                <div className="w-px flex-1 bg-gray-300"></div>
              </div>

              <div className="pb-6">
                <p className="font-semibold">Maintenance Requested</p>
                <p className="text-sm text-gray-500">
                  Leaking sink reported in Maple Oaks Estate.5 hours ago
                </p>
              </div>
            </div>

            {/* Last Item  */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                {/* <div className="w-3 h-3 bg-purple-500 rounded-full"></div> */}
                <TiClipboard />
              </div>

              <div>
                <p className="font-semibold">Lease Renewal</p>
                <p className="text-sm text-gray-500">
                  David Miller signed renewal for Unit 12B.Yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Tenant Activity ended*/}
      </div>
      {/* Rent Payment Analytics */}
      <div className="flex justify-between my-10 border border-gray-300 p-5 rounded-lg">
        <div>
          <p className="text-md font-bold text-[#00236F]">
            Rent Payment Analytics
          </p>
          <p>Revenue tracking for the last 6 months</p>
        </div>
        <div className="flex justify-between pb-30 rounded-lg">
          <button className="bg-[#C5C5D3] rounded-lg px-5 text-[#191C1E]">
            This year
          </button>
          <button className="bg-[#00236F] text-white px-5 rounded-lg ms-3">
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
