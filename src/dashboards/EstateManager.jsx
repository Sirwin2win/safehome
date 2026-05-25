import React from "react";
import { FaRegBell, FaUserPlus, FaPlus } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineHomeWork, MdWarningAmber } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbCalendarClock, TbClipboardText } from "react-icons/tb";
import { GiSpanner } from "react-icons/gi";
import { TiClipboard } from "react-icons/ti";
import { PiUsersBold } from "react-icons/pi";
import {
  AiOutlineExclamationCircle,
  AiOutlineSound,
  AiOutlineDollar,
} from "react-icons/ai";
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
    </div>
  );
};

export default EstateManager;
