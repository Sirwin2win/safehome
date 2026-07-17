import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="mb-20">
        <Link
          to={"/dashboard/estate-member-approval"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Approve Estate Membership Request
        </Link>
      </div>
      <div className="mb-20">
        <Link
          to={"/dashboard/approve-maintenance"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Approve Maintenance Request
        </Link>
      </div>
      <div className="mb-20">
        <Link
          to={"/dashboard/assign-permission"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Assign Permissions to roles
        </Link>
      </div>
      <div>
        <Link
          to={"/dashboard/user-role"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Update user roles
        </Link>
      </div>
      <div className="mt-20">
        <Link
          to={"/dashboard/create-estate"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Create Estate
        </Link>
      </div>
      <div className="mt-20">
        <Link
          to={"/dashboard/all-properties"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Update Property Status
        </Link>
      </div>
      <div className="mt-20">
        <Link
          to={"/dashboard/subscription-form"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Create Subscriptions
        </Link>
      </div>
      <div className="mt-20">
        <Link
          to={"/dashboard/view-all-transactions"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          View All Transactions
        </Link>
      </div>
    </div>
  );
};

export default Admin;
