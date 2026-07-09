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
    <div>
      {/* First Div */}
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-bold">Lease Documents</p>
          <p className="text-gray-500">
            Review, manage and sign your important lease and documents here.
          </p>
        </div>
        <Link
          to={"/dashboard/lease-sign-form"}
          className="flex justify-evenly bg-[#223B7E] text-white px-2 pt-3 rounded-lg"
        >
          <FaFileUpload className="size-5" />
          <p className="ms-2">Sign Lease Document</p>
        </Link>
      </div>
      {/* Second Div */}
      <div className="flex justify-between my-5">
        <div className="relative w-full">
          <input
            type="search"
            className="w-full h-15 bg-[#F5F5F5] placeholder:text-[#999999] placeholder:py-5 placeholder:ps-15"
            placeholder="search by name, property or document"
          />
          <FaSearch className="absolute bottom-5 left-5 size-5 text-gray-500" />
        </div>
        <select name="" id="" className="h-15 w-80 border border-1 ms-40">
          <option value="">status:All</option>
        </select>
      </div>
      {/* Table */}
      {user?.roles?.includes("landlord") ? (
        <LandlordLeaseTable />
      ) : user?.roles?.includes("tenant") ? (
        <TenantLeaseTable />
      ) : user?.roles?.includes("admin") ? (
        <LeaseDocsTable />
      ) : (
        "You're not eligible for leases"
      )}
    </div>
  );
};

export default LeaseDocs;
