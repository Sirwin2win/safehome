import React from "react";
import { Link } from "react-router-dom";

const EstateManagerCorner = () => {
  return (
    <div className="w-full">
      <p className="my-6 sm:my-8 md:my-10 text-center font-bold text-lg sm:text-xl text-[#00236F]">
        EstateManager Corner
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <Link
          to="/dashboard/my-estate-member-approval"
          className="w-full bg-[#00236F] text-white font-semibold rounded-lg p-4 text-sm sm:text-base text-center break-words hover:bg-[#00358f] transition"
        >
          Approve Estate Membership Request
        </Link>

        <Link
          to="/dashboard/approve-estate-maintenance"
          className="w-full bg-[#00236F] text-white font-semibold rounded-lg p-4 text-sm sm:text-base text-center break-words hover:bg-[#00358f] transition"
        >
          Approve Maintenance Request
        </Link>

        <Link
          to="/dashboard/estate-properties"
          className="w-full bg-[#00236F] text-white font-semibold rounded-lg p-4 text-sm sm:text-base text-center break-words hover:bg-[#00358f] transition"
        >
          Update Property Status
        </Link>
      </div>
    </div>
  );
};

export default EstateManagerCorner;
