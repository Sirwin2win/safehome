import React from "react";
import { FaRegBell, FaUserPlus, FaPlus } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  MdOutlineHomeWork,
  MdWarningAmber,
  MdFilterList,
  MdPool,
  MdOutlineCoffee,
} from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import {
  TbCalendarClock,
  TbClipboardText,
  TbDots,
  TbReload,
  TbCirclePlusFilled,
} from "react-icons/tb";
import { GiSpanner } from "react-icons/gi";
import { TiClipboard } from "react-icons/ti";
import { PiUsersBold } from "react-icons/pi";
import {
  AiOutlineExclamationCircle,
  AiOutlineSound,
  AiOutlineDollar,
} from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import pix from "../assets/images/safehome_profile.jpg";
import skyline from "../assets/images/safehome_skyline.jpg";

const EstateManager = () => {
  return (
    <div>
      {/* Search , notification bell and profile flex */}
      <div className="flex justify-between mb-10 shadow-xl bg-white pb-3 border-b border-gray-300">
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

      <p className="text-[#00236F] text-2xl font-bold">Estate Operations</p>
      <div className="flex justify-between">
        <p className="text-gray-500 ">
          Real-time status of SafeHome administrative hub.
        </p>
        <div className="flex justify-between">
          <button className="text-[#191C1E] text-sm py-2 rounded-lg bg-[#E6E8EA] border border-gray-300 font-bold flex justify-between">
            {" "}
            <AiOutlineSound className="size-6 ps-2" />{" "}
            <span className="ms-2 pe-3">Send Announcement</span>
          </button>
          <button className="text-white bg-[#00236F] rounded-lg py-2 font-bold flex justify-between ms-5">
            {" "}
            <TbClipboardText className="size-6 ps-2" />{" "}
            <span className="ms-2 pe-3 ">Assign Maintenance</span>
          </button>
        </div>
      </div>

      {/* Dashboard figures */}
      <div className="flex justify-evenly flex-wrap gap-4 md:gap-0 my-5">
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <PiUsersBold className="size-8 rounded-lg bg-[#DCE1FF] p-2" />
            <span className="text-[#16A34A] bg-[#F0FDF4] rounded-full p-2 text-xs">
              +2.4%
            </span>
          </div>
          <p className="text-xs font-semibold text-[#757682]">
            Total Residents
          </p>
          <p className="text-2xl font-bold my-3">450</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 mx-5 rounded-lg">
          <div className="flex justify-between my-5">
            <MdWarningAmber className="text-[#BA1A1A] bg-[#FFDAD6] size-9 p-2 rounded-lg" />
            <span className="text-[#BA1A1A] bg-[#FFDAD6] text-xs rounded-full px-2 pt-2">
              High Priority
            </span>
          </div>
          <p className="text-xs font-semibold text-[#757682]">
            Open Complaints
          </p>
          <p className="text-2xl font-bold my-3">8</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 me-5 rounded-lg">
          <div className="flex justify-between my-5">
            <GiSpanner className="text-[#0B1C30] font-bold bg-[#D3E4FE] rounded-lg rotate-280 size-8 p-2" />
            <span className="text-[#757682] rounded-full px-2 bg-[#E6E8EA]">
              12 In Progress
            </span>
          </div>
          <p className="text-xs font-semibold text-[#757682]">
            Pending Maintenance
          </p>
          <p className="text-2xl font-bold my-3">12</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <AiOutlineDollar className="size-8 text-[#341100] rounded-lg bg-[#FFDBCA] p-2" />
            <span className="text-[#16A34A] bg-[#F0FDF4] px-2 rounded-full">
              92% Collected
            </span>
          </div>
          <p className="text-xs font-semibold text-[#757682]">
            Monthly Revenue
          </p>
          <p className="text-2xl font-bold my-3">$85k</p>
        </div>
      </div>
      {/* Complaint Management */}
      <div className="flex justify-between mt-10">
        <div className="grow-3">
          <div className="flex justify-between">
            <p className="text-[#191C1E] text-lg font-bold">
              Complaint Management
            </p>
            <p className="text-xs text-[#00236F] mt-2">View All</p>
          </div>
          <div className="flex justify-between my-5">
            {/* NEW (3) */}
            <div className="grow-1 p-5 bg-[#F2F4F6] rounded-lg">
              {/* <div className=""> */}
              <div className="flex justify-between mt-3">
                <p className="text-[#757682] text-xs">NEW (3)</p>
                <TbDots />
              </div>
              {/* </div> */}
              <div className="bg-white rounded-lg p-5 my-3 border border-gray-300">
                <p className="font-bold">Elevator B-4 Faulty</p>
                <div className="flex justify-between mt-3">
                  <p className="bg-[#FFDAD6] text-[#BA1A1A] p-1 rounded-lg text-xs">
                    Urgent
                  </p>
                  <p className="text-[#757682] text-xs">Apt 204</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 my-3 border border-gray-300">
                <p className="font-bold">Pool Light Replacement</p>
                <div className="flex justify-between mt-3">
                  <p className="bg-[#D3E4FE] text-[#38485D] p-1 rounded-lg text-xs">
                    Urgent
                  </p>
                  <p className="text-[#757682] text-xs">Lounge</p>
                </div>
              </div>
            </div>

            {/* IN REVIEW (2) */}
            <div className="grow-1 p-5 bg-[#F2F4F6] mx-3 rounded-lg">
              {/* <div className=""> */}
              <div className="flex justify-between mt-3">
                <p className="text-[#757682] text-xs">IN REVIEW (2)</p>
                <TbDots />
              </div>
              {/* </div> */}
              <div className="bg-white rounded-lg p-2 my-3 border border-gray-300">
                <p className="font-bold">Leakage in Basement</p>
                <div className="flex justify-between mt-3">
                  <p className="bg-[#DCE1FF] text-[#00236F] p-1 rounded-lg text-xs">
                    Maintenance
                  </p>
                  <p className="text-[#757682] text-xs">Zone C</p>
                </div>
              </div>
            </div>

            {/* RESOLVED (15) */}
            <div className="grow-1 p-5 bg-[#F2F4F6] rounded-lg">
              {/* <div className=""> */}
              <div className="flex justify-between mt-3">
                <p className="text-[#757682] text-xs">RESOLVED (15)</p>
                <TbDots />
              </div>
              {/* </div> */}
              <div className="bg-white rounded-lg p-2 my-3 border border-gray-300">
                <del className="font-bold">Gym AC Repaired</del>
                <div className="flex mt-3">
                  <IoIosCheckmarkCircleOutline className="text-[#16A34A]" />
                  <p className="text-[#757682] text-xs ms-3">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow-2 ms-5">
          <p className="text-[#191C1E] text-lg font-bold">Revenue Collection</p>
          <div className="border border-gray-300 rounded-lg mt-5">
            <div className="flex justify-between p-5 mt-5">
              <div>
                <p className="text-xs text-[#757682]">MTD Goal</p>
                <p className="text-[#191C1E] font-bold">$92,000</p>
              </div>
              <div>
                <p className="text-[#757682] text-xs">Current</p>
                <p className="text-[#16A34A] font-bold">$85,400</p>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-screen -mt-50">
              <div className="w-40 h-40 rounded-full border-15 border-[#00236F] p-5 items-center justify-center shadow-lg">
                <p className="text-2xl text-center font-bold text-[#191C1E]">
                  92%
                </p>
                <p className="text-xs text-center">COLLECTED</p>
              </div>
            </div>
            <div className="-mt-45 p-3">
              <div className="flex justify-between py-3 border-b-2 border-gray-300">
                <p>Service Charge</p>
                <p>$62,000</p>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-gray-300">
                <p>Facility Bookings</p>
                <p>$18,400</p>
              </div>
              <div className="flex justify-between py-3">
                <p>Utility Recharges</p>
                <p>$5,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Maintenance Operations */}
      <div className="flex justify-between mt-10">
        <div className="grow-2">
          <div className="flex justify-between">
            <p className="font-bold">Maintenance Operations</p>
            <MdFilterList />
          </div>
          {/* Table */}
          <div className="overflow-x-auto border border-gray-300 rounded-lg mt-5">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    VENDOR
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    TASK
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    STATUS
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    ETA
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    AquaPro Systems
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Pool Filter Cleaning
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium text-[#2563EB] bg-[#EFF6FF] rounded-full">
                      In Progress
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">2h 15m</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    PowerLink Inc.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Gen Set Overhaul
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Tomorrow</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    CleanCo Group
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Façade Washing
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium text-[#16A34A] bg-[#F0FDF4] rounded-full">
                      Scheduled
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Dec 12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grow-2 ms-3 px-5">
          <div className="">
            <div className="flex justify-between">
              <p className="font-bold">Shared Facility Monitoring</p>
              <TbReload />
            </div>
            <div className="flex justify-between mt-5">
              {/* Gym */}
              <div className="bg-gray-200 px-2 py-3 rounded-lg  border border-gray-300">
                <CgGym className="my-2" />
                <div className="bg-white p-3 rounded-lg border-b-5 border-[#00236F]">
                  <p className="font-bold text-xs text-[#191C1E]">Gym</p>
                  <p className="text-[#16A34A] text-xs my-2">85% Capacity</p>
                </div>
              </div>
              {/* Pool */}
              <div className="bg-gray-200 px-2 py-3 rounded-lg border border-gray-300">
                <MdPool className="my-2" />
                <div className="bg-white p-3 rounded-lg ">
                  <p className="font-bold text-xs text-[#191C1E]">Pool</p>
                  <p className="text-[#16A34A] text-xs">Open</p>
                  <p className="text-xs text-[#757682] my-2">
                    Temp:26<sup>o</sup>C
                  </p>
                </div>
              </div>
              {/* Lounge */}
              <div className="bg-gray-200 px-2 py-3 rounded-lg  border border-gray-300">
                <MdOutlineCoffee className="my-2" />
                <div className="relative p-3 rounded-lg ">
                  <p className="font-bold text-xs text-[#191C1E]">Lounge</p>
                  <TbCirclePlusFilled className="absolute text-[#00236F] left-15 bottom-12 size-10" />
                  <p className="text-[#BA1A1A] font-bold my-2 text-xs">
                    Fully Booked
                  </p>
                  <p className="text-xs text-[#757682]">Next: 14:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateManager;
