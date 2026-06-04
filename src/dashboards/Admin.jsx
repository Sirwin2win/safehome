import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to={"/dashboard/assign-permission"}>
        Assign Permissions to roles
      </Link>
    </div>
  );
};

export default Admin;
