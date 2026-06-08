import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
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
    </div>
  );
};

export default Admin;
