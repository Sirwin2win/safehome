import React, { useEffect, useState } from "react";
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
import { fetchProfile } from "../features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMyIssues } from "../features/issue/issueSlice";
import { formatDistanceToNow } from "date-fns";

const Homeowner = () => {
  const dispatch = useDispatch();
  const { profile, profileStatus, profileError } = useSelector(
    (state) => state.profile,
  );
  const { myIssues, IStatus, IError } = useSelector((state) => state.issues);

  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(fetchProfile());
    }
  }, [dispatch, profileStatus]);

  useEffect(() => {
    dispatch(fetchMyIssues());
  }, [dispatch]);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ================= NAVBAR ================= */}

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}

            <form className="w-full md:w-auto">
              <label className="relative block">
                <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

                <input
                  type="search"
                  id="search"
                  placeholder="Search operations..."
                  className="w-full md:w-80 rounded-full bg-gray-100 py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#00236F]"
                />
              </label>
            </form>

            {/* User */}

            <div className="flex items-center justify-end gap-4">
              <button className="relative">
                <FaRegBell className="text-2xl text-gray-700" />

                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
              </button>

              <img
                src={profile?.image}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= HEADER ================= */}

        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-[#00236F]">
              Welcome Home, {profile?.name}
            </h1>

            <p className="text-gray-500 mt-2">Your estate property summary.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#00236F] text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 font-semibold">
              <MdOutlineAccountBalanceWallet />
              Pay Service Charge
            </button>

            <Link
              to={"/dashboard/issue"}
              className="border border-gray-300 bg-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 font-semibold hover:bg-gray-50"
            >
              <MdWarningAmber />
              Report Estate Issue
            </Link>
          </div>
        </div>

        {/* ================= DASHBOARD CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {/* Card */}

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase text-gray-500">
                  Outstanding Charges
                </p>

                <h2 className="text-3xl font-bold text-red-700 mt-3">$150</h2>
              </div>

              <MdOutlinePayments className="w-10 h-10 rounded-lg bg-red-100 p-2 text-red-700" />
            </div>

            <p className="text-sm text-gray-500 mt-6">Due immediately</p>
          </div>

          {/* Card */}

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase text-gray-500">
                  Reported Issues
                </p>

                <h2 className="text-3xl font-bold mt-3">1</h2>
              </div>

              <FaTools className="w-10 h-10 rounded-lg bg-orange-100 p-2 text-orange-600" />
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Active ticket in progress
            </p>
          </div>

          {/* Card */}

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase text-gray-500">
                  Community Updates
                </p>

                <h2 className="text-3xl font-bold mt-3">5</h2>
              </div>

              <TbBellRinging className="w-10 h-10 rounded-lg bg-blue-100 p-2 text-blue-700" />
            </div>

            <p className="text-sm text-gray-500 mt-6">
              New announcements this week
            </p>
          </div>

          {/* Card */}

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase text-gray-500">
                  Property Count
                </p>

                <h2 className="text-3xl font-bold mt-3">3</h2>
              </div>

              <FaLayerGroup className="w-10 h-10 rounded-lg bg-blue-100 p-2 text-blue-700" />
            </div>

            <p className="text-sm text-gray-500 mt-6">Registered properties</p>
          </div>
        </div>

        {/* ================= ESTATE ANNOUNCEMENTS START IN PART 2 ================= */}
        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
          {/* ================= LEFT COLUMN ================= */}

          <div className="xl:col-span-2 space-y-8">
            {/* ================= ESTATE ANNOUNCEMENTS ================= */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-100 px-6 py-5 border-b">
                <div className="flex items-center gap-3">
                  <MdOutlineAnnouncement className="text-2xl text-[#00236F]" />

                  <h2 className="text-lg font-bold text-[#00236F]">
                    Estate Announcements
                  </h2>
                </div>

                <button className="text-[#00236F] font-semibold hover:underline">
                  View All
                </button>
              </div>

              {/* Announcement */}

              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row gap-5">
                  <img
                    src={news1}
                    alt=""
                    className="w-full md:w-48 h-40 md:h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <h3 className="font-bold text-[#191C1E]">
                        Main Gate Maintenance Schedule
                      </h3>

                      <span className="self-start bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                        Estate News
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-4 leading-6">
                      Please be advised that the bi-annual maintenance for the
                      automated gate system will take place this Thursday from
                      10:00 AM to 2:00 PM.
                    </p>

                    <p className="text-xs text-gray-500 mt-4">
                      Posted 2 hours ago by Management
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcement */}

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-5">
                  <img
                    src={news1}
                    alt=""
                    className="w-full md:w-48 h-40 md:h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <h3 className="font-bold text-[#191C1E]">
                        Annual Residents Social Gala
                      </h3>

                      <span className="self-start bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                        Community Event
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-4 leading-6">
                      We are excited to invite all residents to the Oakwood
                      Annual Social. Tickets are available at the clubhouse
                      reception desk.
                    </p>

                    <p className="text-xs text-gray-500 mt-4">
                      Posted yesterday by Residents Association
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= SERVICE CHARGE HISTORY ================= */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 bg-gray-100 border-b">
                <h2 className="text-lg font-bold text-[#00236F]">
                  Service Charge History
                </h2>

                <button className="flex items-center gap-2 text-[#00236F] font-semibold">
                  <MdFilterList />
                  Filter
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm text-gray-500">
                        REFERENCE
                      </th>

                      <th className="px-6 py-4 text-left text-sm text-gray-500">
                        DATE
                      </th>

                      <th className="px-6 py-4 text-left text-sm text-gray-500">
                        AMOUNT
                      </th>

                      <th className="px-6 py-4 text-left text-sm text-gray-500">
                        STATUS
                      </th>

                      <th className="px-6 py-4 text-left text-sm text-gray-500">
                        ACTION
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">INV-2023-09</td>

                      <td className="px-6 py-4">Sep 01, 2023</td>

                      <td className="px-6 py-4 font-semibold">$150.00</td>

                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">
                          Paid
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button className="text-[#00236F] hover:text-blue-700">
                          <MdOutlineFileDownload className="text-xl" />
                        </button>
                      </td>
                    </tr>

                    <tr className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">INV-2023-10</td>

                      <td className="px-6 py-4">Oct 01, 2023</td>

                      <td className="px-6 py-4 font-semibold">$150.00</td>

                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-xs font-semibold">
                          Pending
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button className="text-[#00236F] hover:text-blue-700">
                          <MdOutlinePayment className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN STARTS IN PART 3 ================= */}
          {/* ================= RIGHT COLUMN ================= */}

          <div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Header */}

              <div className="bg-gray-100 border-b p-6">
                <h2 className="text-xl font-bold text-[#00236F]">
                  Issue Tracker
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Status of your reported concerns
                </p>
              </div>

              {/* Timeline */}

              <div className="p-6 space-y-8">
                {/* Item */}

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <IoIosCheckmarkCircleOutline className="text-blue-700 text-xl" />
                    </div>

                    <div className="flex-1 w-px bg-gray-300 mt-2"></div>
                  </div>

                  <div className="flex-1 rounded-lg bg-gray-50 p-4">
                    {myIssues?.map((issue) => (
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                          <h3 className="font-semibold">{issue.issue_type}</h3>

                          <span className="self-start rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold">
                            In Review
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mt-3">
                          {issue.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-gray-500 mt-4 gap-2">
                          <span>ID: #TK-8892</span>

                          <span>
                            {formatDistanceToNow(new Date(issue.created_at), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Item */}
                {/* 
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <AiOutlineExclamationCircle className="text-green-700 text-xl" />
                    </div>
                  </div>

                  <div className="flex-1 rounded-lg border p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <h3 className="font-semibold">Water Pressure Drop</h3>

                      <span className="self-start rounded-full bg-gray-200 text-gray-700 px-3 py-1 text-xs font-semibold">
                        Resolved
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-3">
                      Pressure restored after scheduled pump station
                      maintenance.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-gray-500 mt-4 gap-2">
                      <span>ID: #TK-8810</span>

                      <span>Resolved Sep 28</span>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Support */}

              <div className="border-t p-6 text-center">
                <MdOutlineSupportAgent className="mx-auto text-5xl text-[#00236F]/20" />

                <h3 className="font-semibold mt-4">Need urgent assistance?</h3>

                <p className="text-sm text-gray-500 mt-2">
                  Our estate support team is available to help you with
                  emergencies and service requests.
                </p>

                <button
                  className="
                  mt-6
                  w-full
                  rounded-lg
                  border-2
                  border-[#00236F]
                  text-[#00236F]
                  py-3
                  font-semibold
                  hover:bg-[#00236F]
                  hover:text-white
                  transition
                "
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeowner;
