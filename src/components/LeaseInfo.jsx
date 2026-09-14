import React, { useEffect, useState } from "react";
import {
  TbFileDownloadFilled,
  TbCurrencyDollar,
  TbPigFilled,
} from "react-icons/tb";
import { LuCalendarCheck, LuCalendarX } from "react-icons/lu";
import { FaCalendarAlt, FaChevronUp } from "react-icons/fa";
import { IoMdCheckmark, IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import eze from "../assets/images/safe_home_properties_eze_patrick.jpg";
import { fetchMyLeases } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeaseInfo = () => {
  const dispatch = useDispatch();
  const { myLease, leStatus } = useSelector((state) => state.leases);
  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchMyLeases());
    }
  }, [leStatus, dispatch]);
  const startDate = new Date(myLease[0]?.start_date);
  const endDate = new Date(myLease[0]?.end_date);
  return (
    <div className="mx-3 w-full max-w-full overflow-hidden sm:mx-5">
      {/* ================= LEASE INFORMATION HEADER ================= */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <p className="text-xl font-semibold sm:text-2xl">Lease Information</p>

          <p className="break-words text-sm text-[#999999] sm:text-base">
            {myLease[0]?.property_address}
          </p>
        </div>

        <Link
          to="/dashboard/lease-docs"
          className="grid w-full grid-cols-[auto_1fr] items-center justify-center gap-2 rounded-lg bg-[#223B7E] px-4 py-3 text-center sm:w-fit"
        >
          <TbFileDownloadFilled className="size-5 text-white" />

          <span className="text-sm text-white sm:text-base">
            Download Full Lease (PDF)
          </span>
        </Link>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mt-6 grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:mt-10">
        {/* ================= LEFT CONTENT ================= */}
        <div className="grid min-w-0 grid-cols-1 gap-6">
          {/* ================= LEASE TERM ================= */}
          <div className="w-full rounded-lg bg-[#F5F5F5] p-4 sm:p-5">
            <p className="my-4 text-lg font-bold sm:my-5">Lease Term</p>

            {/* Dates */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Start Date */}
              <div className="grid grid-cols-[auto_1fr] items-center gap-3 min-w-0">
                <LuCalendarCheck className="size-10 shrink-0 bg-[#223B7E4D] p-1 text-[#223B7E]" />

                <div className="min-w-0">
                  <p className="text-sm text-[#999999]">Lease Start Date</p>

                  <p className="break-words font-bold">
                    {new Date(startDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* End Date */}
              <div className="grid grid-cols-[auto_1fr] items-center gap-3 min-w-0">
                <LuCalendarX className="size-10 shrink-0 bg-[#223B7E4D] p-1 text-[#223B7E]" />

                <div className="min-w-0">
                  <p className="text-sm text-[#999999]">Lease End Date</p>

                  <p className="break-words font-bold">
                    {new Date(endDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Remaining */}
            <p className="mt-8 text-sm text-[#999999]">Time Remaining</p>

            {/* Progress Bar */}
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-[#223B7E]"
                style={{ width: "40%" }}
              />
            </div>
          </div>

          {/* ================= FINANCIALS ================= */}
          <div className="w-full rounded-lg bg-[#F5F5F5] p-4 sm:p-5">
            <p className="my-4 text-lg font-bold sm:my-5">Financials</p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Yearly Rent */}
              <div className="grid grid-cols-[auto_1fr] items-center gap-3 min-w-0">
                <TbCurrencyDollar className="size-10 shrink-0 bg-[#223B7E4D] p-1 text-[#223B7E]" />

                <div className="min-w-0">
                  <p className="text-sm text-[#999999]">Yearly Rent</p>

                  <p className="break-words font-bold">
                    ₦{myLease[0]?.rent_amount}
                  </p>
                </div>
              </div>

              {/* Rent Due Date */}
              <div className="grid grid-cols-[auto_1fr] items-center gap-3 min-w-0">
                <FaCalendarAlt className="size-10 shrink-0 bg-[#223B7E4D] p-1 text-[#223B7E]" />

                <div className="min-w-0">
                  <p className="text-sm text-[#999999]">Rent Due Date</p>

                  <p className="break-words font-bold">31st of Every Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROPERTY MANAGER ================= */}
        <div className="w-full rounded-lg bg-[#F5F5F5] p-5 sm:px-8 lg:px-10">
          <p className="mt-3 text-2xl font-medium sm:mt-5 sm:text-3xl">
            Property Manager
          </p>

          {/* Manager */}
          <div className="my-6 grid grid-cols-[auto_1fr] items-center gap-4 sm:my-10">
            <img
              src={eze}
              alt="Property Manager"
              className="size-16 rounded-full object-cover sm:size-20"
            />

            <div className="min-w-0">
              <p className="truncate text-lg font-medium sm:text-xl">
                Eze Patrick
              </p>

              <p className="mt-2 text-sm text-[#999999] sm:mt-3">
                Estate Management
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <MdLocalPhone className="shrink-0" />

            <p className="break-all text-sm sm:text-base">+234 704 100 5315</p>
          </div>

          {/* Email */}
          <div className="my-6 grid grid-cols-[auto_1fr] items-center gap-3 sm:my-10">
            <IoMdMail className="shrink-0" />

            <p className="break-all text-sm sm:text-base">
              sales@safehomeproperties.com
            </p>
          </div>

          {/* Contact Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-[#FF6700C9] px-5 py-3 font-bold text-[#223B7E]"
          >
            Contact Property Manager
          </button>
        </div>
      </div>

      {/* ================= SPECIAL TERMS ================= */}
      <div className="my-6 grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg bg-[#F1F1F1CC] px-4 py-4 sm:my-10 sm:px-5">
        <p className="min-w-0 break-words">Special Terms &amp; Clauses</p>

        <FaChevronUp className="shrink-0" />
      </div>
    </div>
  );
};

export default LeaseInfo;
