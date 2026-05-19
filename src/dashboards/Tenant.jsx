import React from "react";
import { FaRegBell, FaUserPlus, FaPlus, FaTools } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  MdOutlinePayments,
  MdOutlineHomeWork,
  MdOutlineAccountBalanceWallet,
  MdOutlineCalendarToday,
} from "react-icons/md";
import pix from "../assets/images/safehome_profile.jpg";
import skyline from "../assets/images/safehome_skyline.jpg";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbCalendarClock } from "react-icons/tb";
import { GiSpanner } from "react-icons/gi";
// import { MdOutlineHomeWork } from "react-icons/md";

const Tenant = () => {
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
          <FaRegBell className="size-8" />
          <div className="border-s-3 border-gray-500 mx-1 px-3">
            <p className="text-gray-500">Alex Resident</p>
            <p className="text-gray-500">Unit 402B</p>
          </div>
          <img src={pix} alt="" className="size-10 rounded-full" />
        </div>
      </div>

      {/* Search , notification bell and profile flex END*/}
      <p className="text-gray-500 mt-10">Welcome home, Alex.</p>
      <div className="flex justify-between">
        <p className="text-gray-500">
          Everything looks good for your upcoming payment.
        </p>
        <div className="flex justify-between">
          <button className="text-white bg-[#00236F] rounded-lg border border-gray-300 font-bold flex justify-between">
            {" "}
            <MdOutlinePayments className="size-7 ps-2 text-white" />{" "}
            <span className="ms-2 pe-3">Approve Tenant</span>
          </button>
          <button className="text-[#00236F] rounded-lg font-bold border border-gray-300 flex justify-between ms-5">
            {" "}
            <FaTools className="size-7 ps-2 mt-1" />{" "}
            <span className="ms-2 pe-3 pt-1">Add Property</span>
          </button>
        </div>
      </div>
      {/* Dashboard figures */}
      <div className="flex justify-evenly my-5">
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <MdOutlineAccountBalanceWallet className="size-8 rounded-lg bg-gray-300 p-2" />
            <span className="text-[#444651] text-sm">Status: Paid</span>
          </div>
          <p className="text-sm text-[#444651]">Current Balance</p>
          <p className="text-2xl font-bold my-3">$0.00</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 mx-5 rounded-lg">
          <div className="flex justify-between my-5">
            <MdOutlineCalendarToday className="text-[#9D4300] bg-[#FD761A1A] size-8 p-2" />
            <span className="text-[#9D4300] font-bold text-sm">
              14 Days left
            </span>
          </div>
          <p className="text-sm text-[#444651]">Next Due Date</p>
          <p className="text-2xl font-bold my-3">Oct 1st</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 me-5 rounded-lg">
          <div className="flex justify-between my-5">
            <TbCalendarClock className="text-[#1B2B3F] font-bold bg-[#D3E4FE] size-8 p-2" />
            <span className="text-[#BA1A1A] bg-[#FFDAD633]"></span>
          </div>
          <p className="text-sm text-[#444651]">Maintenance Status</p>
          <p className="text-2xl font-bold my-3 text-[#191C1E]">1 Pending</p>
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
    </div>
  );
};

export default Tenant;
