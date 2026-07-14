import React, { useEffect, useState } from "react";
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
import { fetchProfile } from "../features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TenantTransactions from "../components/TenantTransactions";
import { fetchMyLeases } from "../features/lease/leaseSlice";

const initialColumns = {
  todo: [
    { id: 1, title: "Design login page" },
    { id: 2, title: "Set up database" },
  ],
  inProgress: [{ id: 3, title: "Implement auth API" }],
  done: [{ id: 4, title: "Project setup" }],
};

const Tenant = () => {
  const dispatch = useDispatch();
  const steps = ["Submitted", "Assigned", "Scheduled", "Completed"];
  const currentStep = 2; // 1-based index of current step
  const [columns, setColumns] = useState(initialColumns);
  const { profile, profileStatus } = useSelector((state) => state.profile);
  const { myLease, leStatus } = useSelector((state) => state.leases);
  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(fetchProfile());
    }
  }, [profileStatus, dispatch]);
  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchMyLeases());
    }
  }, [leStatus, dispatch]);
  const startDate = new Date(myLease[0]?.start_date);
  const endDate = new Date(myLease[0]?.end_date);

  const daysBetween = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  console.log(myLease);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        {/* ================= NAVBAR ================= */}

        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}

          <form className="w-full md:w-auto">
            <label htmlFor="search" className="relative block">
              <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

              <input
                id="search"
                type="search"
                placeholder="Search operations..."
                className="w-full md:w-80 rounded-full bg-gray-100 py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#00236F]"
              />
            </label>
          </form>

          {/* User */}

          <div className="flex items-center justify-end gap-4 flex-wrap">
            <FaRegBell className="text-2xl text-gray-700" />

            <div className="hidden sm:block border-l pl-4">
              <p className="font-medium">{profile?.name}</p>

              <p className="text-sm text-gray-500">
                {myLease?.property_address}
              </p>
            </div>

            <img
              src={profile?.image}
              alt=""
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>
        </div>

        {/* ================= WELCOME ================= */}

        <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div>
            <p className="text-gray-500">Welcome home, Alex.</p>

            <h1 className="text-3xl font-bold text-[#00236F] mt-2">
              Tenant Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Everything looks good for your upcoming payment.
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={"/dashboard/lease-docs"}
              className="bg-[#00236F] text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 font-semibold"
            >
              <MdOutlinePayments />
              Make Payment
            </Link>

            <Link
              to={"/dashboard/mentenance"}
              className="border border-gray-300 bg-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 font-semibold hover:bg-gray-50"
            >
              <FaTools />
              Report Issue
            </Link>
          </div>
        </div>

        {/* ================= STAT CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {/* Card */}

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <MdOutlineAccountBalanceWallet className="w-10 h-10 p-2 rounded-lg bg-gray-100 text-[#00236F]" />

              <span className="text-sm text-green-600">Paid</span>
            </div>

            <p className="text-xs uppercase text-gray-500 mt-6">
              Current Balance
            </p>

            <h2 className="text-3xl font-bold mt-2">₦0.00</h2>
          </div>

          {/* Card */}

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <MdOutlineCalendarToday className="w-10 h-10 p-2 rounded-lg bg-orange-100 text-orange-600" />

              <span className="text-sm text-orange-600">14 Days Left</span>
            </div>

            <p className="text-xs uppercase text-gray-500 mt-6">
              Next Due Date
            </p>

            <h2 className="text-lg font-bold mt-2">
              {new Date(myLease[0]?.end_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>

          {/* Card */}

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <TbCalendarClock className="w-10 h-10 p-2 rounded-lg bg-blue-100 text-blue-700" />
            </div>

            <p className="text-xs uppercase text-gray-500 mt-6">Maintenance</p>

            <h2 className="text-3xl font-bold mt-2">1 Pending</h2>
          </div>

          {/* Card */}

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <BsStopwatch className="w-10 h-10 p-2 rounded-lg bg-gray-100 text-gray-700" />
            </div>

            <p className="text-xs uppercase text-gray-500 mt-6">Lease Expiry</p>

            <h2 className="text-3xl font-bold mt-2">{daysBetween} Days</h2>
          </div>
        </div>

        {/* ================= ACTIVITY REQUEST STARTS IN PART 2 ================= */}
        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
          {/* ================= LEFT COLUMN ================= */}

          <div className="xl:col-span-2 space-y-8">
            {/* Maintenance Request */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-[#00236F]">
                    Active Request
                  </h2>

                  <p className="text-gray-600">Kitchen Tap Leak</p>
                </div>

                <span className="self-start rounded-full bg-orange-100 text-orange-700 px-4 py-2 text-sm font-semibold">
                  Ticket #4928
                </span>
              </div>

              {/* Progress */}

              <div className="mt-10 overflow-x-auto"></div>

              {/* Notification */}

              <div className="mt-10 rounded-lg bg-blue-50 border border-blue-100 p-5 flex gap-4">
                <RiErrorWarningLine className="text-2xl text-blue-700 flex-shrink-0" />

                {/* <div>
                  <h3 className="font-semibold">Maintenance Scheduled</h3>

                  <p className="text-gray-600 text-sm mt-1">
                    Tuesday morning with Marcus J. (Certified Plumber)
                  </p>
                </div> */}
              </div>
            </div>

            {/* ================= PAYMENTS ================= */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b">
                <h2 className="text-lg font-bold text-[#00236F]">
                  Recent Payments
                </h2>

                {/* <button className="text-[#00236F] font-semibold hover:underline">
                  View All
                </button> */}
              </div>
              <TenantTransactions />
            </div>
          </div>

          {/* ================= RIGHT COLUMN STARTS IN PART 3 ================= */}
          {/* ================= RIGHT COLUMN ================= */}

          <div className="space-y-6">
            {/* Lease Agreement */}

            <div className="bg-[#00236F] rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white">Lease Agreement</h2>

              <p className="text-blue-100 mt-2 text-sm leading-6">
                Your current lease for {myLease[0]?.property_address} is valid
                until{" "}
                {new Date(myLease[0]?.end_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              {/* ================= KANBAN ================= */}

              <div className="bg-blue-50 rounded-xl p-5 mt-6">
                <h3 className="text-xl font-bold text-[#00236F] mb-5">
                  Lease Progress
                </h3>
                <p>{myLease[0]?.status}</p>
              </div>

              <button
                className="
          mt-6
          w-full
          rounded-lg
          bg-white
          py-3
          font-semibold
          text-[#00236F]
          hover:bg-gray-100
          transition
        "
              >
                <Link to={"/dashboard/lease-docs"}>View Full Document</Link>
              </button>
            </div>

            {/* ================= PROPERTY CARD ================= */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-[#00236F]">
                Your Property
              </h2>

              <img
                src={`https://api.safehomeproperties.com/uploads/${myLease[0]?.property_image}`}
                alt=""
                className="mt-5 w-full h-52 object-cover rounded-lg"
              />

              <div className="mt-5">
                <p className="font-semibold text-[#1E3A8A]">Address</p>

                <p className="text-gray-600 mt-1">
                  {myLease[0]?.property_address}
                </p>
              </div>

              <div className="border-t mt-6 pt-5 flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <MdOutlinePermContactCalendar className="text-2xl text-[#1E3A8A]" />

                  <div>
                    <p className="font-semibold">Property Manager</p>

                    <p className="text-sm text-gray-500">Marcus Johnson</p>
                  </div>
                </div>

                <button className="text-[#1E3A8A] font-semibold hover:underline">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenant;
