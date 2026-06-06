import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../features/auth/authSlice";

const UserRoles = () => {
  const { users, status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [status, dispatch]);
  console.log(users);
  return (
    <div>
      <form></form>
    </div>
  );
};

export default UserRoles;
