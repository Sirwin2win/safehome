import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link
        to={"/dashboard/assign-permission"}
        className="bg-[#1B2B3F] text-white p-5 rounded-lg"
      >
        Assign Permissions to roles
      </Link>
    </div>
  );
};

export default Admin;
