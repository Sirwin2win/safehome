import React from "react";
import {
  FaRegBell,
  FaUserPlus,
  FaPlus,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  MdOutlineHomeWork,
  MdOutlineAccountBalanceWallet,
  MdWarningAmber,
  MdOutlinePayments,
  MdOutlineAnnouncement,
  MdOutlineSupportAgent,
  MdFilterList,
  MdOutlineFileDownload,
  MdOutlinePayment,
} from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbCalendarClock, TbBellRinging } from "react-icons/tb";
import { GiSpanner } from "react-icons/gi";
import { TiClipboard } from "react-icons/ti";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import pix from "../assets/images/safehome_profile.jpg";
import skyline from "../assets/images/safehome_skyline.jpg";
import news1 from "../assets/images/safehome_news.jpg";

const Homeowner = () => {
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
      <p className="text-[#00236F] text-2xl font-bold  mt-10">
        Welcome Home, Alexander
      </p>
      <div className="flex justify-between">
        <p className="text-gray-500 mb-5">
          Your estate summary for Oakwood Luxury Villas.
        </p>
        <div className="flex justify-between">
          <button className="text-white bg-[#00236F] rounded-lg font-bold flex justify-between">
            {" "}
            <MdOutlineAccountBalanceWallet className="size-7 ps-2 mt-1" />{" "}
            <span className="ms-2 pe-3 pt-2 text-xs">Pay Service Charge</span>
          </button>
          <button className="text-[#00236F] ms-5 rounded-lg bg-white border border-gray-300 font-bold flex justify-between">
            {" "}
            <MdWarningAmber className="size-7 ps-2 mt-1 text-[#444651]" />{" "}
            <span className="ms-2 pe-3 pt-1 text-[#444651]">
              Report Estate Issue
            </span>
          </button>
        </div>
      </div>
      {/* Dashboard figures */}
      <div className="flex justify-evenly my-5">
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <span className="text-[#444651] text-xs">OUTSTANDING CHARGES</span>
            <MdOutlinePayments className="size-8 rounded-lg bg-[#FFDAD6] p-2 text-[#93000A]" />
          </div>
          <p className="text-2xl font-bold my-3 text-[#BA1A1A]">$150.00</p>
          <p className="text-xs text-[#444651]">TOTAL PROPERTIES</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 mx-5 rounded-lg">
          <div className="flex justify-between my-5">
            <span className="text-[#444651] text-xs">REPORTED ISSUES</span>
            <FaTools className="text-[#9D4300] bg-[#FD761A1A] size-8 p-2" />
          </div>
          <p className="text-2xl font-bold my-3 text-[#191C1E]">1</p>
          <p className="text-xs text-[#444651]">Active ticket in progress</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 me-5 rounded-lg">
          <div className="flex justify-between my-5">
            <span className="text-[#444651] text-xs">COMMUNITY UPDATES</span>
            <TbBellRinging className="text-[#264191] font-bold bg-[#DCE1FF] size-8 p-2" />
          </div>
          <p className="text-2xl font-bold my-3 text-[#191C1E]">5</p>
          <p className="text-xs text-[#444651]">New announcements this week</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <span className="text-[#38485D] text-xs">PROPERTY COUNT</span>
            <FaLayerGroup className="size-8 rounded-lg text-[#264191] bg-[#DCE1FF] p-2" />
          </div>
          <p className="text-xs text-[#444651]">MAINTENANCE</p>
          <p className="text-2xl font-bold my-3 text-[#191C1E]">3</p>
        </div>
      </div>
      {/* Estate Announcement*/}
      <div className="flex justify-between mt-20">
        <div>
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="flex justify-between bg-[#C5C5D3] border border-gray-300 p-5 rounded-t-lg">
              <div className="flex justify-between">
                <MdOutlineAnnouncement className="text-[#00236F] size-5 mt-1" />
                <p className="text-md ms-2 font-bold text-[#00236F]">
                  Estate Announcements
                </p>
              </div>
              <p className="font-bold text-[#00236F]">View All</p>
            </div>
            {/* blog like announcement */}
            <div className="flex justify-between p-5">
              <img
                src={news1}
                alt="estate news1"
                className="rounded-lg h-20 me-5"
              />
              <div>
                <div className="flex justify-between">
                  <p className="text-xs font-bold me-20">
                    Main Gate Maintenance Schedule
                  </p>
                  <p className="bg-[#E0E3E5] text-[#444651] text-xs font-bold">
                    Estate News
                  </p>
                </div>
                <p className="my-5 text-xs">
                  Please be advised that the bi-annual maintenance for the
                  automated gate system will take place this Thursday from 10:00
                  AM to 2:00 PM.
                </p>
                <p className="text-xs">Posted 2 hours ago by Management</p>
              </div>
            </div>
            <div className="flex justify-between p-5 border-t-3 border-gray-300">
              <img
                src={news1}
                alt="estate news1"
                className="rounded-lg h-20 me-5"
              />
              <div>
                <div className="flex justify-between">
                  <p className="text-xs font-bold me-20">
                    Annual Residents Social Gala
                  </p>
                  <p className="bg-[#DCE1FF] text-[#264191] text-xs font-bold">
                    Community Event
                  </p>
                </div>
                <p className="my-5 text-xs">
                  We are excited to invite all residents to the Oakwood Annual
                  Social. Tickets are now available at the clubhouse reception
                  desk.
                </p>
                <p className="text-xs">
                  Posted Yesterday by Residents Association
                </p>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="rounded-lg mt-5">
            <div className="flex justify-between bg-[#C5C5D3] border border-gray-300 p-5 rounded-t-lg">
              <p className="text-xs ms-2 font-bold text-[#00236F]">
                Service Charge History
              </p>
              <div className="flex justify-between">
                <MdFilterList />
                <p className="font-bold text-xs text-[#00236F] ms-3">Filter</p>
              </div>
            </div>
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 rounded-lg">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    REFERENCE
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    DATE
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    AMOUNT
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    STATUS
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    NV-2023-09
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Sep 01, 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">$150.00</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <button className="bg-[#DCFCE7] py-2 px-5 rounded-full text-[#15803D]">
                      Paid
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <MdOutlineFileDownload />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    INV-2023-10
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Oct 01, 2023
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">$150.00</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <button className="bg-[#FEF9C3] py-2 px-5 rounded-full text-[#A16207]">
                      Pending
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <MdOutlinePayment />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Issue Tracker */}
        <div className="ms-5">
          <div className="bg-[#C5C5D3] border border-gray-300 p-3 rounded-t-lg">
            <p className="font-bold text-[#00236F]">Issue Tracker</p>
            <p className="text-[#00236F]">Status of your reported concerns</p>
          </div>
          <div className="bg-white p-5 shadow-xl border border-gray-300">
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
                <div className="pb-6 bg-[#F2F4F6] rounded-lg p-3">
                  <div className="flex justify-between">
                    <p className="font-semibold text-[#191C1E] text-xs">
                      Rent Paid - Unit 402
                    </p>
                    <p className="bg-[#DBEAFE] text-[#1D4ED8] text-xs">
                      In Review
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 my-3">
                    Unit 12 Frontage, faulty sensor causing flickering.
                  </p>
                  <div className="flex justify-between my-1">
                    <p className="text-xs text-gray-500">ID: #TK-8892</p>
                    <p className="text-xs text-gray-500">2 Days Ago</p>
                  </div>
                </div>
              </div>

              {/* Item  */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  {/* <div className="w-3 h-3 bg-blue-500 rounded-full"></div> */}
                  <AiOutlineExclamationCircle className="w-3 h-3 bg-red-200 rounded-full" />
                  <div className="w-px flex-1 bg-gray-300"></div>
                </div>

                <div className="pb-6 p-3 mt-10 border-b-1 border-gray-300">
                  <div className="flex justify-between">
                    <p className="font-semibold text-[#191C1E] text-xs">
                      Water Pressure Drop
                    </p>
                    <p className="bg-[#E6E8EA] text-[#757682] text-xs p-1">
                      Resolved
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 my-3">
                    Pressure restored after pump station maintenance.
                  </p>
                  <div className="flex justify-between my-1">
                    <p className="text-xs text-gray-500">ID: #TK-8810</p>
                    <p className="text-xs text-gray-500">Resolved Sep 28</p>
                  </div>
                </div>
                {/* contact support  */}
              </div>
            </div>
            <MdOutlineSupportAgent className="size-10 mx-auto my-5 text-[#00236F33]" />
            <p className="text-xs text-[#444651]">
              Need urgent assistance with an estate service?
            </p>
            <button className="text-[#00236F] border-2 w-full border-[#00236F] rounded-lg p-2 my-3 text-xs font-semibold">
              Contact Support
            </button>
          </div>
        </div>
        {/* Recent Tenant Activity ended*/}
      </div>
    </div>
  );
};

export default Homeowner;
