import React from "react";
import { Link } from "react-router-dom";

const EstateManagerCorner = () => {
  return (
    <div>
      <p className="my-10 text-center font-bold text-lg  text-[#00236F]">
        EstateManager Corner
      </p>
      <div className="mb-20">
        <Link
          to={"/dashboard/my-estate-member-approval"}
          className="bg-[#00236F] text-white font-semibold rounded-lg p-3"
        >
          Approve Estate Membership Request
        </Link>
      </div>
      <div className="mb-20">
        <Link
          to={"/dashboard/landlord-transactions"}
          className="bg-[#00236F] text-white font-semibold rounded-lg p-3"
        >
          Aprove Maintenance Request
        </Link>
      </div>
      <div className="mb-20">
        <Link
          to={"/dashboard/landlord-transactions"}
          className="bg-[#00236F] text-white font-semibold rounded-lg p-3"
        >
          Update Property Status
        </Link>
      </div>
    </div>
  );
};

export default EstateManagerCorner;
