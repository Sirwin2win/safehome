import React, { useEffect, useState } from "react";
import {
  deleteLease,
  fetchLandlordLeases,
  updateLease,
} from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const ApproveTenant = () => {
  const { landlordLeases, leStatus, error } = useSelector(
    (state) => state.leases,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchLandlordLeases());
    }
  }, [leStatus, dispatch]);
  console.log(landlordLeases);

  const handleUpdateStatus = (id, status) => {
    if (window.confirm(`Are you sure you want to ${status} this request?`)) {
      console.log(status);
      dispatch(updateLease({ id, status }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      dispatch(deleteLease(id));
    }
  };

  // Back function
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      {/* Back Buttom */}
      <button
        onClick={back}
        className="flex justify-between bg-[#1B2B3F] text-white p-3 rounded-lg"
      >
        {" "}
        <IoMdArrowRoundBack className="size-7" />{" "}
        <span className="ms-2 font-bold">Back</span>
      </button>
      <p className="text-center font-semibold text-[#00236F] my-5">
        Dear Landlord, kindly engage the customer before giving your approval
      </p>
      {/* Table Started */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4 text-sm text-gray-500">LOCATION</th>

              <th className="text-left p-4 text-sm text-gray-500">NAME</th>
              <th className="text-left p-4 text-sm text-gray-500">EMAIL</th>
              <th className="text-left p-4 text-sm text-gray-500">PHONE</th>

              <th className="text-left p-4 text-sm text-gray-500">STATUS</th>

              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                APPROVE
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                REJECT
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                DELETE
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Row */}

            {landlordLeases?.map((lease) => (
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">{lease.property_address}</td>

                <td className="p-4">{lease.tenant_name}</td>
                <td className="p-4">{lease.tenant_email}</td>
                <td className="p-4">{lease.tenant_phone}</td>

                <td className="p-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      lease.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : lease.status === "REJECTED"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {lease.status || "Pending"}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleUpdateStatus(member.id, "APPROVED")}
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                  >
                    Approve
                  </button>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleUpdateStatus(member.id, "REJECTED")}
                    className="rounded-md bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                  >
                    Reject
                  </button>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table ended */}
    </div>
  );
};

export default ApproveTenant;
