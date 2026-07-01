import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { markAsReadLocal } from "../features/notifications/notificationSlice";
import NotificationBell from "../components/NotificationBell";
import { fetchMyProperties } from "../features/properties/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";

const stats = [
  {
    title: "TOTAL PROPERTIES",
    value: "12",
    icon: (
      <MdOutlineHomeWork className="w-8 h-8 rounded-lg bg-gray-200 p-2 text-[#00236F]" />
    ),
    badge: "+2 this month",
    badgeColor: "text-green-600",
  },

  {
    title: "OCCUPIED UNITS",
    value: "10",
    icon: (
      <HiOutlineHomeModern className="w-8 h-8 rounded-lg bg-orange-100 p-2 text-orange-600" />
    ),
    badge: "83.3% Occupancy",
    badgeColor: "bg-gray-100 text-gray-700 px-2 py-1 rounded-full",
  },

  {
    title: "PENDING RENT",
    value: "$4,200",
    icon: (
      <TbCalendarClock className="w-8 h-8 rounded-lg bg-orange-100 p-2 text-orange-600" />
    ),
    badge: "Due in 5d",
    badgeColor: "bg-red-100 text-red-700 px-2 py-1 rounded-full",
    valueColor: "text-red-700",
  },

  {
    title: "MAINTENANCE",
    value: "3",
    icon: (
      <GiSpanner className="w-8 h-8 rounded-lg bg-blue-100 p-2 text-blue-700" />
    ),
    badge: "2 Critical",
    badgeColor: "bg-blue-100 text-blue-700 px-2 py-1 rounded-full",
  },
];

const handleClick = async (id) => {
  dispatch(markAsReadLocal(id));

  try {
    await axios.patch(
      `https://api.safehomeproperties.com/notifications/${id}/read`,
    );
  } catch (error) {
    console.error(error);
  }
};

const Landlords = () => {
  const { properties, propStatus, propError } = useSelector(
    (state) => state.properties,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (propStatus === "idle") {
      dispatch(fetchMyProperties());
    }
  }, [dispatch, propStatus]);
  const notifications = useSelector((state) => state.notifications.items);
  // console.log({ Notice: notifications });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Container */}

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        {/* ================= NAVBAR ================= */}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}

          <form className="w-full md:w-auto">
            <label className="relative block">
              <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

              <input
                type="search"
                placeholder="Search operations..."
                className="w-full md:w-80 rounded-full bg-gray-100 py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#00236F]"
              />
            </label>
          </form>

          {/* Right */}

          <div className="flex items-center justify-end gap-5">
            <div className="relative">
              {/* <FaRegBell className="text-2xl text-gray-700" /> */}
              {/* <NotificationBell onClick={handleClick} /> */}

              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </div>

            <img
              src={pix}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* ================= WELCOME ================= */}

        <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
          <div>
            <p className="text-gray-500">Welcome back, Marcus</p>

            <h1 className="text-3xl font-bold text-[#00236F] mt-2">
              Portfolio Performance
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={"/dashboard/landlord-corner"}
              className="border border-gray-300 bg-white rounded-lg px-5 py-3 font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <FaUserPlus />
              Approve Tenant
            </Link>

            <Link
              to={"/dashboard/property-form"}
              className="bg-[#00236F] hover:bg-[#00184f] text-white rounded-lg px-5 py-3 font-semibold flex items-center justify-center gap-2"
            >
              <FaPlus />
              Add Property
            </Link>
          </div>
        </div>
        {/* ================= STAT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {stats.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex justify-between items-start">
                {card.icon}

                <span className={`text-xs ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>

              <p className="text-gray-500 text-xs uppercase mt-6">
                {card.title}
              </p>

              <h2
                className={`text-3xl font-bold mt-2 ${
                  card.valueColor || "text-gray-900"
                }`}
              >
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        {/* ================= PROPERTY SECTION STARTS IN PART 2 ================= */}

        {/* ================= PROPERTY + ACTIVITY ================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
          {/* ================= PROPERTY OVERVIEW ================= */}

          <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-xl font-bold text-[#00236F]">
                Property Overview
              </h2>

              <button className="text-[#00236F] font-semibold hover:underline">
                View All
              </button>
            </div>
            {/* Table Started */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 text-sm text-gray-500">
                      PROPERTY
                    </th>

                    <th className="text-left p-4 text-sm text-gray-500">
                      LOCATION
                    </th>

                    <th className="text-left p-4 text-sm text-gray-500">
                      STATUS
                    </th>

                    <th className="text-left p-4 text-sm text-gray-500">
                      YIELD
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Row */}

                  {properties?.map((property) => (
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://api.safehomeproperties.com/uploads/${property.image}`}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover"
                          />

                          <div>
                            <p className="font-semibold">{property.address}</p>

                            <p className="text-xs text-gray-500">
                              {property.type}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">{property.address}</td>

                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {property.status}
                        </span>
                      </td>

                      <td className="p-4 font-semibold">0%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Table ended */}
          </div>

          {/* ================= RECENT ACTIVITY ================= */}

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#00236F] mb-6">
              Recent Tenant Activity
            </h2>

            <div className="space-y-8">
              {/* Item */}
              {notifications.map((notice) => (
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <IoIosCheckmarkCircleOutline className="text-green-600 text-xl" />
                    </div>

                    <div className="flex-1 w-px bg-gray-300 mt-2"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold">{notice.title}</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {/* Sarah Jenkins paid */}
                      <span className="font-semibold text-black">
                        {" "}
                        {notice.message}
                      </span>{" "}
                      {/* via Stripe. */}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {formatDistanceToNow(new Date(notice.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= ANALYTICS STARTS IN PART 3 ================= */}
        {/* ================= RENT PAYMENT ANALYTICS ================= */}

        <div className="mt-10 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#00236F]">
                Rent Payment Analytics
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Revenue tracking over the last 6 months
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                This Year
              </button>

              <button className="px-4 py-2 rounded-lg bg-[#00236F] text-white">
                Monthly
              </button>
            </div>
          </div>

          {/* Bar Chart */}

          <div className="mt-10">
            <div className="flex justify-between items-end h-72 gap-4">
              {[
                {
                  month: "Jan",
                  amount: "₦3.5M",
                  height: "h-32",
                },
                {
                  month: "Feb",
                  amount: "₦4.2M",
                  height: "h-40",
                },
                {
                  month: "Mar",
                  amount: "₦4.8M",
                  height: "h-48",
                },
                {
                  month: "Apr",
                  amount: "₦4.0M",
                  height: "h-36",
                },
                {
                  month: "May",
                  amount: "₦5.1M",
                  height: "h-56",
                },
                {
                  month: "Jun",
                  amount: "₦5.8M",
                  height: "h-64",
                },
              ].map((item) => (
                <div
                  key={item.month}
                  className="flex-1 flex flex-col items-center"
                >
                  <span className="text-xs text-gray-500 mb-2">
                    {item.amount}
                  </span>

                  <div
                    className={`w-full max-w-[60px] rounded-t-lg bg-[#00236F] ${item.height} hover:bg-blue-700 transition`}
                  ></div>

                  <span className="mt-3 text-sm font-medium">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= QUICK SUMMARY ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#00236F]">
              Occupancy Rate
            </h3>

            <p className="text-4xl font-bold mt-4">83.3%</p>

            <p className="text-green-600 mt-2">↑ 3.4% from last month</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#00236F]">
              Monthly Revenue
            </h3>

            <p className="text-4xl font-bold mt-4">₦5.8M</p>

            <p className="text-green-600 mt-2">↑ 11% growth</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#00236F]">
              Maintenance Requests
            </h3>

            <p className="text-4xl font-bold mt-4">3</p>

            <p className="text-red-600 mt-2">2 require immediate attention</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlords;
