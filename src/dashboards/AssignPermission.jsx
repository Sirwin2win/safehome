import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRoles } from "../features/role/roleSlice";
import { fetchPermissions } from "../features/permission/permissionSlice";
import { div } from "framer-motion/client";

const AssignPermission = () => {
  const { roles, roleStatus, roleError } = useSelector((state) => state.roles);
  const { permissions, status, error } = useSelector(
    (state) => state.permissions,
  );
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState([]);
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

  const handlePermissionChange = (permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission],
    );
  };

  return (
    <div>
      <form>
        <div>
          <p className="text-center text-lg font-bold">Select Role</p>
          {roles.map((role) => (
            <div>
              <label key={role.id}>
                <input
                  type="radio"
                  name="role"
                  value={role.name}
                  checked={selectedRole === role.name}
                  onChange={(e) => setSelectedRole(e.target.value)}
                />
                <span className="ms-5">{role.name}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="my-10">
          <p className="text-center text-lg font-bold">Select Permissions</p>
          {permissions.map((permission) => (
            <div>
              <label key={permission.id}>
                <input
                  type="checkbox"
                  checked={selectedPermissions.includes(
                    permission.permission_key,
                  )}
                  onChange={() =>
                    handlePermissionChange(permission.permission_key)
                  }
                />
                <span className="ms-5">{permission.permission_key}</span>
              </label>
            </div>
          ))}
        </div>
        <button className="bg-[#1B2B3F] text-white p-5 rounded-lg">
          <span>Save</span>
        </button>
      </form>
    </div>
  );
};

export default AssignPermission;
