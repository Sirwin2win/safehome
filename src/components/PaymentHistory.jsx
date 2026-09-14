import React from "react";
import { FaFileUpload, FaSearch } from "react-icons/fa";
import PaymentHistoryTbl from "./PaymentHistoryTbl";

const PaymentHistory = () => {
  return (
    <div className="grid w-full max-w-full grid-cols-1 gap-6 overflow-hidden">
      {/* ================= TITLE ================= */}
      <div>
        <p className="text-xl font-bold sm:text-2xl">Payment History</p>
      </div>

      {/* ================= PAYMENT SUMMARY ================= */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* Total Paid */}
        <div className="rounded-lg bg-[#223B7E] p-5 text-white sm:p-8">
          <p className="text-sm sm:text-base">Total Paid (This year)</p>

          <p className="mt-2 text-2xl font-bold sm:text-3xl">₦0.00</p>
        </div>

        {/* Upcoming Payments */}
        <div className="rounded-lg bg-[#FF6700C9] p-5 text-white sm:p-8">
          <p className="text-sm text-[#505050] sm:text-base">
            Upcoming Payments
          </p>

          <p className="mt-2 text-2xl font-bold sm:text-3xl">₦0.00</p>
        </div>
      </div>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
        {/* Search */}
        <div className="relative w-full">
          <input
            type="search"
            className="h-14 w-full rounded-lg bg-[#F5F5F5] pl-12 pr-4 text-sm outline-none placeholder:text-[#999999] focus:ring-2 focus:ring-[#223B7E]"
            placeholder="Search by name, property or document"
          />

          <FaSearch className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Filter */}
        <select
          name="type"
          id="type"
          className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#223B7E] sm:w-52 md:w-64"
        >
          <option value="">All Types</option>
        </select>
      </div>

      {/* ================= PAYMENT TABLE ================= */}
      <div className="w-full max-w-full overflow-hidden">
        <PaymentHistoryTbl />
      </div>
    </div>
  );
};

export default PaymentHistory;
