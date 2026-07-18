import React from "react";
import { Link } from "react-router-dom";

const HomeownerCorner = () => {
  return (
    <div>
      <p className="text-center text-lg font-bold mb-20 text-[#1B2B3F]">
        Homeowner Corner
      </p>
      <div className="mb-20">
        <Link
          to={"/dashboard/property-form"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Create Property
        </Link>
      </div>
      <div className="mb-20">
        <Link
          to={"/dashboard/update-owner-property"}
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          Update Property Status
        </Link>
      </div>
    </div>
  );
};

export default HomeownerCorner;
