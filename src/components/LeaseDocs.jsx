import React, { useEffect, useState } from "react";
import LeaseDocsTable from "./LeaseDocsTable";
import { FaFileUpload, FaSearch } from "react-icons/fa";
import { fetchLeases } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../features/auth/authSlice";
import LandlordLeaseTable from "./LandlordLeaseTable";
import TenantLeaseTable from "./TenantLeaseTable";

const LeaseDocs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Get token from localStorage
  const token = localStorage.getItem("token");
  let userId = null;
  try {
    if (token) {
      // Decode token
      const decoded = jwtDecode(token);

      // console.log(decoded);

      // Access user id
      userId = decoded.uuid;

      // console.log("User uuid:", userId);
    }
  } catch (error) {
    console.log(error.message);
  }

  // get auth info from the state
  const { user, status, error } = useSelector((state) => state.auth);

  // initialize dispatch
  // const dispatch = useDispatch();

  // dispatch for the actual user
  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="w-full min-w-0">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-xl font-bold sm:text-2xl">Lease Documents</p>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Review, manage and sign your important lease and documents here.
          </p>
        </div>

        <Link
          to="/dashboard/lease-docs"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#223B7E] px-4 py-3 text-sm text-white sm:w-auto"
        >
          <FaFileUpload className="size-5 shrink-0" />

          <span>Sign Lease Document</span>
        </Link>
      </div>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="my-5 flex w-full flex-col gap-3 sm:flex-row">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <input
            type="search"
            className="h-14 w-full rounded-lg bg-[#F5F5F5] pl-12 pr-4 text-sm outline-none placeholder:text-[#999999] focus:ring-2 focus:ring-[#223B7E]"
            placeholder="Search by name, property or document"
          />

          <FaSearch className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Status */}
        <select
          name="status"
          id="status"
          className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#223B7E] sm:w-52 md:w-64"
        >
          <option value="">Status: All</option>
          <option value="LEASE-READY">Lease Ready</option>
          <option value="LEASE-SIGNED">Lease Signed</option>
        </select>
      </div>

      {/* ================= TABLE ================= */}
      {user?.roles?.includes("landlord") ? (
        <LandlordLeaseTable />
      ) : user?.roles?.includes("tenant") ? (
        <TenantLeaseTable />
      ) : user?.roles?.includes("admin") ? (
        <LeaseDocsTable />
      ) : (
        <p className="py-10 text-center text-gray-500">
          You're not eligible for leases
        </p>
      )}
    </div>
  );
};

export default LeaseDocs;
