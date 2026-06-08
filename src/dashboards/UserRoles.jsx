import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../features/auth/authSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { fetchRoles } from "../features/role/roleSlice";
import { updateUserRole } from "../features/userRoles/userRoleSlice";
import { p } from "framer-motion/client";

const UserRoles = () => {
  const { users, status, error } = useSelector((state) => state.auth);
  const { roles, roleStatus } = useSelector((state) => state.roles);
  const { URstatus } = useSelector((state) => state.userRoles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [status, dispatch]);
  useEffect(() => {
    if (roleStatus === "idle") {
      dispatch(fetchRoles());
    }
  }, [roleStatus, dispatch]);
  console.log(users);
  console.log(roles);

  // Back function
  const back = () => {
    navigate(-1);
  };
  const [selectedUserId, setSelectedUserId] = useState("");
  const [oldRoleId, setOldRoleId] = useState("");
  const [newRoleId, setNewRoleId] = useState("");

  const selectedUser = users?.find(
    (user) => user.id === Number(selectedUserId),
  );

  useEffect(() => {
    if (selectedUser?.roles?.length) {
      setOldRoleId(selectedUser.roles[0].id);
    } else {
      setOldRoleId("");
    }

    setNewRoleId("");
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userRole = {
      userId: selectedUser.id,
      oldRoleId,
      newRoleId,
    };

    console.log(userRole);

    dispatch(updateUserRole(userRole));
  };

  return (
    <div className="-ms-5">
      {/* Back Button Started */}
      <button
        onClick={back}
        className="flex justify-between bg-[#1B2B3F] text-white p-3 rounded-lg"
      >
        {" "}
        <IoMdArrowRoundBack className="size-7" />{" "}
        <span className="ms-2 font-bold">Back</span>
      </button>
      {/* Form Started */}
      <form onSubmit={handleSubmit}>
        {/* Select User */}
        <div className="mb-4">
          <label>Select User</label>

          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Choose User</option>

            {users?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <>
            {/* Existing Roles */}
            <div className="mb-4">
              <h3 className="font-semibold">Select Role To Update</h3>

              {selectedUser.roles.map((role) => (
                <label key={role.id} className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="oldRole"
                    value={role.id}
                    checked={Number(oldRoleId) === role.id}
                    onChange={() => setOldRoleId(role.id)}
                  />

                  {role.name}
                </label>
              ))}
            </div>

            {/* Available Roles */}
            <div className="mb-4">
              <h3 className="font-semibold">Replace With</h3>

              {roles.map((role) => (
                <label key={role.id} className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="newRole"
                    value={role.id}
                    checked={Number(newRoleId) === role.id}
                    onChange={() => setNewRoleId(role.id)}
                  />

                  {role.name}
                </label>
              ))}
            </div>
            {URstatus === "succeeded" && (
              <p className="text-green-500">User role updated successfully!</p>
            )}

            <button
              type="submit"
              disabled={!oldRoleId || !newRoleId}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              <span>
                {URstatus === "loading" ? "updating..." : "Update Role"}
              </span>
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default UserRoles;
