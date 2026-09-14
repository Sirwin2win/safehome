import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <Link
          to="/dashboard/estate-member-approval"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Approve Estate Membership Request
        </Link>

        <Link
          to="/dashboard/approve-maintenance"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Approve Maintenance Request
        </Link>

        <Link
          to="/dashboard/assign-permission"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Assign Permissions to Roles
        </Link>

        <Link
          to="/dashboard/user-role"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Update User Roles
        </Link>

        <Link
          to="/dashboard/create-estate"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Create Estate
        </Link>

        <Link
          to="/dashboard/all-properties"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Update Property Status
        </Link>

        <Link
          to="/dashboard/subscription-form"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Create Subscriptions
        </Link>

        <Link
          to="/dashboard/view-all-transactions"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          View All Transactions
        </Link>

        <Link
          to="/dashboard/create-estate"
          className="bg-[#1B2B3F] text-white p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold text-center hover:bg-[#263d57] transition break-words"
        >
          Assign Estate Managers To Estates
        </Link>
      </div>
    </div>
  );
};

export default Admin;
