import React from "react";
import { Link } from "react-router-dom";

const LandlordCorner = () => {
  return (
    <div>
      <p className="my-10 text-center font-bold text-lg  text-[#00236F]">
        Landlord Corner
      </p>
      <Link
        to={"/dashboard/approve-tenant"}
        className="bg-[#00236F] text-white font-semibold rounded-lg p-3"
      >
        Approve Lease Request
      </Link>
    </div>
  );
};

export default LandlordCorner;
