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
import { fetchMyNotifications } from "../features/notifications/notificationSlice";
import { fetchProfile } from "../features/profile/profileSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  let userId = null;

  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.uuid;
  }

  const { user } = useSelector((state) => state.auth);
  const { profile, profileError, profileStatus } = useSelector(
    (state) => state.profile,
  );
  console.log(user);
  console.log({
    profile,
    profileStatus,
    profileError,
  });
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  // console.log(profile);

  // fetch user
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
  const { myNotice, noticeStatus } = useSelector(
    (state) => state.notifications,
  );
  useEffect(() => {
    if (noticeStatus === "idle") {
      dispatch(fetchMyNotifications());
    }
  }, [dispatch, noticeStatus]);
  console.log(myNotice);
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between w-full min-w-0">
        {/* Dashboard heading */}
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold">Dashboard</h2>

          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Welcome back, {user?.name}!
          </p>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto min-w-0">
          <NotificationBell onClick={handleClick} />

          <img
            src={profile?.image}
            alt="Admin"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />

          <div className="min-w-0 flex-1 lg:flex-none">
            <p className="font-bold text-base sm:text-lg truncate">
              {user?.name}
            </p>

            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="mt-6 sm:mt-8 bg-[#223B7E] rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
        <div>
          <p className="text-white text-sm sm:text-lg font-semibold">
            Current Balance
          </p>

          <p className="text-white text-2xl sm:text-3xl font-bold mt-1">
            ₦0.00
          </p>
        </div>

        {["tenant"].some((role) => user?.roles?.includes(role)) && (
          <Link
            to="/dashboard/lease-docs"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#223B7E] px-5 py-3 rounded-lg font-semibold"
          >
            <MdPayment className="text-xl" />
            Make Payments
          </Link>
        )}

        {["landlord"].some((role) => user?.roles?.includes(role)) && (
          <Link
            to="/dashboard/lease-docs"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#223B7E] px-5 py-3 rounded-lg font-semibold"
          >
            <MdPayment className="text-xl" />
            My Rents
          </Link>
        )}

        {["admin"].some((role) => user?.roles?.includes(role)) && (
          <Link
            to="/dashboard/view-all-transactions"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#223B7E] px-5 py-3 rounded-lg font-semibold"
          >
            <MdPayment className="text-xl" />
            All Payments
          </Link>
        )}
      </div>

      {/* Main Content */}
      <div className="mt-6 sm:mt-8 bg-[#F5F5F5] rounded-xl p-3 sm:p-4 md:p-6 w-full overflow-hidden">
        {/* Quick Actions */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
          Quick Actions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6">
          {["tenant"].some((role) => user?.roles?.includes(role)) && (
            <Link
              to="/dashboard/lease-docs"
              className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition min-w-0"
            >
              <MdPayment className="text-[#223B7E] text-3xl sm:text-4xl bg-gray-100 rounded-full p-2 flex-shrink-0" />

              <div className="text-left min-w-0">
                <p className="font-semibold text-sm sm:text-base">
                  Lease Status
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Track leases & get a pdf
                </p>
              </div>
            </Link>
          )}

          {["landlord"].some((role) => user?.roles?.includes(role)) && (
            <Link
              to="/dashboard/lease-docs"
              className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition min-w-0"
            >
              <MdPayment className="text-[#223B7E] text-3xl sm:text-4xl bg-gray-100 rounded-full p-2 flex-shrink-0" />

              <div className="text-left min-w-0">
                <p className="font-semibold text-sm sm:text-base">My Rents</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Properties rent histories
                </p>
              </div>
            </Link>
          )}

          {["admin"].some((role) => user?.roles?.includes(role)) && (
            <Link
              to="/dashboard/view-all-transactions"
              className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition min-w-0"
            >
              <MdPayment className="text-[#223B7E] text-3xl sm:text-4xl bg-gray-100 rounded-full p-2 flex-shrink-0" />

              <div className="text-left min-w-0">
                <p className="font-semibold text-sm sm:text-base">
                  All Payments
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Pay your rent online
                </p>
              </div>
            </Link>
          )}

          <Link
            to="/dashboard/mentenance"
            className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition min-w-0"
          >
            <FaTools className="text-[#223B7E] text-3xl sm:text-4xl bg-gray-100 rounded-full p-2 flex-shrink-0" />

            <div className="text-left min-w-0">
              <p className="font-semibold text-sm sm:text-base">
                Maintenance Request
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Submit a repair request
              </p>
            </div>
          </Link>

          <Link
            to="/dashboard/lease-docs"
            className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition min-w-0"
          >
            <IoDocumentTextSharp className="text-[#223B7E] text-3xl sm:text-4xl bg-gray-100 rounded-full p-2 flex-shrink-0" />

            <div className="text-left min-w-0">
              <p className="font-semibold text-sm sm:text-base">
                Lease Details
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                View lease documents
              </p>
            </div>
          </Link>
        </div>

        {/* Recent Activity + Autopay */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {/* Recent Activity */}
          <div className="xl:col-span-2 min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5">
              Recent Activity
            </h3>

            {myNotice?.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-xl shadow-sm p-4 sm:p-5 mb-4 sm:mb-5"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <FaArrowDown className="bg-green-100 text-green-600 text-4xl sm:text-5xl rounded-full p-3 flex-shrink-0" />

                    <div className="min-w-0">
                      <p className="font-semibold text-base sm:text-lg break-words">
                        {notice.message}
                      </p>

                      <p className="text-sm sm:text-base text-gray-500 break-words">
                        {notice.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-green-600 font-bold text-sm sm:text-lg sm:whitespace-nowrap">
                    {new Date(notice.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Autopay */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 h-fit w-full min-w-0">
            <h3 className="text-lg sm:text-xl font-bold">Autopay Status</h3>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-5 sm:mt-6">
              <FaPowerOff className="bg-red-100 text-red-600 text-5xl rounded-full p-3 flex-shrink-0" />

              <div className="min-w-0">
                <p className="font-semibold text-base">Autopay is inactive</p>

                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Enable autopay to automatically pay your monthly rent.
                </p>
              </div>
            </div>

            <button className="mt-6 sm:mt-8 w-full rounded-lg bg-[#FF6700] text-white py-3 font-semibold hover:bg-orange-600 transition">
              Manage Autopay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
