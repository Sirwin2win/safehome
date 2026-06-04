import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRole } from "../features/role/roleSlice";
import { fetchPermission } from "../features/permission/permissionSlice";

const AssignPermission = () => {
  const { roles, roleStatus, roleError } = useSelector((state) => state.roles);
  const { permissions, status, error } = useSelector(
    (state) => state.permissions,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (roleStatus === "idle") {
      dispatch(fetchRole());
    }
  }, [roleStatus, dispatch]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPermission());
    }
  }, [status, dispatch]);
  console.log(roles);
  console.log(permissions);
  return (
    <div>
      <form></form>
    </div>
  );
};

export default AssignPermission;
