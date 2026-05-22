import React, { useState } from "react";
import { FaRegBell, FaUserPlus, FaPlus, FaTools } from "react-icons/fa";
import { IoIosSearch, IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  MdOutlinePayments,
  MdOutlineHomeWork,
  MdOutlineAccountBalanceWallet,
  MdOutlineCalendarToday,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import pix from "../assets/images/safehome_profile.jpg";
import skyline from "../assets/images/safehome_skyline.jpg";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbCalendarClock } from "react-icons/tb";
import { GiSpanner } from "react-icons/gi";
import { BsStopwatch } from "react-icons/bs";
// import { MdOutlineHomeWork } from "react-icons/md";
import yourProperty from "../assets/images/safehome_yourPropertyImage.png";

const initialColumns = {
  todo: [
    { id: 1, title: "Design login page" },
    { id: 2, title: "Set up database" },
  ],
  inProgress: [{ id: 3, title: "Implement auth API" }],
  done: [{ id: 4, title: "Project setup" }],
};

const Tenant = () => {
  const steps = ["Submitted", "Assigned", "Scheduled", "Completed"];
  const currentStep = 2; // 1-based index of current step
  const [columns, setColumns] = useState(initialColumns);
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
          <div className="border-s-2 border-gray-300 mx-1 px-3">
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
            <span className="ms-2 pe-3">Make Payment</span>
          </button>
          <button className="text-[#00236F] rounded-lg font-bold border border-gray-300 flex justify-between ms-5">
            {" "}
            <FaTools className="size-7 ps-2 mt-1" />{" "}
            <span className="ms-2 pe-3 pt-1">Report Issue</span>
          </button>
        </div>
      </div>
      {/* Dashboard figures */}
      <div className="flex justify-evenly my-5">
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <MdOutlineAccountBalanceWallet className="size-8 rounded-lg bg-gray-300 p-2" />
            <span className="text-[#444651] text-xs">Status: Paid</span>
          </div>
          <p className="text-xs text-[#444651]">Current Balance</p>
          <p className="text-lg font-bold my-3">$0.00</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 mx-5 rounded-lg">
          <div className="flex justify-between my-5">
            <MdOutlineCalendarToday className="text-[#9D4300] bg-[#FD761A1A] size-8 p-2" />
            <span className="text-[#9D4300] font-bold text-xs">
              14 Days left
            </span>
          </div>
          <p className="text-xs text-[#444651]">Next Due Date</p>
          <p className="text-lg font-bold my-3">Oct 1st</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 me-5 rounded-lg">
          <div className="flex justify-between my-5">
            <TbCalendarClock className="text-[#1B2B3F] font-bold bg-[#D3E4FE] size-8 p-2" />
            <span className="text-[#BA1A1A] bg-[#FFDAD633]"></span>
          </div>
          <p className="text-xs text-[#444651]">Maintenance Status</p>
          <p className="text-lg font-bold my-3 text-[#191C1E]">1 Pending</p>
        </div>
        <div className="bg-white shadow-xl p-5 w-60 border border-gray-300 rounded-lg">
          <div className="flex justify-between my-5">
            <BsStopwatch lassName="size-8 rounded-lg bg-gray-300 p-2" />
            <span className="text-[#38485D] bg-[#D3E4FE80]"></span>
          </div>
          <p className="text-xs text-[#444651]">Lease Expiry</p>
          <p className="text-lg font-bold my-3">240 Days</p>
        </div>
      </div>
      {/*  ACtivity request */}
      <div className="flex justify-between my-10">
        <div>
          <div className="w-150 border border-gray-300 rounded-lg p-5">
            <div className="flex justify-between">
              <p>Active Request: Kitchen Tap Leak</p>
              <p className="bg-[#FD761A1A] text-[#9D4300] rounded-full">
                Ticket #4928
              </p>
            </div>
            <div className="flex items-center w-full max-w-3xl mx-auto mt-10">
              {steps.map((step, idx) => {
                const completed = idx + 1 <= currentStep;

                return (
                  <React.Fragment key={idx}>
                    {/* Circle */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${completed ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}
                      >
                        {idx + 1}
                      </div>
                      <p className="mt-2 text-sm font-medium">{step}</p>
                    </div>

                    {/* Line (except after last circle) */}
                    {idx !== steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mt-4 ${idx + 1 < currentStep ? "bg-blue-500" : "bg-gray-300"}`}
                      ></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex justify-spaced mt-20 bg-gray-200 rounded-md p-5">
              <RiErrorWarningLine />
              <div className="ms-5 -mt-2">
                <p>Maintenance scheduled for Tuesday morning</p>
                <p className="text-gray-600">
                  Technician: Marcus J. (Certified Plumber)
                </p>
              </div>
            </div>
          </div>
          {/* Table  */}

          <div className="my-10">
            <div className="flex justify-between bg-white border border-gray-300 p-5 rounded-t-lg">
              <p className="font-bold text-gray-500">Recent Payments</p>
              <p className="font-bold text-[#00236F]">View All</p>
            </div>
            <table className="w-full text-left border border-gray-300 rounded-b-lg">
              <thead>
                <tr className="bg-[#F2F4F6]">
                  <th className="p-3 text-[#757682] text-sm ">DATE</th>
                  <th className="p-3 text-[#757682] text-sm">REFERENCE</th>
                  <th className="p-3 text-[#757682] text-sm">AMOUNT</th>
                  <th className="p-3 text-[#757682] text-sm">STATUS</th>
                </tr>
              </thead>

              <tbody className="p-50">
                <tr className="">
                  <td className="p-3">Sep 01, 2023</td>
                  <td className="p-3">Rent Unit 402B</td>
                  <td className="p-3 ">$2,450.00</td>
                  <td className="bg-[#DCFCE7] text-[#15803D] rounded-full px-5">
                    Paid
                  </td>
                </tr>
                <tr className="">
                  <td className="p-3">Sep 01, 2023</td>
                  <td className="p-3">Rent Unit 402B</td>
                  <td className="p-3 ">$2,450.00</td>
                  <td className="bg-[#DCFCE7] text-[#15803D] rounded-full px-5">
                    Paid
                  </td>
                </tr>
                <tr className="">
                  <td className="p-3">Sep 01, 2023</td>
                  <td className="p-3">Rent Unit 402B</td>
                  <td className="p-3 ">$2,450.00</td>
                  <td className="bg-[#DCFCE7] text-[#15803D] rounded-full px-5">
                    Paid
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Left Hand side i.e Lease Agreement */}
        <div>
          <div className="bg-[#00236F] p-5 w-100 rounded-lg">
            <p className="text-white">Lease Agreement</p>
            <p className="text-white">
              Your current lease or Unit 402B is valid until May 1, 2024
            </p>
            {/* Kanban Board started */}
            <div className="p-6 bg-blue-50 min-h-screen my-5 rounded-lg">
              <h1 className="text-2xl font-bold mb-6 text-blue-900">
                Kanban Board
              </h1>
              <div className="flex gap-6 overflow-x-auto">
                {Object.entries(columns).map(([columnId, cards]) => (
                  <div
                    key={columnId}
                    className="bg-blue-200 rounded-lg p-4 flex-shrink-0 w-72"
                  >
                    <h2 className="text-lg font-semibold mb-4 text-blue-900 capitalize">
                      {columnId.replace(/([A-Z])/g, " $1")}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {cards.map((card) => (
                        <div
                          key={card.id}
                          className="bg-blue-100 p-3 rounded shadow cursor-pointer hover:bg-blue-300 transition"
                        >
                          {card.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="rounded-lg w-90 bg-white py-2">
              View Full Document
            </button>
          </div>
          <div className="rounded-lg bg-white p-5 border border-gray-300 mt-5">
            <p className="my-5">Your Property</p>
            <img src={yourProperty} alt="" className="h-40 w-80 rounded-lg" />
            <p className="mt-3 text-[#1E3A8A]">Address</p>
            <p>1200 Highland Ave, Unit 402B, Seattle, WA</p>

            <div className="mt-5 border-t-2 border-gray-300 flex justify-between">
              <div className="mt-5">
                <MdOutlinePermContactCalendar className="size-5 text-[#1E3A8A]" />
                <p className="ms-8 -mt-6">Property Manager</p>
              </div>
              <p className="mt-5 text-[#1E3A8A]">Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenant;
