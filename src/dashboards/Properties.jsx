import React from "react";
import { FaRegBell, FaUserPlus, FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineHomeWork } from "react-icons/md";
import pix from "../assets/images/safehome_profile.jpg";

const Properties = () => {
  return (
    <div>
      {/* Search , notification bell and profile flex */}
      <div className="flex justify-between shadow-xl bg-white pb-3">
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
      <div className="flex justify-evenly">
        <div className="bg-white shadow-xl">
          <div className="flex">
            <MdOutlineHomeWork />
            <span>+2 this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
