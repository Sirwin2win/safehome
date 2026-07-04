import React, { useEffect } from "react";
import admin from "../assets/images/admin.avif";
import { FaTools, FaArrowDown, FaPowerOff } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { GiSpanner } from "react-icons/gi";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import NotificationBell from "./NotificationBell";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  let userId = null;

  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.uuid;
  }

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

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

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Dashboard</h2>
          <p className="text-gray-500 mt-1">Welcome back, {user?.name}!</p>
        </div>

        <div className="flex items-center gap-4">
          <NotificationBell onClick={handleClick} />

          <img
            src={admin}
            alt="Admin"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="font-bold text-lg">{user?.name}</p>
            <p className="text-sm text-gray-500 break-all">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="mt-8 bg-[#223B7E] rounded-xl p-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-white text-lg font-semibold">Current Balance</p>

          <p className="text-white text-3xl font-bold mt-2">₦0.00</p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-white text-[#223B7E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full sm:w-auto">
          <MdPayment className="text-2xl" />
          Make a Payment
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-8 bg-[#F5F5F5] rounded-xl p-6">
        {/* Quick Actions */}
        <h3 className="text-xl sm:text-2xl font-bold">Quick Actions</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          <button className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <MdPayment className="text-[#223B7E] text-4xl bg-gray-100 rounded-full p-2" />

            <div className="text-left">
              <p className="font-semibold">Make Payment</p>
              <p className="text-sm text-gray-500">Pay your rent online</p>
            </div>
          </button>

          <Link
            to={"/dashboard/mentenance"}
            className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition"
          >
            <FaTools className="text-[#223B7E] text-4xl bg-gray-100 rounded-full p-2" />

            <div className="text-left">
              <p className="font-semibold">Maintenance Request</p>
              <p className="text-sm text-gray-500">Submit a repair request</p>
            </div>
          </Link>

          <Link
            to={"/dashboard/lease-docs"}
            className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition"
          >
            <IoDocumentTextSharp className="text-[#223B7E] text-4xl bg-gray-100 rounded-full p-2" />

            <div className="text-left">
              <p className="font-semibold">Lease Details</p>
              <p className="text-sm text-gray-500">View lease documents</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity + Autopay */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
          {/* Recent Activity */}
          <div className="xl:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Recent Activity
            </h3>

            {/* Activity Card */}
            <div className="bg-white rounded-xl shadow-sm p-5 mb-5">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FaArrowDown className="bg-green-100 text-green-600 text-5xl rounded-full p-3" />

                  <div>
                    <p className="font-semibold text-lg">
                      Rent Payment Received
                    </p>

                    <p className="text-gray-500">June 1, 2025</p>
                  </div>
                </div>

                <p className="text-green-600 font-bold text-lg">-₦1,240.00</p>
              </div>
            </div>

            {/* Activity Card */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex items-start gap-3">
                <GiSpanner className="bg-orange-100 text-orange-500 text-5xl rounded-full p-3" />

                <div>
                  <p className="font-semibold text-lg">
                    Maintenance Request Submitted
                  </p>

                  <p className="text-gray-500">May 1, 2025 — Leaky Faucet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autopay */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h3 className="text-xl sm:text-2xl font-bold">Autopay Status</h3>

            <div className="flex items-start gap-4 mt-6">
              <FaPowerOff className="bg-red-100 text-red-600 text-5xl rounded-full p-3 flex-shrink-0" />

              <div>
                <p className="font-semibold">Autopay is inactive</p>

                <p className="text-gray-500 mt-1">
                  Enable autopay to automatically pay your monthly rent.
                </p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-lg bg-[#FF6700] text-white py-3 font-semibold hover:bg-orange-600 transition">
              Manage Autopay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
