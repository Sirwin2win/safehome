import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRoles } from "../features/role/roleSlice";
import { fetchPermissions } from "../features/permission/permissionSlice";
import { div } from "framer-motion/client";
import { addRolePermission } from "../features/rolePermission/rolePermissionSlice";

const AssignPermission = () => {
  const { roles, roleStatus, roleError } = useSelector((state) => state.roles);
  const { permissions, status, error } = useSelector(
    (state) => state.permissions,
  );
  const { rPstatus } = useSelector((state) => state.rolePermissions);
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    if (roleStatus === "idle") {
      dispatch(fetchRoles());
    }
  }, [roleStatus, dispatch]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPermissions());
    }
  }, [status, dispatch]);
  console.log(roles);
  console.log(permissions);

  const handlePermissionChange = (permissionId) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId],
    );
  };
  // send the endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    const payload = {
      role_id: selectedRole,
      permission_id: selectedPermissions,
    };

    console.log(payload);
    dispatch(addRolePermission(payload));
  };
  useEffect(() => {
    if (rPstatus === "succeeded") {
      setSelectedPermissions([]);
      setSelectedRoles(null);
    }
  }, [rPstatus]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="text-green-500 text-lg font-bold text-center">
          {rPstatus === "succeeded" && "Role Permissions Saved!"}
        </p>
        <div>
          <p className="text-center text-lg font-bold">Select Role</p>
          {roles.map((role) => (
            <div key={role.id}>
              <label>
                <input
                  type="radio"
                  name="role"
                  value={role.id}
                  checked={selectedRole === role.id}
                  onChange={() => setSelectedRole(role.id)}
                />
                <span className="ms-5">{role.name}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="my-10">
          <p className="text-center text-lg font-bold">Select Permissions</p>
          {permissions.map((permission) => (
            <div key={permission.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedPermissions.includes(permission.id)}
                  onChange={() => handlePermissionChange(permission.id)}
                />
                <span className="ms-5">{permission.permission_key}</span>
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-[#1B2B3F] text-white p-5 rounded-lg"
        >
          <span>{rPstatus === "loading" ? "Saving records..." : "Save"}</span>
        </button>
      </form>
    </div>
  );
};

export default AssignPermission;
